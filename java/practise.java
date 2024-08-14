public class practise {
    public static void main(String args[]){
        int num = 121;
        int orginalnum = num;
        int i= 0;
        int rev = 0;
                
        while(i < num){
            int lastdigit = num%10;
            rev = (rev*10)+lastdigit;
            num = num/10;
        }
        System.out.println(rev);

        if(rev == orginalnum){
            System.out.println("Yes");
        }else{
            System.out.println("No");
        }

        i=0;

        int num4 = 5;
        for(i=0;i<num4;i++){
            for(int j=0;j<=i;j++){
                System.out.print("*");
            }
            System.out.print("\n");
        }

        
        



    }
}
