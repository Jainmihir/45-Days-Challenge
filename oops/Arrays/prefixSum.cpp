#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    int maxi = INT_MIN;
    int prefix = 0;
    for(int i=0;i<n;i++){
        prefix+=arr[i];
        maxi = max(prefix,maxi);
        if(prefix < 0 ){
            prefix = 0;
        }
    }
    cout<<maxi<<"";

    // int maxi = INT_MIN;
    // for(int i=0;i<n;i++){
    //     int prefix = 0;
    //     for(int j=i;j<n;j++){
    //         prefix+=arr[j];
    //         maxi = max(maxi,prefix);  
    //     } 
    // }
    // cout<<maxi<<endl;
}