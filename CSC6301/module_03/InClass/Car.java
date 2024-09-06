package CSC6301.module_03.InClass;

public class Car {
    private Engine engine;

    public Car() {
        this.engine = new Engine();
    }

    public int check_oil() {
        return engine.check_oil();
    }
}
