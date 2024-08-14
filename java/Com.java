import java.util.ArrayList;
// import java.util.Collections;
// import java.util.Comparator;
import java.util.List;

// class itself ko permission de re h ki ap hee sort krlo
class StudentDetail implements Comparable<StudentDetail>{
    int age;
    String name;

    
    StudentDetail(int age , String name){
        this.age = age;
        this.name = name;
    }

    public String getData(){
        return age + " " +name;
    }

    public int compareTo(StudentDetail ss){
        if(this.age > ss.age){
            return 1;
        }else{
            return -1;
        }
    }
}

public class Com {
    public static void main(String args[]){

        List<StudentDetail> studs =  new ArrayList<>();
        
        // Comparator<StudentDetail> com  = (i,j) -> {return i.age > j.age ?1:-1;};    


        // Comparator<StudentDetail> com  = new Comparator<StudentDetail>() {
            
        //     public int compare(StudentDetail i , StudentDetail j){
        //         if(i.age > j.age){
        //             return 1;
        //         }
        //         else{
        //             return -1;
        //         }
               
        //     }
        // };



        studs.add(new StudentDetail(19, "Mihir"));
        studs.add(new StudentDetail(20, "Jain"));
        studs.add(new StudentDetail(18, "Lokit"));
        
        
        // Collections.sort(studs);
        // studs.sort(com);
        for(StudentDetail s : studs){
            System.out.println(s.getData());
        }



        // // Comparator
        // Comparator<Integer> com  = new Comparator<Integer>() {
            
        //     public int compare(Integer i , Integer j){
        //         if(i%10 > j%10){
        //             return 1;
        //         }
        //         else{
        //             return -1;
        //         }
               
        //     }
        // };

        // List<Integer> nums =  new ArrayList<>();
        // nums.add(43);
        // nums.add(47);
        // nums.add(34);
        // nums.add(33);
        // //comparator is a interface or cocept which you can create our logics for sorting 
        // // if you sort the based on your logic so that is called comparator
        // // Collections.sort(nums,com);
        // nums.sort(com);
        // System.out.println(nums);
    
    }
}
