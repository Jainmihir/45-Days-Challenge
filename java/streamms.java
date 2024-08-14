import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

public class streamms {
    public static void main(String args[]){
        // List<Integer> nums = new ArrayList<> ();
        List<Integer> nums = Arrays.asList(1,2,3,4,5);

        // Stream is a interface
        // once you work with stream then you can not used stream
        // filter and map returns a stream but reduce returns the result in single value
        // streams makes your work easy because you no the bigdata


        // Stream<Integer> s1 = nums.stream();
        // Stream<Integer> s2 = s1.filter(n -> n%2==0);
        // Stream<Integer> s3 = s2.map(n -> n*2);
        // int result= s3.reduce(0,(c,e) -> c+e); 
        
        // System.out.println(result);
        // s1.forEach(n-> System.out.print(n));

        // int result = nums.stream()
        //                         .filter(n-> n%2==0) // boolean value return and its belongs to predicate
        //                         .map(n-> n*2) // it belongs to functions returns the integer value
        //                         .reduce(0, (c,e) -> c+e); //reduce is return the one value
        
        // System.out.println(result);                        
        // // result.forEach(n-> System.out.println(result));   

        Stream<Integer> s5 = nums.stream() // for threads we can use parallelStream method
                            .filter(n-> n%2==0)
                            .sorted(); 

        s5.forEach(n -> System.out.print(n));

        


        
        // // normal for loop
        // for(int i=0;i<nums.size();i++){
        //     System.out.print(nums.get(i));
        // }
        // System.out.println();

        // // Enhanced for loop
        // for(int val : nums){
        //     System.out.print(val);
        // }
        // System.out.println();

        // // for each - it gives one value at a time
        // nums.forEach(n -> System.out.print(n));

        
        
        
        

        // int sum = 0;
        // for(int n :  nums){
        //     if(n%2==0){
        //         n= n*2;
        //         sum += n;
        //     }
        // }
        // System.out.println(sum);


        
    }
}
