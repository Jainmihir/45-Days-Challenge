#include<bits/stdc++.h>
using namespace std;
class Complex { 
    private :
        int real , img;
    public :
        Complex() {

        };
        Complex(int real , int img){
            this->img = img;
            this->real = real;
        }

        void display(){
            cout<<real<< " +i" <<img<<endl;
        }

        Complex operator +(Complex &C){
            Complex ans;
            ans.real = real+C.real;
            ans.img = img+C.img;
            return ans;
        }


};
int main(){
    Complex A(1,2);
    Complex B(2,3);
    Complex  C = A+B;
    C.display();
}