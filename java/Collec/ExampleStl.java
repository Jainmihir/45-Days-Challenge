package Collec;

import java.util.Hashtable;

import java.util.Map;
import java.util.Scanner;


public class ExampleStl {
    public static void main(String[] args) {


        Scanner sc = new Scanner(System.in);
        // int n = sc.nextInt();


        // Map is the collection of key and value pair
        // Map<String, Integer> students = new HashMap<String, Integer>(); // Hashmap not used thread safe
        Map<String, Integer> students = new Hashtable<String, Integer>(); // Hashtable works on syncronized thread safe

        // for(int i=0;i<n;i++){
        //     System.out.print("Enter the number students details : ");
        //     students.put(sc.next(), sc.nextInt());
        // }

        students.put("Mihir", 12);
        students.put("Jain" , 13);
        students.put("lokit" , 23);

        // System.out.println(students);
        // System.out.println(students.get("Mihir"));
        // System.out.println(students.keySet()); // it print all the keys
        //  System.out.println(students.values()); // it print all the values

        for(String key :  students.keySet()){
            System.out.println(key + " " + students.get(key));
        }
        

        





        // Set stores all the unique values but in set we are not have sorted order of elements
        // set have not index values also but in collection he have iterator
        // it also say collection framework
        // when we used in sorted order then we tree set
        

        // Set<Integer> uniqueList = new HashSet<Integer>(); // not sorted order

        // Set<Integer> uniqueList = new TreeSet<Integer>(); // sorted order also

        // Collection<Integer> uniqueList = new TreeSet<Integer>(); //collection have iterator
        // for(int i=0;i<n;i++){
        //     uniqueList.add(sc.nextInt());
        // }

        // Iterator<Integer> values = uniqueList.iterator();
        // while(values.hasNext()){
        //     System.out.println(values.next());
        // }


        // for(int val : uniqueList){
        //     System.out.print(val);
        // }

        

        

        // LIST 
        // List<Integer> list = new ArrayList<Integer>();
        // for(int i=0;i<n;i++){
        //     list.add(sc.nextInt());
        // }
        // System.out.println(list.get(2)); // value return of an index
        // System.out.println(list.indexOf(2)); // index return of an element
        // for(int val : list){
        //     System.out.print(val);
        // }
    
        
        // // collection only work with values in can not work with index value
        // Collection<Integer> nums = new ArrayList<Integer>();
        // Scanner sc = new Scanner(System.in);
        // System.out.print("Enter the size of array list");
        // int size = sc.nextInt();
        // System.out.println();
        // for(int i=0;i<size;i++){
        //     System.out.print("enter the number of elements ");
        //     int val = sc.nextInt();
        //     nums.add(val);
        // }
        // System.out.println(nums.size());
        // // nums.remove(5); // remove the value
        // for(int val : nums){
        //     System.out.print(val);
        // }
        
        sc.close();





    }
}
