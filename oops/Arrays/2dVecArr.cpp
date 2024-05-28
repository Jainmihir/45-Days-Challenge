#include<bits/stdc++.h>
using namespace std;
void WaveForm(vector<vector<int>> matrix , int row , int col){
    for(int j=0;j<col;j++){
        if(j%2==0){
            for(int i=0;i<row;i++){
                cout<<matrix[i][j]<<" ";
            }
            cout<<endl;
        }
        else{
            for(int i=row-1;i>=0;i--){
                cout<<matrix[i][j]<<" ";
            }
            cout<<endl;
        }
    }
}

void spiralMatrix(vector<vector<int>> matrix){
    vector<int> ans;
    int row = matrix.size();
    int col =  matrix[0].size();
    int top = 0, bottom = row-1 , left = 0 , right = col-1;
    while(top<=bottom  && left<=right){
        // print top

        for(int j=left; j<=right;j++){
            cout<<matrix[top][j];
        }
        top++;    
        // print right 
        for(int j=top;j<=bottom;j++){
            cout<<matrix[j][right];
        }
        right--;
        // print bottom
        if(top<=bottom) {
        for(int j=right;j>=left;j--){
            cout<<matrix[bottom][j];
        }
        bottom--;
        }
        // print left
        if(left <= right){
        for(int j=bottom;j>=top;j--){
            cout<<matrix[j][left];
        }
        left++;
        }
    }
}
void TransposeMat(vector<vector<int>> matrix){
    int row =  matrix.size();
    int col = matrix[0].size();
    
   
   for(int i=0;i<row-1;i++){
    for(int j=i+1;j<col;j++){
        swap(matrix[i][j],matrix[j][i]);
    }
   }

   for(int i=0;i<row;i++){
    for(int j=0;j<col;j++){
        cout<<matrix[i][j];
    }
    cout<<endl;
   }
   
    // vector<vector<int>> ans(row,vector<int>(col));

    // for(int i=0;i<row;i++){
    //     for(int j=0;j<col;j++){
    //         ans[j][i] = matrix[i][j];
    //     }
    // }

    // for(int i=0;i<row;i++){
    //     for(int j=0;j<col;j++){
    //         cout<<ans[i][j];
    //     }
    //     cout<<endl;
    // }
}

int main(){
    int row,col;
    cin>> row >> col ; 
    vector<vector<int>> matrix(row,vector<int>(col));

    for(int i=0;i<row;i++){
        for(int j=0;j<col;j++){
            cin>>matrix[i][j];
        }
    }

    // for(int i=0;i<row;i++){
    //     for(int j=0;j<col;j++){
    //         cout<<matrix[i][j]<<" ";
    //     }
    //     cout<<endl;
    // }
    // cout<<endl;
    // WaveForm(matrix,row,col);
    // cout<<endl;
    // spiralMatrix(matrix);
    // cout<<endl;

    // cout<<"Rows Size : " << matrix.size()<<endl;
    // cout<<"Column Size : "<< matrix[0].size();

    TransposeMat(matrix);

}