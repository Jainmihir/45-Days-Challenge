#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    // brute force
    // int ans = INT_MIN;
    // for(int i=0;i<n-1;i++){
    //     for(int j=i+1;j<n;j++){
    //         ans = max(ans,arr[j]-arr[i]);
    //     }
    // }
    // cout<<ans;

    // best case
    int suffix = arr[n-1];
    int maxi = INT_MIN;
    int ans = 0;
    for(int i=n-2;i>=0;i--){
        suffix =  max(suffix,arr[i]);
        maxi = max(suffix-arr[i],maxi);
    }
    cout<<maxi;

}