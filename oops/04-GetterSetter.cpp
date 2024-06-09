#include <bits/stdc++.h>
using namespace std;

class Student {
    private:
        string studName;
        char studSection;
        int studRollNo;

    public:
        int print(){
            cout<< studName << " " << studRollNo << " " << studSection<<endl;

        }
        void set(int studRollNo, char studSection , string studName){
            this->studName = studName;
            this->studSection = studSection;
            this->studRollNo = studRollNo;
        }
};

int main(){
    Student A;
    int rollNo;
    char studSection;
    string studName;
    cin>>rollNo>>studSection>>studName;
    A.set(rollNo,studSection,studName);
    A.print();


}