#include<bits/stdc++.h>
using namespace std;
class Mihir {
     
    int a;
    int b;
    public:
    int getsum(){
         return a+b;   
    }

    void setsum(int a , int b){
        this->a = a;
        this->b = b;
    }
    
};
class B : public Mihir{
    
};
int main(){
    B an;
    int a , b;
    cin>>a>>b;

    an.setsum(a,b);
    cout<<an.getsum();
}