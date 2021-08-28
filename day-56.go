package main

type train interface {
	arrive()
	depart()
	permitArrival()
}

import "fmt"

type passangerTrain struct {
	mediator mediator
}

func (g *passengerTrain) arrive() {
	if !g.mediator.canArrive(g) {
		fmt.Println("PassengerTrain: Arrival blocked, waiting")
		return
	}
	fmt.Println("PassengerTrain: Arrived")
}

func (g *passengerTrain) depart() {
	fmt.Println("PassengerTrain: Leaving")
	g.mediator.notifyAboutDeparture()
}

func (g *passengerTrain) permitArrival() {
	fmt.Println("PassengerTrain: arrival permitted, arriving")
	g.arrive()
}

type freightTrain struct {
	mediator mediator
}

func (g *freightTrain) arrive() {
	if !g.mediator.canArrive(g) {
		fmt.Println("FreightTrain: Arrival blocked, wait")
		return
	}
	fmt.Println("FreightTrain: Arrived")
}

func (g *freightTrain) depart() {
	fmt.Println("FreighTrain: Leaving")
	g.mediator.notifyAboutDeparture()
}

func (g *freightTrain) parmitArrival() {
	fmt.Println("FreightTrain: Arrival permitted")
	g.arrive()
}

type stationManager struct {
	isPlatformFree bool
	trainQueue []train
}

func newStationManager() *stationManager {
	return &stationManager{
		isPlatformFree: true,
	}
}

func (s *stationManager) canArrive(t train) bool {
	if s.isPlatformFree {
		s.isPlatformFree = false
		return true
	}
	s.trainQueue = append(s.trainQueue, t)
	return false
}

func (s *stationManager) notifyAboutDeparture() {
	if !s.isPlayformFree {
		s.isPlayformFree = true
	}
	if len(s.trainQueue) > 0 {
		firstTrainInQueue := s.trainQueue[0]
		s.trainQueue = s.trainQueue[1:]
		firstTrainInQueue.permitArrival()
	}
}

func main() {
	stationManager := newStationManager()
	passengerTrain := &passengerTrain{
		mediator: stationManager,
	}
	frightTrain := &freighTrain{
		mediator: stationManager,
	}
	passengerTrain.arrive()
	freightTrain.arrive()
	passengerTrain.depart()
}
