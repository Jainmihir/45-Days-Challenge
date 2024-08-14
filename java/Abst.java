abstract class Car{
    public abstract void drive();
    public void playMusic(){
        System.out.println("Played music");
    }
}

class BMW extends Car{
    public void drive(){
        System.out.println("driving...");
    }

}

public class Abst{
    public static void main(String args[]){
        // Car obj =  new Car(); // you can not create obj of abstract class;

        Car obj =  new BMW(); // dynamic refrencing
        obj.drive();
        obj.playMusic();
    }
}