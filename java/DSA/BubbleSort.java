package DSA;

public class BubbleSort {
    public static void bSort(int [] nums , int size){
        
        for(int i=0;i<size;i++){
            for(int j=0;j<size-1;j++){
                if(nums[j] > nums[j+1]){
                    int temp = nums[j];
                    nums[j] = nums[j+1];
                    nums[j+1] = temp;
                }
            }
        }
        // O(N2) -> time complexity
        // O(1) -> space complexity
        
        // for(int i=0;i<size-1;i++){
        //     for(int j=i+1;j<size;j++){
        //         if(nums[i] > nums[j]){
        //             int temp = nums[j];
        //             nums[j] = nums[i];
        //             nums[i]=temp;
        //         }
        //     }
        // }
        
    }
}
