#include<bits/stdc++.h>
using namespace std;
class Parent{
    protected:
    int a;
    int b;
    public:
        void Parent_Papa(){
            cout<<" Beta Me Papa";
        }
};
class Child :  public Parent{
    int c;
    public:
        Child (int a , int b, int c ){
            this->a = a;
            this->b = b;
            this->c = c;
        }
        void Display(){
            cout<<a<<b<<c;
        }

};

int main(){
    Child A(1,2,3);
    A.Display();
}