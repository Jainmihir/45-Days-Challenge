import java.util.ArrayList;
import java.util.LinkedList;

public class HashMapCode{
    static class HashMap<K,V> {
        public class Node{
            K key;
            V value;
            public Node(K key , V value){
                this.key = key;
                this.value = value;
            }
        }

        private int sizeOfNode;
        private int sizeOfBucket;
        private LinkedList<Node> buckets[];

        @SuppressWarnings("unchecked")
        public HashMap(){
            this.sizeOfBucket=4;
            this.buckets =  new LinkedList[4];
            for(int i=0;i<4;i++){
                buckets[i] = new LinkedList<>();
            }
        }

        public int hashfunction(K key){
            int bi = key.hashCode();
            return Math.abs(bi)%sizeOfBucket;
        }

        public int searchForIndex(K key , int bi){
            LinkedList<Node> ll = buckets[bi];
            for(int i=0;i<ll.size();i++){
                if(ll.get(i).key == key){
                    return i;
                }
            }
            return -1;
        }

        @SuppressWarnings("unchecked")
        public void rehash(){
            LinkedList<Node> oldbucket[] = buckets;
            buckets =  new LinkedList[sizeOfBucket*2];
            for(int i=0;i<sizeOfBucket*2;i++){
                buckets[i] = new LinkedList<>();
            }

            for(int i=0;i<oldbucket.length;i++){
                LinkedList<Node> ll =  buckets[i];
                for(int j=0;j<ll.size();i++){
                    Node node = ll.get(j);
                    put(node.key, node.value);
                }
            }
        }

        public void put(K key, V value){
            int bi = hashfunction(key);
            int di = searchForIndex(key,bi);
            if(di == -1){
                buckets[bi].add(new Node(key, value));
                sizeOfNode++;
            }else{
                Node node = buckets[bi].get(di);
                node.value = value;
            }

            double lambda = (double)sizeOfNode/sizeOfBucket;
            if(lambda > 2.0){
                rehash();
            }

        }

        public ArrayList<K> keySet(){
            ArrayList<K> keys = new ArrayList<>();
            for(int i=0;i<buckets.length;i++){
                LinkedList<Node> ll =  buckets[i];
                for(int j=0;j<ll.size();j++){
                    Node node = ll.get(j);
                    keys.add(node.key);
                }
            }
            return keys;
        }

        public V remove(K key){
            int bi = hashfunction(key);
            int di = searchForIndex(key, bi);
            if(di == -1){
                return null;
            }else{
                Node node = buckets[bi].remove(di);
                sizeOfNode--;
                return node.value;
            }
        }

        public V get(K key){
            int bi = hashfunction(key);
            int di = searchForIndex(key, bi);
            if(di == -1){
                return null;
            }else{
                Node node = buckets[bi].get(di);
                return node.value;
            }
        }

        public boolean isEmpty(){
            return sizeOfNode==0;
        }

        public boolean isContains(K key){
            int bi  = hashfunction(key);
            int di =  searchForIndex(key, bi);
            if(di == -1){
                return false;
            }else{
                return true;
            }
        }

    }
    
    public static void main(String[] args) {
        HashMap<String,Integer> map = new HashMap<>();
        map.put("A", 1);
        map.put("B", 1);
        map.put("C", 1);
        ArrayList<String> keys = map.keySet();
        map.remove("A");
        for(int i=0;i<keys.size();i++){
            System.out.println(keys.get(i) + " " + map.get(keys.get(i)));
        }
        System.out.println(map.isEmpty());
        System.out.println(map.isContains("Mihi"));
    }
}