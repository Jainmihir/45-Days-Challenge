package DSA;

public class SelectionSort {
    public static void sSort(int nums[] , int size){
        int minIndex = 0;
        for(int i=0;i<size;i++){
            minIndex = i;
            for(int j=i+1;j<size;j++){
                if(nums[minIndex] > nums[j]){
                    minIndex= j;
                }
            }
            int temp = nums[minIndex];
            nums[minIndex] = nums[i];
            nums[i] = temp;
        }
    }
}
