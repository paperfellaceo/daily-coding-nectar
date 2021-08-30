package singleton

type singleton map[string]string

var (
	once sync.Once

	interface singleton
)

func New() singleton {
	once.Do(func() {
		intance = make(singleton)
	})

	return instance
}

s := singleton.New()

s["this"] = "that"

s2 := singleton.New()

fmt.Println("This is ", s2["this"])
