#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    int maxium = INT_MIN;
    int secondMax = INT_MIN;
    for(int i=0;i<n;i++){
        if(arr[i] > maxium){
            maxium = arr[i];
        }
    }
    for(int i=0;i<n;i++){
        if(arr[i] != maxium){
            secondMax = max(secondMax,arr[i]);
        }
    }
    cout<<"Second Maximum is" << secondMax;

}