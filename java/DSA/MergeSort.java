package DSA;

import java.util.ArrayList;
public class MergeSort {

    private static void merge(int[] nums, int low, int mid, int high) {
        ArrayList<Integer> list = new ArrayList<>();
        int left = low;
        int right = mid+1;
        while(left <= mid && right <= high){
            if(nums[left] <= nums[right]){
                list.add(nums[left]);
                left++;
            }else{
                list.add(nums[right]);
                right++;
            }
        }
        while(left<=mid){
            list.add(nums[left]);
            left++;
        }
        while(right <= high){
            list.add(nums[right]);
            right++;
        }

    
        for (int i = low; i <= high; i++) {
            nums[i] = list.get(i - low);
        }


    }
    
    public static void mSort(int nums[] , int low  , int high){
        if(low < high){
            int mid =  (low+high)/2;
            mSort(nums, low, mid);
            mSort(nums, mid+1, high);
            merge(nums,low,mid,high);
        }
    }

  
}
