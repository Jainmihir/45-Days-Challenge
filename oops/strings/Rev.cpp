#include<bits/stdc++.h>
using namespace std;
int main(){
    string s;
    getline(cin, s);
    for(int i=0;i<s.length();i++){
        cout<<s[i]<<"";
    }
    cout<<endl;

    int start = 0;
    int end = s.length()-1;
    while(start<end){
        swap(s[start],s[end]);
        start++;
        end--;
    }

    for(int i=0;i<s.length();i++){
        cout<<s[i]<<"";
    }
    

}