// import java.util.ArrayDeque;
// import java.util.ArrayList;
import java.util.Arrays;
// import java.util.Collections;
// import java.util.Comparator;
// import java.util.Deque;
// import java.util.HashMap;
// import java.util.HashSet;
// import java.util.LinkedHashSet;
// import java.util.LinkedList;
// import java.util.List;
// import java.util.ListIterator;
// import java.util.Map;
// import java.util.NavigableSet;
// import java.util.PriorityQueue;
// import java.util.Queue;
// import java.util.Set;
// import java.util.Stack;
// import java.util.TreeSet;
// import java.util.stream.Collectors;


// class Mbi implements Comparable<Mbi>{
//     public int marks;
//     public String stu_name;

//     Mbi(){
//         this.marks = 0;
//         this.stu_name= "Wrong entry";
//     }

//     Mbi(int marks , String stu_name){
//         this.marks = marks;
//         this.stu_name = stu_name;
//     }

//     public void setDetails(int marks, String stu_name){
//         this.marks = marks;
//         this.stu_name = stu_name;
//     }

//     public String getDetails (){
//         return "Student Name :"+ stu_name + " : " + "Marks :" + marks; 
//     }

//     public int compareTo(Mbi s){
//         if(this.marks > s.marks){
//             return 1;
//         }else{
//             return -1;
//         }
//     }

//     public String toString() {
//         return "Mbi{name='" + stu_name + "', marks=" + marks + "}";
//     }




// }



// class studentMarks implements Comparable<studentMarks> {
//     private int maths;
//     private int physics;

//     public String toString(){
//         return "Maths : " + maths + "" + "Physics :" + physics; 
//     }

//     public int toGetMaths(){
//         return maths;
//     }
//     public int toGetPhysics(){
//         return physics;
//     }

//     studentMarks(int maths, int physics){
//         this.maths = maths;
//         this.physics = physics;
//     }

//     public int compareTo(studentMarks ss){
//         // if(this.maths < ss.maths){
//         //     return 1;
//         // }else if(this.maths > ss.maths){
//         //     return -1;
//         // }else{
//         //     return 0;
//         // }

//         return ss.maths - this.maths;
//     }

