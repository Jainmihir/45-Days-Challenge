package DSA;

public class InsertionSort {
    public static void iSort(int nums[] , int size){
        for(int i=1;i<size;i++){
            int key = nums[i];
            int j = i-1;
            while(nums[j] > key && j>=0){
                nums[j+1] = nums[j];
                j--;
            }
            nums[j+1] = key;
        }
    }
}
