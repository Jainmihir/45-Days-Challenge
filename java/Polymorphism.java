class A{
    public void show(){
        System.out.println("Hello a");
    }
}
class B extends A{
    public void show(){
        System.out.println("Hello B ");
    }
}   

public class Polymorphism {
    public static void main(String args[]){
        A obj = new A();
        obj.show();

        obj =  new B();
        obj.show();
    }    
}