// }
public class Stl{
    public static void main(String args[]){
        
        

        int arr[] = {12,34,45,65,5,7,1};
        Arrays.sort(arr);
        for(int i=0;i<arr.length;i++){
            System.out.print(arr[i]);
        }
        // List<Integer> lst = Arrays.asList(2,1,34,4);
        // System.out.println(lst);
        




        //Maps  
        // Map<String, Integer> map = new HashMap<>();
        // map.put("Mihir", 1);
        // // map.remove("Mihir");
        // // System.out.print(map.getOrDefault("Mihir" , 1)); 
        // for(String key : map.keySet()){
        //     System.out.println(key + " " + map.get(key));
        // }



        
        // Set
        // Set<Integer> st = new HashSet<>(); // unique and not in ordering HashSet allows null values.
        // Set<Integer> st= new LinkedHashSet<>(); // ordering
        // Set<Integer> st =  new TreeSet<>(); // it works with comparator also  	
        // TreeSet does not allow null values.
        // NavigableSet<Integer> st =  new TreeSet<>(); // it includes floor , celing functions
        // st.add(2); 
        // st.add(0);
        // st.add(3);

        // for(int s : st){
        //     System.out.print(s);
        // }


        // Priority Queue
        // List<studentMarks> l = new ArrayList<>();
        // l.add(new studentMarks(89,1));
        // l.add(new studentMarks(92,2));
        // l.add(new studentMarks(83,3));
        // l.add(new studentMarks(82,4));
        // l.add(new studentMarks(69,5));
        // PriorityQueue<studentMarks> marks =  new PriorityQueue<>(l);
        // List<studentMarks> top3 =  new ArrayList<>();
        // int index = 0;
        // while(!marks.isEmpty()){
        //     if(index == 3){
        //         break;
        //     }
        //     top3.add(marks.poll());
        //     index ++;
        // }
        // System.out.println(top3);




        // PriorityQueue<Integer> pq =  new PriorityQueue<>();
        // pq.offer(1);
        // pq.offer(2);
        // pq.offer(0);
        // pq.offer(1);

        // while(!pq.isEmpty()){
        //     System.out.print(pq.peek());
        //     pq.poll();
        // }

        




        // Double Ended queue we will use Array Deque
        // Deque<Integer> dq = new ArrayDeque<>();
        // dq.offerFirst(1);
        // dq.offerLast(2);
        // dq.offerFirst(3);
        // System.out.print(dq);
        // dq.removeFirst();
        // System.out.print(dq);



        // Queue
        // Queue<Integer> q = new LinkedList<>();
        // q.offer(1);
        // q.offer(2);
        // q.offer(3);
        // while(!q.isEmpty()){
        //     System.out.print(q.peek());
        //     q.poll();
        // }
        // System.out.print(q.peek());

        // Stack  -> always use stacks
        // Stack<Integer> st = new Stack<>();
        // st.push(1);
        // st.push(2);
        // while(!st.empty()){
        //     System.out.println(st.peek());
        //     st.pop();
        // }

        //Linked List
        // List<Integer> ll = new LinkedList<>();
        // ll.add(1);
        // ll.add(2);
        // ll.add(3);

        // ListIterator<Integer> Iterator = ll.listIterator();
        // // System.out.println(Iterator.next());
        // // System.out.println(Iterator.next());
        // // System.out.println(Iterator.previous());

        // while(Iterator.hasNext()){
        //     System.out.println(Iterator.next());
        // }
        // while(Iterator.hasPrevious()){
        //     System.out.println(Iterator.previous());
        // }
        
        // for(int l : ll){
        //     System.out.println(l);
        // }

        // Array List

        // List<Integer> al = new ArrayList<>();
        // al.add(5);
        // al.add(6);
        // al.add(7);
        // ListIterator<Integer> Iterator = al.listIterator();
        // while(Iterator.hasNext()){
        //     System.out.println(Iterator.previous());
        // }




        // Comparator<Mbi> comp = new Comparator<Mbi>() {
        //         public int compare(Mbi i , Mbi j){
        //             if(i.marks > j.marks){
        //                 return 1;
        //             }else{
        //                 return -1;
        //             }
        //         }
        // };

        // List<Mbi> Students = new ArrayList<>();
        // Students.add(new Mbi(25,"Mihir"));
        // Students.add(new Mbi(29,"MJ"));
        // Students.add(new Mbi(30,"Lokit"));
        // Students.add(new Mbi(27,"Jain"));
        
        // // Students.sort(comp);
        // // Collections.sort(Students);
        // for(Mbi s : Students){
        //     System.out.println(s.getDetails());
        // }

        // // int result = Students.stream().map(s -> s.marks+0).reduce(0, (c,e) -> c+e);
        // // System.out.println(result);
        
        // List<Mbi> Stu = Students.stream().filter(s -> s.marks%2==0).toList();
        // for(Mbi s : Stu){
        //     System.out.println(s.getDetails());
        // }
        

        
        

        
        
        
        // List<Integer> list = new ArrayList<>();
        // list.add(5);
        // list.add(6);
        // list.add(7);
        // list.add(8);

       
        // list.addFirst(1);
        // list.remove(0);
        // list.set(0,6);
        // for(int n : list){
        //     System.out.println(n);
        // }

        // // copy 
        // // List<Integer> list1 = new ArrayList<>(list);
        // // for(int n:list1){
        // //     System.out.println(n);
        // // }
        // int result = list.stream().filter(ele -> ele%2==0).map(ele -> ele*2).reduce(0, (c,e) -> c+e);
        // System.out.println(result);
        
    }
}