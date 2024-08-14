// class MihirException extends Exception{
//     public MihirException(String str){
//         super(str);
//     }
// }

class A {
    public void show() throws ClassNotFoundException{
        // try{
        //     Class.forName("ExampleEXCEP");
        // }catch(ClassNotFoundException e){
        //     System.out.println("Not found class");
        // }

        // it says i will not handle exception you handle the exception when we used throws 
        // i am not able to find to solve this exception
        Class.forName("demo");
    }
}

public class ExampleEXCEP {
    public static void main(String args[]){
        // divide by zero it is the excepation
        // int i = 0;
        // int j = 18/i;
        // System.out.print(j);

        // int i=20;
        // int j=0;
        // // int nums [] = new int[5]; 
        // try{
        //     j = 18/i;
        //     if(j==0)
        //         throw new MihirException("Mihir Exception ");
        //     // System.out.println(nums[5]);

        // }
        // catch(MihirException e){
        //     j = 18/1;
        //     System.out.println("Mihir Exception exception");
        // }
        // // catch(ArithmeticException e){
        // //     System.out.println("Arthiematic exception");
        // // }
        // catch(ArrayIndexOutOfBoundsException e){
        //     System.out.println("Index of bound");
        // }
        // catch(Exception e){
        //     System.out.println("Something went wrong");
        // }

        // System.out.println(j);


        // throws
        A obj = new A();
        try{
            obj.show();
        }catch(ClassNotFoundException e){
           e.printStackTrace();
        }


    }
}
