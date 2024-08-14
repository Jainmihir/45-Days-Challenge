package Collec;

import java.util.Scanner;

public class Example {
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int n =  sc.nextInt();
        int nums [] = new int[n];
        // int hashMap[] =  new int[n];

        for(int i=0;i<n;i++){
            nums[i] = sc.nextInt();
        }
        int xor=0;
        for(int i=0;i<n;i++){
            xor = xor^nums[i];
            // hashMap[nums[i]-1]++;
        }
        System.out.println(xor);
        // System.out.println();

        // for(int i=0;i<n;i++){
        //     // System.out.print(hashMap[i]);
        //     if(hashMap[i] == 1){
        //         System.out.print(i);
        //         System.out.print(hashMap[i]);
        //         System.out.println(i+1);
        //     }
        // }

        // for(int val : nums){
        //     System.out.print(val);
        // }


        sc.close();
    }
}
