interface A{

    int number = 123; // by default variables are static and final

    // by default in the interface method are public abstract
    // public abstract void show();
    void show();

}


interface B{
    void config();
}

interface C extends B,A{

}

// by default if we forget all the method interfaces A then that class B also a abstact class
// interface and abstract class will say we are decalaring only methods we cannot create the defination
// you can declare the defination
class D implements C{
    public void show(){
        System.out.println("interface A");
    }
    public void config(){
        System.out.println("interface B");
    }
}

// class D implements A,B{
//     public void show(){
//         System.out.println("interface A");
//     }
//     public void config(){
//         System.out.println("interface B");
//     }
// }

//  class ->  class -> extends
// interface -> interface -> extends
// interface -> class -> implements

public class ExampleInter {
    public static void main(String args[]){
        // A obj;
        // obj = new A(); // we cannot create instance of interfaces
        A obj = new D();
        obj.show();
        D obj1 = new D();
        obj1.config();
        obj1.show();
        C obj2 = new D();
        obj2.config();
        // obj2.show();
        // System.out.println(A.number); // because of static we can access

    }
}
