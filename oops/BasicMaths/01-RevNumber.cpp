#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cout<< " Enter A number : ";
    cin>>n;
    int reverseNumber = 0;
    while(n>0){
        int lastDigit = n%10;
        reverseNumber = (reverseNumber*10)+lastDigit;
        n = n/10;
    }
    cout<<reverseNumber;
}