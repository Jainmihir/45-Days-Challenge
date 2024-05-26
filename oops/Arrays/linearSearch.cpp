#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    int x;
    cin>>x;
    int ans;
    for(int i=0;i<n;i++){
        if(arr[i] == x){
            ans = i;
            break;
        }
    }
    cout<<"index is "<< ans;
}