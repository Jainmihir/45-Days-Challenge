import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
// import java.util.Scanner;

public class inputs {
    public static void main(String[] args) throws IOException{
        


        // println -> is belongs to the printstream class
        // out/in -> is the method of system class and object of printstream class
        // System is the class 
        
        // System.out.println("Enter a Number");
        // int num = System.in.read(); // it create IOexception ad it reads only one value
        // System.out.println(num); // it print value with ASCII VALUE
        // System.out.println(num-48); //it print actual value

        // but this is not a good method 

        // InputStreamReader in = new InputStreamReader(System.in); // it accepts an object of in 
        // BufferedReader bf = new BufferedReader(in); 
        // // BufferReader is also called resouces
        // // BufferReader it also input from file or networks/
        // // and then you can close the resources 
        // // BufferReader trying to access inputstream object
        // int num = Integer.parseInt(bf.readLine());
        // System.out.println(num);
        // bf.close();


        // Scanner sc = new Scanner(System.in);
        // int num =  sc.nextInt();
        // System.out.println(num);
        
        // you can use try with resources and auto closeable
        // BufferedReader bf=null;
        try (BufferedReader bf = new BufferedReader(new InputStreamReader(System.in))){
            // InputStreamReader in = new InputStreamReader(System.in);
            int num = Integer.parseInt(bf.readLine());
            System.out.println(num);
        }


        // finally{
        //     bf.close();
        // }








    }
}
