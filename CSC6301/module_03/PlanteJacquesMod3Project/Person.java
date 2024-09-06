package CSC6301.module_03.PlanteJacquesMod3Project;

/**
 * The superclass Person has name and address.
 * source https://www3.ntu.edu.sg/home/ehchua/Programming/java/J3b_OOPInheritancePolymorphism.html
 */
public class Person {
    // private String name and address
    private String name, address;
    
    /** Constructs a Person instance with the given name and address */
    public Person(String name, String address) {
       this.name = name;
       this.address = address;
    }
    
    // Getters and Setters
    /** Returns the name */
    public String getName() {
       return name;
    }
    /** Returns the address */
    public String getAddress() {
       return address;
    }
    /** Sets the address */
    public void setAddress(String address) {
       this.address = address;
    }
    
    /** Returns a self-descriptive string */
    @Override
    public String toString() {
       return name + "(" + address + ")";
    }
 }
