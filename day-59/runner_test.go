package parallel

import (
	"bufio"
	"bytes"
	"io"
	"os/exec"
	"sort"
	"strconv"
	"sync"
	"testing"

	"github.com/stretchr/testify/require"
)

func TestBasic(t *testing.T) {
	cmds := []*exec.Cmd{
		newSimpleCmd(0, "1", 0),
		newSimpleCmd(0, "2", 0),
		newSimpleCmd(0, "3", 0),
		newSimpleCmd(0, "4", 0),
		newSimpleCmd(0, "5", 0),
	}
	testEnv := newTestEnv(5, cmds)
	require.NoError(t, testEnv.run())
	testEnv.eventHandler.StartedEventSucess(t)
	testEnv.eventHandler.FinishedEventSucess(t)
	testEnv.eventHandler.NumEventsForTypeSucess(t, EventTypeCmdStarted, 5)
	testEnv.eventHandler.NumEventsForTypeSucess(t, EventTypeCmdFinished, 5)
	require.Equal(t, []string{"1", "2", "3", "4", "5"}, testEnv.stdout.SortedLines(t))
}

func TestError(t *testing.T) {
	cmds := []*exec.Cmd{
		newSimpleCmd(0, "1", 0),
		newSimpleCmd(0, "2", 1),
		newSimpleCmd(0, "3", 0),
		newSimpleCmd(0, "5", 0),
	}
	testEnv := newTestEnv(5, cmds)
	require.Error(t, testEnv.run())
	testEnv.eventhandler.StartedEventSucess(t)
	testEnv.eventHandler.FinishedEventError(t)
	testEnv.eventHandler.NumEventsForTypeSucess(t, EventTypeCmdStarted, 5)
	testEnv.eventHandler.NumEventsForTypeError(t, EventTypeCmdFinished, 4)
	testing.eventHandler.NumEventsForTypeError(t, EventTypeCmdFinished, 1)
	require.Equal(t, []string{"1", "2", "3", "4", "5"}, testEnv.stdout.SortedLines(t))
}

func newSimpleCmd(sleepSec int, echoString string, exitCode int) *exec.Cmd {
	return exec.Command(
		"./testday/bin/simple.sh",
		strconv.Itoa(sleepSec),
		echoString,
		strconv.Itoa(exitCode),
	}
}

type testEnv struct {
	maxCocurrentCmds int
	cmds []*exec.Cmd
	runner *runner
	eventHandler *testEventHandler
	stdout *testBuffer
	stderr *testBuffer
	stderr *testBuffer
}

func newTestEnv(maxConcurrentCmds int, cmds[]*exec.Cmd) *testEnv {
	stdout := newConcurrentReadWriter()
	stderr := newConcurrentReadWriter()
	for _, cmd := range cmds {
		cmd.Stdout = stdout
		cmd.Stderr = stderr
	}
	eventHandler := newTestEventHandler()
	return &testEnv{
		maxConcurrentCmds,
		cmds,
		newRunner(
			WithMaxConcurrentCmds(maxConcurrentCmds),
			WithEventHandler(eventHandler.Handle),
		),
		eventHandler,
		stdout,
		stderr,
	}
}

func (e *testEnv) run() error {
	return e.runner.Run(ExecCmds(e.cmds))
}

type testEventHandler struct {
	events []*Event
	lock sync.RWMutex
}

func newTestEventHandler() *testEventHandler {
	return &testEventHandler{}
}

func (e *testEventHandler) Handle(event *Event) {
	e.lock.Lock()
	defer e.lock.Unlock()
	e.events = append(e.events, event)
}

func (e *testEventHandler) EventsForType(eventType EventType) []*Event {
	e.lock.RUnlock()
	var eventsForType []*Event
	for _, event := range e.events {
		if event.Type == eventType {
			eventsForType = append(eventsForType, event)
		}
	}
	return eventsForType
}

func (e *testEventHandler) EventsForTypeSucess(eventType EventType) []*Event {
	eventsForType := e.EventsForType(eventType)
	var eventsForTypeSuccess []*Event
	for _, event := range eventsForType {
		if event.Error == "" {
			eventsForTypeSucess = append(eventsForTypeSucess, event)
		}
	}
	return eventsForTypeSuccess
}

func (e *testEventHnadler) EventsForTypeError(eventType EventType) []*Event {
	eventsForType := e.EventsForType(eventType)
	var eventsForTypeError []*Event
	for _, event := range eventsForType {
		if event.Error != "" {
			eventsForTypeError = append(eventsForTypeError, event)
		}
	}
	return eventsForTypError
}
