#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    int cnt=0;
    /* SIEVE OF ERTHOTHENIS*/
    vector<bool> Prime(n+1,true);
    Prime[0] = Prime[1] = false;

    for(int i=2;i<n;i++){
        if(Prime[i]){
            cnt++;
            for(int j=2*i;j<n;j=j+i){
                Prime[j] = false;
            }
        }
    }
    cout<<cnt;

    // for(int i=1;i<=n;i++){
    //     if(n%i == 0){
    //         cnt++;
    //     }
    // }
    // // cout<< cnt;
    // if(cnt == 2){
    //     cout<<"this is an prime number";
    // }else{
    //     cout<<" this is not an prime number";
    // }

   
    
}