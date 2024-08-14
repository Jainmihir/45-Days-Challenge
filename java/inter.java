// import java.util.ArrayList;
// import java.util.Collection;
// import java.util.Collections;
// import java.util.Comparator;
// import java.util.List;

// class AbcStu implements Comparable<AbcStu>{
//     private int marks;
//     private String name;

//     AbcStu(){
//         this.name =  "MJ";
//         this.marks = 0;
//     }

//     AbcStu(int marks , String name ){
//         this.marks = marks;
//         this.name = name;
//     }

//     public int getMarks(){
//         return this.marks;
//     }

//     public String name(){
//         return this.name;
//     }

//     public int compareTo(AbcStu ss){
//         if(this.marks > ss.marks){
//             return 1;
//         }else{
//             return -1;
//         }
//     }

// }


// class Abe implements Runnable{

//     public void run(){
//         for(int i=0;i<100;i++){
//             System.out.println("Hello");
//             try {
//                 Thread.sleep(10);
//             } catch (InterruptedException e) {
//                 e.printStackTrace();
//             }
//         }
//     }

// }

// class bce implements Runnable{
//     public void run(){
//         for(int i=0;i<100;i++){
//             System.out.println("hi");
//             try {
//                 Thread.sleep(10);
//             } catch (InterruptedException e) {
//                 e.printStackTrace();
//             }
//         }
//     }
// }

// class BBA {
//     int count = 0;
//     public synchronized void increament(){
//         count++;
//     }
// }

import java.util.*;

// public class Hash{
    

// }





public class inter {

    static class HashMapCode< K , V> {
        private class Node{
            K key;
            V value;
            public Node(K key, V value){
                this.key = key;
                this.value = value;
            }
        }

        private int lengthofBucket;
        private int lengthofNodes;
        private LinkedList<Node> buckets[];

        @SuppressWarnings("unchecked")
        public HashMapCode(){
            this.lengthofBucket = 4;
            this.buckets = new LinkedList[4];
            for(int i=0;i<4;i++){
                this.buckets[i] =  new LinkedList<> ();
            }
        }

        private int hashfunction(K key){
            int bi = key.hashCode();
            return Math.abs(bi)%lengthofBucket;
        }

        private int searchIndex(K key , int bi){
            LinkedList<Node> ll = buckets[bi];
            for(int i=0;i<ll.size();i++){
                if(ll.get(i).key == key){
                    return i;
                }
            }
            return -1;
        }

        @SuppressWarnings("unchecked")
        private void rehash(){
            LinkedList<Node> OldBucket[] = buckets;
            buckets = new LinkedList[lengthofBucket*2];
            for(int i=0;i<lengthofBucket*2;i++){
                buckets[i] = new LinkedList<> ();
            }
            for(int i=0;i<OldBucket.length;i++){
                LinkedList<Node> ll = OldBucket[i];
                for(int j=0;j<ll.size();j++){
                    Node node = ll.get(j);
                    put(node.key,node.value);
                }
            }

        }

        public void put(K key , V value){
            int bi = hashfunction(key);
            int di = searchIndex(key,bi);

            if(di == -1){
                buckets[bi].add(new Node(key,value));
                lengthofNodes++;
            }else{
                Node node = buckets[bi].get(di);
                node.value = value;
            }

            // lambdA expression
            double lambda = (double)lengthofNodes/lengthofBucket;
            if(lambda > 2.0){
                rehash();
            }
        }

        public ArrayList<K> keySet() {
            ArrayList<K> keys = new ArrayList<>();
            for (int i = 0; i < buckets.length; i++) { // bi
                LinkedList<Node> ll = buckets[i];
                for (int j = 0; j < ll.size(); j++) { // di
                    Node node = ll.get(j);
                    keys.add(node.key);
                }
            }
            return keys;
        }
        public V get(K key){
            int bi = hashfunction(key);
            int di = searchIndex(key,bi);
            if(di == -1){
                return null;
            }else{
                Node n = buckets[bi].get(di);
                return n.value;
            }
        }
        public V remove(K key){
            int bi = hashfunction(key);
            int di = searchIndex(key,bi);
            if(di == -1){
                return null;
            }else{
                Node n = buckets[bi].remove(di);
                lengthofNodes--;
                return n.value;
            }
        }

        public boolean size(){
         return lengthofNodes==0;
        }
        public boolean containsKey(K key) {
            int bi = hashfunction(key);
            int di = searchIndex(key, bi); // di = -1
            if (di == -1) { // key doesn't exist
                return false;
            } else { // key exists
                return true;
            }
        }
    }
    public static void main(String[] args) {
       
       
        HashMapCode<String,Integer> mp =  new HashMapCode<>();
        mp.put("Mihir", 1);
        ArrayList<String> keys = mp.keySet();
        mp.remove("Mihir");
        System.out.println(mp.containsKey("Mihir"));
        for(int i=0;i<keys.size();i++){
            System.out.println(keys.get(i) + " " + mp.get(keys.get(i)));
        }
        

        // System.out.println("Hello");
       
        
        
        // Abe obj = new Abe();
        // bce obj1 = new bce();
        // obj.start();
        // obj1.start();
        
        // Runnable obj1 = new Abe();
        // Runnable obj2 = new bce();
        // Thread T1 = new Thread(obj1);
        // Thread T2 = new Thread(obj2);
        // T1.start();
        // T2.start();

        // BBA obj = new BBA();
        // Runnable obj1 = new Runnable() {
        //     public void run(){
        //         for(int i=0;i<10000;i++){
        //             obj.increament();
        //         }
        //     }
        // };
        // Runnable obj2 = new Runnable() {
        //     public void run(){
        //         for(int i=0;i<10000;i++){
        //             obj.increament();
        //         }
        //     }
        // };
        // Thread T1 = new Thread(obj1);
        // Thread T2 = new Thread(obj2);
        // T1.start();
        // T2.start();
        // T1.join();
        // T2.join();
        

        // System.out.println(obj.count);


        


        // AbcStu obj = new AbcStu();

        // Comparator<AbcStu> comp = new Comparator<AbcStu>(){
        //     public int compare(AbcStu i , AbcStu j){
        //         if(i.getMarks() < j.getMarks()){
        //             return 1;
        //         }else{
        //             return -1;
        //         }
        //     }
        // };

        // List<AbcStu> ls = new ArrayList<>();
        // ls.add(new AbcStu(98,"Mihir"));
        // ls.add(new AbcStu(89,"mih"));
        // ls.add(new AbcStu(80,"mj"));
        // ls.add(new AbcStu(99,"ml"));
        // // ls.sort(comp);
        // Collections.sort(ls);
        // for(AbcStu pr : ls){
        //     System.out.println(pr.getMarks() + " " + pr.name());
        // }

       

        // System.out.println(obj.getMarks());
    }
}
