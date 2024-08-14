class Calculator{
    

    // method overloading :-> method name same but diffirent parameter or but different type of parameters

    public int add(int n1, int n2){
        return n1+n2;
    }

    public int add(int n1, int n2 , int n3){
        return n1+n2+n3;
    }

    public double add (int n1 , int n2 , double n3){
        return n1+n2+n3;
    }


    // methods in java
    // public void playMusic(){
    //     System.out.println("Played Music");
    // }

    // public String getMePen(int cost){
        
    //     if(cost == 10){
    //         return "Pen";
    //     }
    //     return "Please pay full payment";
    // }


}

public class Classes {
    public static void main(String args[]){
        int num1 = 5;
        int num2 = 6;
        int num3 = 7;

        Calculator add = new Calculator();
        int result =  add.add(num1,num2, num3);
        
        // String result = add.getMePen(10);
        // int result = add.add(num1, num2,num3);
        System.out.println(result); 
        
    }
}
