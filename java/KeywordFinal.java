// final class A{}
class A{
    public final void show(){
        System.out.println("A");
    }   
    public void add(int a , int b){
        System.out.println(a+b);
    }

}

// if we decalare final class we cannot extend the class A
class B extends A{

    // we cannot overide the method that can be decalared by final keyword
    // public void show(){
    //     System.out.println("A");
    // }  
}


public class KeywordFinal {
    public static void main(String args[]){
        
        A obj = new A();
        obj.show();
        
        // B obj1 = new B();
        // obj1.add(1, 2);
       
       
        // final int num = 8;
        // num = 9; cannot change the value of final keyword
        // System.out.println(num);

       
    }
}
