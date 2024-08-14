package DSA;
// import java.util.Scanner;
// import DSA.BinarySearch;
public class Demo {
    public static void main(String[] args){


        // Tree
        BinaryTreeMain tree = new BinaryTreeMain();
        tree.insert(5);
        tree.insert(22);
        tree.insert(33);
        tree.insert(3);
        tree.insert(2);
        tree.insert(1);
        tree.inorder();


        // Queue -> FIFO : First in first out
        // Queue q = new Queue();
        // q.pushFront(1);
        // q.pushFront(2);
        // q.pushFront(3);
        // q.pushFront(4);
        // q.pushFront(5);
        // q.topElement();
        // q.isEmpty();
        // int r = q.deleteAtFirst();
        // System.out.println(r);
        // q.isEmpty();
        // q.size();
        // q.pushFront(5);
        // q.isEmpty();
        // q.topElement();
        // q.show();
        
        


        // Stack -> LIFO : Last in first out
        // stacks st = new stacks();
        // st.push(1);
        // st.push(2);
        // st.push(3);
        // st.push(4);
        // st.push(5);
        // st.peek();
        // st.push(5); // Stack is Full
        // st.show();
        // System.out.println();
        // int result = st.pop();
        // System.out.println(result);
        // st.isEmpty();
        // st.isSize();
        // st.show();

        


        // linked List

        // Linkedlist list = new Linkedlist();
        // list.insertData(1);
        // list.insertData(2);
        // list.insertData(3);
        // list.InsertAtFirst(5);
        // list.InsertAtPos(2, 0);
        // list.deleteAt(3);
        // list.showData();

        // Scanner sc = new Scanner(System.in);
        // System.out.print("Enter the size of the array: ");
        // int size = sc.nextInt();
        // int nums[] = new int[size];

        // System.out.println("Enter the elements of the array: ");
        // for (int i = 0; i < size; i++) {
        //     nums[i] = sc.nextInt();
        // }

        // int low = 0;
        // int high = size - 1;
        // // QuickSort.qSort(nums, low, high);
        // MergeSort.mSort(nums, low, high);

        // System.out.print("Sorted array: ");
        // for (int n : nums) {
        //     System.out.print(n + " ");
        // }
        // int target = sc.nextInt();

        // LinearSearch ls = new LinearSearch();
        // if(ls.Search(nums, 5 , size) == true){
        //     System.out.println("Yes");
        // }else{
        //     System.out.println("No");
        // }
        // System.out.println(ss.Search(nums, 5 , size));


        // BinarySearch bs = new BinarySearch();
        // int result =  BinarySearch.bsearch(nums, target , 0 , size-1);
        // if(result == -1){
        //     System.out.println("Not found");
        // }else{
        //     System.out.println("found at index " + result);
        // }

        // BubbleSort.bSort(nums, size);
        // for(int i=0;i<size;i++){
        //     System.out.print(nums[i]);
        // }

        // SelectionSort.sSort(nums, size);
        // for(int i=0;i<size;i++){
        //     System.out.print(nums[i]);
        // }

        // InsertionSort.iSort(nums, size);
        // for(int i=0;i<size;i++){
        //     System.out.print(nums[i]);
        // }
        // sc.close();
    }
}
