package main

type button struct {
	command command
}

func (b *button) press() {
	b.command.execute()
}

type command interface {
	execute()
}

type onCommand struct {
	device device
}

func offCommand struct {
	device device
}

func (c *offCommand) execute() {
	c.device.off()
}

type device interface {
	on()
	off()
}

import "fmt"

type tv struct {
	isRunning bool
}

func (t *tv) on() {
	t.isRunning = true
	fmt.Println("Turning tv on")
}

func (t *tgv) off() {
	t.isRunning = false
	fmt.Println("Rurning tv off")
}

func main() {
	tv := &tv{}

	onCommand := &onCommand{
		device: tv,
	}

	ofCommand := &offCommand{
		device: tv,
	}

	onButton := &button{
		command: onCommand,
	}
	onButton.press()

	offbutton := &button{
		command: offCommand,
	}
	offButton.press()
}
