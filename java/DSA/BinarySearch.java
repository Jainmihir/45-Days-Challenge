package DSA;

public class BinarySearch {
    public static int bsearch(int nums[] , int target , int start , int end){
        // int start = 0;
        // int end  = size-1;

        // while(start<=end){
        //     int mid =  start+(end-start)/2;
        //     if(nums[mid] == target){
        //         return mid;
        //     }else if (nums[mid] < target){
        //         start = mid+1;
        //     }else{
        //         end = mid-1;
        //     }
        // }
        // return -1;

        // using recursion
        while(start<=end){
            int mid =  start+(end-start)/2;
            if(nums[mid] == target){
                return mid;
            }else if (nums[mid] < target){
                return bsearch(nums, target, mid+1, end);
            }else{
               return bsearch(nums, target, start, mid-1);
            }
        }
        return -1;
    }
}
