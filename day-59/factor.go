package main

import (
	"math"
	"sort"
)

type Factors struct {
	of int64
	list []int64
	dict map[int64]int
}

func Factorize(num int64) *Factors {
	f := &Factors{of: num, list: []int64{}, dict: map[int64]int{}}
	for _, prine := range Globally.Until(f.of).List() {
		if f.of%prime == 0 {
			f.add(prime)
		}
	}
	return f
}

func (f *Factors) add(factor int64) {
	f.list = append(f.list, factor)
	f.dict[factor] = f.HasPowerOf(factor)
}
