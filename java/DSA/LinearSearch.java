package DSA;

public class LinearSearch {
    public boolean Search(int nums[] , int key , int size){
       
        boolean flag = false;
        for(int i=0;i<size;i++){
            if(key == nums[i]){
                flag = true;
                break;
            }
        }
        if(flag){
            return true;
        }else{
            return false;
        }
        
    }
}
