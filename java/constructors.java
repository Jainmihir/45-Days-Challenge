class Human{
    private String name;
    private int roll_no;

    public Human(){
        this.name =  "Mihir";
        this.roll_no = 12;
    }

    public Human(String name , int roll_no){
        this.name =  name;
        this.roll_no = roll_no;
    }

    // public void setNameRollNo(String name , int roll_no){
    //     this.name =  name;
    //     this.roll_no =  roll_no;
    // }

    public String getName(){
        return name;
    }
    public int getRollNo(){
        return roll_no;
    }

}
public class constructors {
    public static void main(String args[]){
        Human obj = new Human("MJ",103);
        System.out.println(obj.getName() + " " + obj.getRollNo()); //  -> null , 0 

    }    
}
