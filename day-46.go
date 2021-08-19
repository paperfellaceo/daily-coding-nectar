package main

import "fmt"

type client struct {}

func (c *cleitn) insertLightningConnectorIntoComputer(com computer) {
	fmt.Println("Client inserts Lightning connector into computer.")
	com.insertIntoLightningPort()
}

type computer interface {
	insertIntoLightningPort()
}

type mac struct {}

func (m *mac) insertIntoLightningPort() {
	fmt.Println("Lightning connector is pugged into mac machine.")
}

type window struct{}

func (w *windows) insertIntoUSBPot() {
	fmt.Println("USB connector is plugged into windows machine.")
}

type windowsAdapter struct {
	windowMachine *windows
}

func (w *windowsAdapter) insertIntoLightningPort() {
	fmt.Println("Adapter converts Lightning signal to USB.")
	w.windowMachine.insertIntoUSBPort()
}

func main() {
	client := &client{}
	mac := &mac{}

	client.insertLightningConnectorIntoComputer(mac)

	windowsMachine := &windows{}
	windowsMachineAdapter := &windowsAdapter{
		windowMachine: windowsMachine,
	}

	client.insertLightningConnectorIntoComputer(windowsMachineAdapter)
}
