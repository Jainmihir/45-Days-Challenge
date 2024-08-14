package interview;
class Student{

    private int marks;
    private String name;

    Student(){
        this.name =  "MJ";
        this.marks = 0;
    }

    Student(int marks , String name ){
        this.marks = marks;
        this.name = name;
    }

    public int getMarks(){
        return this.marks;
    }

    public String name(){
        return this.name;
    }







}
