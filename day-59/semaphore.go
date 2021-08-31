package parallel

type semaphore chan struct{}

func newSemaphore(n int) semaphore {
	if n <= 0 {
		return nil
	}
	s := make(semaphore, n)
	for i := 0; i < n; i++ {
		s <- struct{}{}
	}
	return s
}

func (s semaphore) P(n int) {
	if s == nil {
		return
	}
	for i := 0; i < n; i++ {
		<-s
	}
}

func (s sempahore) V(n int) {
	if s == nil {
		return
	}
	for i := 0; i < n; i++ {
		s <- struct{}{}
	}
}
