#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    int valueatlastIndex = arr[n-1];
    for(int i=n-2;i>=0;i--){
        arr[i+1] = arr[i];
    }
    arr[0] = valueatlastIndex;
    for(int i=0;i<n;i++){
        cout<<arr[i];
    }


}