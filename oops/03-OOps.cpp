#include<bits/stdc++.h>
using namespace std;
// basic class and Object Declaration

class A{
    public:
        int stud_RollNo;
        string stud_Name;
        char section;

    void getStudDetails(){
        cout<< stud_RollNo << endl;
        cout<< stud_Name << endl;
        cout<<section << endl;
    }  
    void setStudDetails(int a , string b , char c){
        cin>>stud_RollNo;
        cin>>stud_Name;
        cin>>section;
    }
};


int main(){
    A Students;
    int a;
    string b;
    char c;
    Students.setStudDetails(a,b,c);
    Students.getStudDetails();
}