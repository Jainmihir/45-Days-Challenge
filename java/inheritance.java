class A {
    public void show(){
        System.out.println("A");
    }
}
class B extends A{
    public void Hello(){
        System.out.println("B");
    }
}
class C extends B{
    
}

public class inheritance {
    public static void main(String args[]){
        C obj = new C();
        obj.Hello();
        obj.show();
    }   
}


