package DSA;


public class Queue {
    int front = 0;
    int nums [] =  new int[5];
    int rear = 0;
    int size=0;
    public void pushFront(int data){
        if(rear == 5) {
            System.out.print("Full");
        }else{
            nums[rear] = data;
            rear = (rear+1)%5;
            size++;
        }
    }

    public void topElement(){
        System.out.println(nums[front]);
    }

    public int deleteAtFirst(){
        int data = nums[front];
        front = (front+1)%5;  
        size--;
        return data;
    }

    public void isEmpty(){
        if(size == 5){
            System.out.println("Not empty");
        }else{
            System.out.println("Empty");
        }
    }

    public void size(){
        System.out.print(size);
    }

    public void show(){
        for(int i=0;i<size;i++){
            System.out.print(nums[i]);
        }
    }
}
