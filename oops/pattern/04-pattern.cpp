#include<bits/stdc++.h>
using namespace std;
void printPattern(int n){
    for(int i=1;i<=n;i++){
        for(int j=1;j<=(n-i)+1;j++){
            cout<<"*";
        }
        cout<<endl;
    }
}   
void printPattern1(int n){
    for(int i=1;i<=n;i++){
        for(int j=1;j<=(n-i)+1;j++){
            cout<<j<<"";
        }
        cout<<endl;
    }
}   
int main(){
    int n;
    cin>>n;
    printPattern(n);
    printPattern1(n);
}