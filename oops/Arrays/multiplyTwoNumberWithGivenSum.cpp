#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    
    int start = 0;
    int end = n-1;
    int target;
    cin>>target;
   
    bool flag = false;
    
    while(start<end){
        
        if(arr[start] * arr[end] == target){
            flag = true;
            break;
        }
        else if (arr[start] * arr[end] < target){
            start++;
        }else{
            end--;
        }
        
    }
    
    if(flag){
        cout<<" Yes!";
    }else{
        cout<<" Batti Nhi Jalli ";
    }


}