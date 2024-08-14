class A{
    public void show(){
        System.out.println("Hello A");
    }
}
class B extends A{  
    public void show(){
        System.out.println("Hello B");
    }
}

public class MethodOver {
    public static void main(String[] args) {
        B obj = new B();
        obj.show();
    }
}
