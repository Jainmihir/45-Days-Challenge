class A{
    A(){
        super();
        System.out.println("A");
    }
    A(int n ){
        super();
        System.out.println("A int");
    }
}
class B extends A{
    B(){
        // super(5);
        System.out.println("B");
    }

    B(int n){
        this();
        System.out.println("B int");
    }
}

public class ExampleKey {
    public static void main(String args[]){
        // B obj = new B();
        
    }    
}
