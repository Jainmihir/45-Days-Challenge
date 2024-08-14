class A{
    public String name;

    public String toString(){
        return name;
    }
    
    public boolean equals(A that){
        return this.name.equals(that.name);
        
    }


}   

public class objectClasses {
    public static void main(String[] args) {
        A obj = new A();
        obj.name =  "MJ";
        A obj1 = new A();
        obj1.name = "MJ";
        // System.out.println(obj); // A@3c0a50da -> it gives this because object classes if we cannot 
        // // decalare any function in class then it return toString hashcode or name of class 
        // System.out.println(obj.toString()); // it gives Mj
        // System.out.println(obj1 == obj);  // it gives false
        // obj1.name = "MJ";
        System.out.println(obj.equals(obj1)); // it gives true
        // System.out.println(obj); 

    }    
}
