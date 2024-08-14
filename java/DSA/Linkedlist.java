// package DSA;
// public class Linkedlist {
//     Node head;
    
//     public void insertData(int data){
//         Node node = new Node();
//         node.data = data;
//         node.next = null;
//         if(head == null){
//             head = node;
//         }else{
//             Node n = head;
//             while(n.next!=null){
//                 n = n.next;
//             }
//             n.next = node;
//         }
//     }   

    
//     public void InsertAtFirst(int data){
//         Node node = new Node();
//         node.data = data;
//         node.next =  null;
//         if(head == null){
//             head = node;
//         }else{
//             node.next = head;
//             head = node;
//         }
//     }

//     public void InsertAtPos(int index , int data){
//         Node node = new Node();
//         node.data = data;
//         node.next =  null;
//         if(index == 0){
//             InsertAtFirst(data);
//         }

//         if(head == null){
//             head = node;
//         } else if(index == 0){
//             InsertAtFirst(data);
//         } else {
//             Node n = head;
//             for(int i=0;i<index-1;i++){
//                 n =  n.next;
//             }
//             node.next = n.next;
//             n.next = node;
//         }
//     }

//     public void deleteAt(int index){
//         if(index == 0){
//             head =  head.next;
//         }else{
//             Node n =  head;
//             Node n1 = null;
//             for(int i=0;i<index-1;i++){
//                 n = n.next;
//             }
//             n1 = n.next;
//             n.next = n1.next;
//             n1 = null;
//         }
//     }

//     public void showData(){
//         Node temp =  head;
//         while(temp.next != null){
//             System.out.println(temp.data);
//             temp = temp.next;
//         }
//         System.out.println(temp.data);
//     }



// }
