#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    int originalNumber = n;
    int revNumber = 0;
    while(n>0){
        int lastdigit = n%10;
        revNumber = (revNumber*10)+lastdigit;
        n = n/10;    
    }
    if(originalNumber == revNumber){
        cout<<"This Number is palimdrome"<<endl;
    }else{
        cout<<" This number is not an palimdrome"<<endl;
    }
}