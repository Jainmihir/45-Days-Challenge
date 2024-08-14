class A{
    public void show(){
        System.out.println("in A show");
    }
}
class B extends A{
    public void show1(){
        System.out.println("in B show");
    }
}

public class casting {
    public static void main(String[] args) {
        
        // this is type casting
        // double d = 4.5;
        // int i = (int) d;
        // System.out.println(i);

        // upcasting -> it normally works in built 
        // A obj = (A) new B();
        // obj.show();

        // downcasting

        A obj = new B();
        // obj.show1(); // you can not call child class object and a has no idea
        obj.show();

        // downcasting
        B obj1 = (B) obj;
        obj1.show1();

        
    }
}
