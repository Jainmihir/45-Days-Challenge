abstract class A{
    public abstract void show();
}

class B extends A{
    public void show(){
        System.out.println("This is A");
    }
}


public class ExampleAb {
    public static void main(String args[]){
        
        // A obj = new A(); // we can not create instance of class A because this is abstarct class
        A obj = new A() {
            public void show(){
                System.out.println("This is A");
            }
        };
        obj.show();
    }   
}
