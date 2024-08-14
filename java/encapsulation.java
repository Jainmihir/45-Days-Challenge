class Human{
    private int num1;
    private int num2;

    public void setSum(int num1, int num2) {
        this.num1 = num1;
        this.num2 = num2;
    }

    public int getSum() {
        return num1 + num2;
    }
}

public class encapsulation {
    public static void main(String args[]){
        Human nums = new Human();

        nums.setSum(1, 2);
        System.out.println(nums.getSum());
    }
}
