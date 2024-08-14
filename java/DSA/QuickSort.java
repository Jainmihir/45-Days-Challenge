package DSA;

public class QuickSort {
    public static int partion(int nums[], int low, int high) {
        
        int i = low;
        int j = high;
        int pivot = nums[low];

        while (i < j) {
            // Move i to the right as long as nums[i] is less than or equal to pivot
            while (i <= high && nums[i] <= pivot) {
                i++;
            }
            // Move j to the left as long as nums[j] is greater than pivot
            while (j >= low && nums[j] > pivot) {
                j--;
            }
            // Swap nums[i] and nums[j] if i is still less than j
            if (i < j) {
                int temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
        // Swap the pivot element with nums[j]
        int temp = nums[low];
        nums[low] = nums[j];
        nums[j] = temp;

        return j;
    }

    public static void qSort(int nums[], int low, int high) {
     
        if (low < high) {
            int partitionIndex = partion(nums, low, high);
            qSort(nums, low, partitionIndex - 1);
            qSort(nums, partitionIndex + 1, high);
        }

    }

}
