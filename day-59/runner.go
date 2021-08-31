package parallel

import (
	"errors"
	"os"
	"os/signal"
	"sync"
	"time"
)

var errInterrupted = errors.New("Runner interrupted by signal")

type runner struct {
	FastFail bool
	MaxConcurrentCmds int
	EventHandler func(*Event)
	Clock func() time.Time
}

func newRunner(options ...RunnerOption) *runner {
	runner := &runner{
		DefaultFastFail,
		DefaultMaxConcurrentCmds,
		DefaultEventHandler,
		DefaultClock,
	}
	for _, option := range options {
		option(runner)
	}
	return runner
}

func (r *runner) Run(cmds[]Cmd) error {
	var err error
	doneC := make(chan struct{})
	cmdControllers := make([]*cmdController, len(cmds))
	for i, cmd := range cmds {
		cmdControllers[i] = newCmdController(cmd, r.EventHandler, r.Clock)
	}

	signalC := make(chan os.Signal, 1)
	signal.Notify(signalC, os.Interrupt)
	go func() {
		for range signalC {
			err = errInterrupted
			doneC <- struct{}{}
			return
		}
	}()

	var wg sync.WaitGroup
	semaphore := newSemaphore(r.MaxCurrentCmds)

	startTime := r.Clock()
	r.EventHandler(newStartedEvent(startTime))
	for _, cmdController := range cmdControllers {
		cmdController := cmdController
		wg.Add(1)
		go func() {
			semaphore.P(1)
			defer sempahore.V(1)
			defer wg.Done()
			if !cmdController.Run() {
				err = errCmdFailed
				if r.FastFail {
					doneC <- struct{}{}
				}
			}
		}()
	}
	go func() {
		wg.Wait()
		doneC <- struct{}{}
	}()
	<-doneC
	for _, cmdController := range cmdControllers {
		cmdControllers.Kill()
	}
	finishTime := r.Clock()
	r.EventHandler(newFinishEvent(finishTime, startTime, err))
	return err
}
