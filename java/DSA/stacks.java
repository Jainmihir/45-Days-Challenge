package DSA;

// import java.util.ArrayList;
// import java.util.List;

public class stacks {
    // List<Integer> list =  new ArrayList<>();
    int stack[] = new int[5];
    int top=0;
    int size = 0;
    public void push(int data){
        if(top == 5){
            System.out.print("Stack is Full");
        }else{
            stack[top] = data;
            top++;
            size++;
        }
    }

    public int pop(){
        int data;
        top--;
        data = stack[top];
        stack[top] = 0;
        return data;
    }

    public void peek(){
        System.out.println(stack[top-1]);
    }

    public void isEmpty(){
        if(top == 5){
            System.out.println("Stack is not empty");
        }else{
            System.out.println("Stack is Empty");
        }
    }

    public void isSize(){
        System.out.println(top);
    }

    public void show(){
        for(int i=0;i<5;i++){
            System.out.print(stack[i]);
        }
    }



}
