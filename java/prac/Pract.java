package prac;

import java.util.*;
public class Pract{

 static class HashMap<K, V> {

        public class Node {
            K key;
            V value;

            public Node(K key, V value) {
                this.key = key;
                this.value = value;
            }
        }

        private int Sizeofbucket;
        private int Sizeofnodes;
        private LinkedList<Node> buckets[];

        @SuppressWarnings("unchecked")
        public HashMap() {
            this.Sizeofbucket = 4;
            this.buckets = new LinkedList[4];
            for (int i = 0; i < 4; i++) {
                buckets[i] = new LinkedList<>();
            }
        }

        public int hashFunction(K key) {
            int bi = key.hashCode();
            return Math.abs(bi) % Sizeofbucket;
        }

        public int searchIndex(K key, int bi) {
            LinkedList<Node> ll = buckets[bi];
            for (int i = 0; i < ll.size(); i++) {
                if (ll.get(i).key == key) {
                    return i;
                }
            }
            return -1;
        }

        @SuppressWarnings("unchecked")
        public void rehash() {
            LinkedList<Node> oldbucket[] = buckets;
            buckets = new LinkedList[Sizeofbucket * 2];

            for (int i = 0; i < Sizeofbucket * 2; i++) {
                buckets[i] = new LinkedList<>();
            }

            for (int i = 0; i < oldbucket.length; i++) {
                LinkedList<Node> ll = oldbucket[i]; // Corrected line
                for (int j = 0; j < ll.size(); j++) {
                    Node node = ll.get(j);
                    put(node.key, node.value);
                }
            }
        }

        public void put(K key, V value) {
            int bi = hashFunction(key);
            int di = searchIndex(key, bi);

            if (di == -1) {
                buckets[bi].add(new Node(key, value));
                Sizeofnodes++;
            } else {
                Node node = buckets[bi].get(di);
                node.value = value;
            }

            double lambda = (double) Sizeofnodes / Sizeofbucket;
            if (lambda > 2.0) {
                rehash();
            }
        }

        public ArrayList<K> keySet() {
            ArrayList<K> keys = new ArrayList<>();
            for (int i = 0; i < buckets.length; i++) {
                LinkedList<Node> ll = buckets[i];
                for (int j = 0; j < ll.size(); j++) {
                    Node node = ll.get(j);
                    keys.add(node.key);
                }
            }

            return keys;
        }
        public V remove(K key) {
          int bi = hashFunction(key);
          int di = searchIndex(key, bi); // di = -1
          if (di == -1) { // key doesn't exist
              return null;
          } else { // key exists
              Node node = buckets[bi].remove(di);
              Sizeofnodes--;
              return node.value;
          }
      }
      
        public V get(K key) {
            int bi = hashFunction(key);
            int di = searchIndex(key, bi);

            if (di == -1) {
                return null;
            } else {
                Node node = buckets[bi].get(di);
                return node.value;
            }

        }
    }

    public static void main(String args[]){
      HashMap<String,Integer> obj = new HashMap<>();
      obj.put("MIHIr",1);
      obj.put("java",3);
      obj.put("sl",2);
      obj.remove("sl");
      // System.out.println(result);
      ArrayList<String> keys = obj.keySet();
      for(int i=0;i<keys.size();i++){
        System.out.println(keys.get(i) + " " + obj.get(keys.get(i)));
      }
    }

}
