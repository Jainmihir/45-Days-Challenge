package DSA.codeforces;
import java.util.Scanner;

public class A4watemelon{
    
    // public static boolean solve(int nums[] , int size){
    //     int freq[] = new int[size];
    //     for(int i=0;i<size;i++){
    //         freq[nums[i]-1]++;
    //     }
    //     int divide = size/2;
    //     boolean flag = false;
    //     for(int i=0;i<size;i++){
    //         if(freq[i] == divide){
    //             flag = true;
    //         }
    //     }

    //     if(flag){
    //         return true;
    //     }else{
    //         return false;
    //     }


    // }

    public static void main( String args[]){
        Scanner sc = new Scanner(System.in);


        int number = sc.nextInt();

        if(number%2 ==0){
            System.out.println("Yes");
        }else{
            System.out.println("No");
        }

        // int size = sc.nextInt();
        // int nums[] = new int[size];




        // for(int i=0;i<size;i++){
        //     nums[i] = sc.nextInt();
        // }


        // boolean flag = solve(nums,size);
        // if(flag){
        //     System.out.println("Yes");
        // }else{ 
        //     System.out.println("No"); 
        // }

        sc.close();







    }
}