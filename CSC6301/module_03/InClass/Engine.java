package CSC6301.module_03.InClass;

public class Engine {
    private OilTank oil_tank;

    public Engine() {
        this.oil_tank = new OilTank();
    }

    public int check_oil() {
        return this.oil_tank.check_oil_level();
    }
}
