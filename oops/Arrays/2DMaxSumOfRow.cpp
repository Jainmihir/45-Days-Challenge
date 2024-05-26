#include<bits/stdc++.h>
using namespace std;
void reverseEachRowMat(int arr[][3] , int row , int col){
    for(int i=0;i<row;i++){
        int start = 0;
        int end = col-1;
        while(start<end){
            swap(arr[i][start],arr[i][end]);
            start++;
            end--;
        }
    }
    
}

void diagonalSum(int arr[][3], int row , int col ){
    int first = 0;
    int second = 0;
    int i=0;
    while(i<row){
        first+=arr[i][i];
        i++;
    }
    i=0;
    int j = col-1;
    while(j>=0){
        second += arr[i][j];
        i++;
        j--;
    }
    cout<<"first" << first << endl;
    cout<<second;


}
void maxSumOfEachRow(int arr[][3], int row , int col){
    int finalSum = INT_MIN;
    int index = -1;
    for(int i=0;i<row;i++){
        int totalSumOfEachRow = 0;
        for(int j=0;j<col;j++){
            totalSumOfEachRow += arr[i][j];
            if(finalSum < totalSumOfEachRow){
                finalSum = max(finalSum,totalSumOfEachRow);
                index = i;
            }
        }
    }
    cout<<index;
}

void ColumnWise(int arr[][3], int row, int col){
        for(int i=0;i<row;i++){
            for(int j=0;j<col;j++){
                cout<<arr[j][i];
            }
            cout<<endl;
        }
}
int main(){
    // int row,col;
    // cin>>row,col;
    int arr[3][3];
    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            cin>>arr[i][j];
        }
    }
    
    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            cout<<arr[i][j];
        }
        cout<<endl;
    }
    // ColumnWise(arr,3,3);
    // maxSumOfEachRow(arr,3,3);
    // diagonalSum(arr,3,3);
    reverseEachRowMat(arr,3,3);
    for(int i=0;i<3;i++){
        for(int j=0;j<3;j++){
            cout<<arr[i][j];
        }
        cout<<endl;
    }
}