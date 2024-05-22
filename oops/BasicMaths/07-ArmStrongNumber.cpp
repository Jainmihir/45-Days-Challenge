#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    int originalNumber = n;
    int duplcateNumber = n;
    int cnt=0;
    int sum=0;
    while(n>0){
        int ld = n%10;
        cnt++;
        n = n/10;
    }

    while(originalNumber>0){
        int ld = originalNumber % 10;
        cout<<sum<<endl;
        sum = sum + pow(ld,cnt);
        cout<<sum<<endl;
        originalNumber= originalNumber/10;
    }
    cout<<sum;
    if(sum == duplcateNumber){
        cout<<" This is ArmStrong Number";
    }else{
        cout<<" This is Not an Armstrong Number";
    }
}