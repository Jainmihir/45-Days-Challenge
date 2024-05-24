#include<bits/stdc++.h>
using namespace std;
int main(){
    int n;
    cin>>n;
    for(int i=0;i<n;i++){
        for(char ch='A';ch<='A'+i;ch++){
            cout<<ch;
        }
        cout<<endl;
    }
    cout<<endl;
    for(int i=0;i<n;i++){
        for(char ch='A'; ch<='A'+(n-i)-1;ch++){
            cout<<ch<<" ";
        }
        cout<<endl;
    }
    cout<<endl;
    for(int i=0;i<n;i++){
        char ch = 'A' + i;
        for(int j=0;j<=i;j++){
            cout<<ch<<"";
        }
        cout<<endl;
    }
    cout<<endl;
    for(int i=0;i<n;i++){
        for(int j=0;j<n-i-1;j++){
            cout<<" ";
        }
        char ch = 'A';
        int breakPoint = (2*i+1)/2;
        for(int j=1;j<=2*i+1;j++){
            cout<<ch;
            if(j<=breakPoint){
                ch++;
            }else{
                ch--;
            }
        }
        cout<<endl;
    }

    cout<<endl;
    for(int i=0;i<n;i++){
        for(char ch='E'-i; ch<='E';ch++){
            cout<<ch<<" ";
        }
        cout<<endl;
    }

    cout<<endl;

}