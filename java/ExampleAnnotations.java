// @Deprecated //which class it interherits
class A{
    void showMeThe(){
        System.out.println("Hello");
    }
}

class B extends A{
    @Override // tells the complier the the method name is wrong 
    void showMeThe(){
        System.out.println("Hello2");
    }
}

public class ExampleAnnotations {
    public static void main(String args[]){
        B obj = new B();
        obj.showMeThe();

        // A obj1 = new B();
        // obj1.show(); // Hello 2

    }
}
