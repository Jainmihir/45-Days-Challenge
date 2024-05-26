#include<bits/stdc++.h>
using namespace std;
int find(int arr[] , int n , int x){
    for(int i=0;i<n;i++){
        if(arr[i] == x){
            return i; 
        }
    }
    return -1;

}
int deleteElement(int arr[] , int n, int x){
    int pos = find(arr,n,x);
    if(pos == -1){
        cout<<"Element not Found";
        return -1;
    }
    for(int i=pos;i<n-1;i++){
        arr[i] = arr[i+1];
    }
    return n-1;

}
int main(){
    int n;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    int x;
    cin>>x;
    int ans = deleteElement(arr,n,x);
    for(int i=0;i<ans;i++){
        cout<<arr[i];
    }


}