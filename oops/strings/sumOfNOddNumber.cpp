#include<bits/stdc++.h>
using namespace std;
int main(){
    // int n;
    // cin>>n;
    // int cnt = 0;
    // int odd = 0;
    // vector<int> oddElement;
    // for(int i=1;i<=n;i++){
    //     cnt++;
    //     if(cnt % 2 != 0){
    //         odd++;
    //         oddElement.push_back(i);
    //     }
    // }
    // cout<<odd;
    // int x;
    // cin>>x;
    // int sum = 0 ;
    // for(int i=0;i<x;i++){
    //     cout<<oddElement[i]<<"";
    //     sum +=oddElement[i];
    // }
    // cout<<endl;
    // cout<<sum<<endl;

    int x;
    cin>>x;
    int sum = 0;
    for(int i=0;i<x;i++){
        sum += (2*i+1);
    }
    cout<<sum<<endl;

}