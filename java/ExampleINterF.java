interface Computer{
    void code();
}

class Laptop implements Computer{
    public void code(){
        System.out.println("this is laptop");
    }
}

class Desktop implements Computer{
    public void code(){
        System.out.println("This is desktop");
    }
} 
class Developer{
    public void devApp(Computer device ){
        device.code();
    }
}
public class ExampleINterF {
    public static void main(String[] args) {
        Computer Lap = new Laptop();
        Computer Desk = new Desktop();

        Developer mihir = new Developer();
        mihir.devApp(Desk);

        Developer lokit = new Developer();
        lokit.devApp(Lap);
    }
}
