#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    int arr[n];
    int sumOfNaturalNumber = (n*(n+1))/2;
    cout<<sumOfNaturalNumber<<endl;
    int sum = 0;
    for(int i=0;i<n-1;i++){
        cin>>arr[i];
        sum += arr[i];
    }
    cout<<sum<<endl;
    cout<<"Missing Number is : " << sumOfNaturalNumber-sum;
}