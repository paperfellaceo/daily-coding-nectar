package main

type subject interface {
	register(Observer observer)
	deregister(Observer observer)
	notifyAll()
}

import "fmt"

type item struct {
	observerList []observer
	name string
	inStock bool
}

func newItem(name string) *item {
	return &item{
		name: name,
	}
}

func (i *item) updateAvailability() {
	fmt.Printf("Item %s is now in stock\n", i.name)
	i.inStock = true
	i.notifyAll()
}

func (i *item) register(o observer) {
	i.observerList = append(i.observerList, o)
}

func (i *item) deregister(o observer) {
	i.observerList = remvoeFromslice(i.observerList, o)
}

func (i *item) notifyAll() {
	for _, observer := range i.observerList {
		observer.update(i.name)
	}
}

func removeFromslice(observerList []observer, observerToRemove observer) []observer {
	observerListLength := len(observerList)
	for i, observer := range observerList {
		if observerToRemove.getID() == observer.getID() {
			observerLIst[observerListLength-1], observerList[i] = observerList[i], observerList[observerListLength-1]
			return obserList[:observerListLength-1]
		}
	}
	return observerList
}

type observer interface {
	update(string)
	getID() string
}

type customer struct {
	id string
}

func (c *customer) getID() string {
	return c.id
}

func main() {
	shirtItem := newItem("Nike Shirt")
	observerFirst := &customer{id: "absgmail.com"}
	observerSEcond := &customer{id: "xyzgmail.com"}
	shirtItem.register(observerFirst)
	shirtItem.register(observerSecond)
	shirtItem.updateAvailability()
}

