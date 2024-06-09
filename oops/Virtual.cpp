#include<bits/stdc++.h>
using namespace std;
class Animal{
    public: 
        // when we write virtual keyword the speak function is invoked on run time
        virtual void Speak(){
            cout<< "Huhu";
        }
        

        // virtual void speak() = 0  // we cannot create the object of this pure virtual function
        // we can also say this abstract class
        // we canot create is object also
};

class Dog : public Animal{
    public: 
        void Speak(){
            cout<<"Hello , I am Dog";
        }
};

int main(){
    Animal *p;
    p = new Dog;
    p->Speak();

}