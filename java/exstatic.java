class Student{
    int roll_no;
    static char section;
    String name;

    // static block is used for assigning the value of static variables
    // it is call only one time not call second time

    static{
        section ='A';
        System.out.println("static is called");
    }

    Student(){
        name =  "Mihir";
        roll_no = 101;
        System.out.println("contructor is called");
    }

    public void show(){
        System.out.println(roll_no + " " + name + " "  + section);
    }


    // static function can only call by class name 
    public static void show1(Student obj)
    {
        // System.out.println(roll_no + " " + name + " "  + section);
        System.out.println(obj.roll_no + " " + obj.name + " "  + section);
    }


}

public class exstatic {
    public static void main(String args[]){
        Student s1 = new Student();
        // s1.name = "Mihir";
        // s1.roll_no = 1;
        // Student s2 = new Student();
        // s2.name = "Mihir";
        // s2.roll_no = 1;
        // s1.section = 'A'; // this is not a static way to handle static variable
        // Student.section = 'A'; this is the way we are handle static variables we can access them my class name
        // so that's why we are created static void main because we did not create any objects about that
        // s1.show();
        // s2.show();
        Student.show1(s1);


    }
}
