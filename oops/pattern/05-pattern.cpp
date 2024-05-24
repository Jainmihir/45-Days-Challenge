#include<bits/stdc++.h>
using namespace std;
void printPattern(int n){
    for(int i=0;i<n;i++){
        for(int k=0;k<n-i-1;k++){
            cout<<" ";
        }
        for(int j=0;j<(2*i)+1;j++){
            cout<<"*";
        }
        cout<<endl;
    }
}

void printPattern1(int n){
    for(int i=0;i<n;i++){
        for(int j=0;j<(i+1-1);j++){
            cout<<" ";
        }
        for(int k=0;k<2*n-(2*i+1);k++){
            cout<<"*";
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