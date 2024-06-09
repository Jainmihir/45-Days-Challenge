#include<bits/stdc++.h>
using namespace std;
class construtorExample{

    int num1;
    int num2;
    public:
    construtorExample(){
        num1 = 0;
        num2 = 0;
        cout<<"Constructor Is Called" << endl;
    }    

    // parameterized contrutor
    construtorExample(int a , int b){
        this->num1=a;
        this->num2=b;
    }

    // copy contructor
    construtorExample(construtorExample &B){
        this->num1 = B.num1;
        this->num2 = B.num2;
    }

    // add sum 
    void printSum(){
        int sum =  num1 + num2;
        cout<<"Sum : " << sum <<endl;
    }


};
int main(){
    construtorExample A(1,2);
    A.printSum();
    construtorExample A1(A);
    A1.printSum();
    
    construtorExample A2 = A;
    A2.printSum();

    construtorExample *A3 = new construtorExample(3,4);
    A3->printSum();
    delete A3;
    



    

}