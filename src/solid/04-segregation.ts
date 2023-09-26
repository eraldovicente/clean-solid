interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): void;
}

interface RunningBird {
    run(): void;
}

interface SwimmerBird {
    swim(): void;
}

class Tucan implements Bird, FlyingBird {

    public fly() {}
    public eat() {}
    public swim() {}
}

class Hummingbird implements Bird, FlyingBird {

    public fly() {}
    public eat() {}
    public swim() {}
}

class Ostrich implements Bird, RunningBird {
    
    public eat() {}
    public run() {}

}

class Penguin implements Bird {  
    public eat() {}
    public swim() {}
}