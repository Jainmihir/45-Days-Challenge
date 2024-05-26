// /* max diff between 2 elements */
#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++){
        cin>>arr[i];
    }
    int totalsum = 0;
    for(int i=0;i<n;i++){
        totalsum += arr[i];
    }
    cout<<totalsum<<endl;
    int prefix=0;
    int finalSum = 0;
    bool flag = false;
    for(int i=0;i<n-1;i++){
        prefix+=arr[i];
        finalSum = totalsum - prefix;
        if(finalSum == prefix);
        {
            flag=true;
            break;
        }
    }
    if(flag == true){
        cout<<" yes";
    }else{
        cout<<"No";
    }





    // int sum1 = 0; 
    // int sum2 = 0;
    // int flag = false;
    // brute force o(3*n)
    // for(int i=0;i<n-1;i++){
    //     for(int j=0;j<=i;j++){
    //         cout<<"sum1 : "<< arr[j]<<" ";
    //         sum1+=arr[j];
    //     }
    //     for(int j=i+1;j<n;j++){
    //         cout<<"Sum2 : " << arr[j] << " ";
    //         sum2+=arr[j];
    //     }
    //     cout<<sum1 << " ";
    //     cout<<sum2<<endl;
    //     if(sum1!=sum2){
    //         sum1=0;
    //         sum2=0;
    //     }
    //     else{
    //         cout<<"sum1 " << sum1 <<" " << "sum2 " << sum2 <<endl;
    //         flag = true;
    //     }
    // }
    // cout<<sum1<<" "<<sum2<<endl;
    // if(flag == true){
    //     cout<<"yes";
    // }else{
    //     cout<<"No";
    // }

}