// enum Status{
//     Running,Pending,Success,Failed;
// }

// in enum we cannot extend by the class
// by default enum representes enum class
// in this we can create are own methods
// we can define in enum all the objects
// we are creating all the objects in same class that why we are decalaring private construtor
// declare only named constants

enum laptop{
    Macbook(2000),ThinkPad(3000),XPS,Surface(1000);
    private int price;
    private laptop(){
        price = 200;
    }
    private laptop(int price){
        this.price  = price;
    }

    public int getPrice(){
        return price;
    }
    public void setPrice(int price){
        this.price = price;
    }
}

public class ExampleEnu {
    public static void main(String args[])
    {
        // Status s = Status.Running;
        // System.out.println(s.ordinal());
        // Status [] ss =  Status.values();
        // for(Status s1 : ss ){
        //     System.out.println(s1 + " " + s1.ordinal());
        // }

        // laptop obj = laptop.Macbook;
        // System.out.println(obj);
        // obj.setPrice(1000);
        // System.out.println(obj.getPrice());

        // laptop [] lap = laptop.values();
        for(laptop val : laptop.values()){
            System.out.println(val + " " + val.getPrice());
        }



        

    }
}
