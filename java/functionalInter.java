@FunctionalInterface
interface A{
    int show(int i , int j);
    // there is is one method it is called functional interface
    // void show1(); 
}

// java 8 version say no more lamda verbos 
// making a details code
// you need to shorten the code
// lamda expression is that reducing the code length
// it works only on functional interface


public class functionalInter {
    public static void main(String args[]){
        // A obj = new A()
        // {
        //     public void show()
        //     {
        //         System.out.println("Hello A");
        //     }
        // };
        // obj.show();

        // lamda expression
        // A obj = () -> {
        //     {
        //         System.out.println("Hello a");
        //     }
        // };
        // obj.show();

        // A obj = (i,j) -> {
        //     {
        //         return i+j;
        //     }
        // };
        // int result = obj.show(1, 2);
        // System.out.println(result);

    }    
}
