import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;

class Stu implements Comparable<Stu>{ 
    private int pmarks;
    private int mmarks;

    public Stu(){

    }
    public Stu(int mmarks , int pmarks){
        this.mmarks= mmarks;
        this.pmarks = pmarks;
    }

    public String toString(){
        return "maths " + mmarks + "physics" + pmarks; 
    }

    public int getMaths(){
        return mmarks;
    }

    public int getPhysics(){
        return pmarks;
    }

    public int compareTo(Stu temp){
        if(this.pmarks > temp.pmarks){
            return 1;
        }else{
            return -1;
        }
    }

    


}

public class examplelast{
   
    public static void main(String[] args) {
        

        Comparator<Stu> sortbymaths = new Comparator<Stu>() {
            public int compare(Stu a , Stu b){
                if(a.getMaths() > b.getMaths()){
                    return 1;
                }else{
                    return -1;
                }
            }
        };

        List<Stu> stude = new ArrayList<>();
        stude.add(new Stu(40,50)); 
        stude.add(new Stu(30,80));
        stude.add(new Stu(10,90));

        Collections.sort(stude);
        // stude.sort(sortbymaths);

        for(Stu s : stude){
            System.out.println(s.toString());
        }

    }
}