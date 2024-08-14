class Student{
    int roll_no;
    String name;
    int marks;
}

public class array {
    public static void main(String args[]){
        
        // 1d array
        // int arr[] = {1,2,3};
        // int arr1[] = new int[3];


        // // for(int i=0;i<arr.length;i++){
        // //     System.out.println(arr[i]);
        // // }

        
        // for(int i=0;i<arr1.length;i++){
        
        //     arr1[i] = arr[i];
        // }

        // for(int i=0;i<arr1.length;i++){
        //     System.out.println(arr1[i]);
        // }

        // // 2d array
        // int nums[][] = new int[2][2];

        // for(int i=0;i<2;i++){
        //     for(int j=0;j<2;j++){
        //         nums[i][j] = (int)(Math.random()*100);
        //     }
        // }
        // for(int i=0;i<2;i++){
        //     for(int j=0;j<2;j++){
        //         System.out.print(nums[i][j] + " ");
        //     }
        //     System.out.println();
        // }

        // // for each traversal

        // for(int n[] : nums){
        //     for(int m: n ){
        //         System.out.print(m + " ");
        //     }
        //     System.out.println();
        // }


        // jagged array 

        // int nums[][] = new int[3][];
        // nums[0] = new int[3];
        // nums[1] = new int[4];
        // nums[2] = new int[2];

        // for(int i=0;i<nums.length;i++){
        //     for(int j=0;j<nums[i].length;i++){
        //         nums[i][j] = (int)(Math.random()*10);
        //     }
        // }

        // for(int n[] : nums){
        //     for(int m : n){
        //         System.out.println(m + " ");
        //     }
        //     System.out.println();
        // }


        // array of objects 


        Student s1 = new Student();
        s1.roll_no = 1;
        s1.name = "Mihir";
        s1.marks = 100;

        Student s2 = new Student();
        s2.roll_no = 2;
        s2.name = "Chiku";
        s2.marks = 105;

        Student student[] = new Student[2];
        student[0] = s1;
        student[1] = s2;

        for(int i=0;i<student.length;i++){
            System.out.println(student[i].name + " : " + student[i].marks);
        }

        for(Student stud : student){
            System.out.println(stud.roll_no + stud.name + stud.marks);
        }


        // For Each loop with array

        int nums[]  = new int[2];
        nums[0] = 4;
        nums[1] = 3;

        
        for(int n : nums){
            System.out.println(n);
        }
        


    }
}
