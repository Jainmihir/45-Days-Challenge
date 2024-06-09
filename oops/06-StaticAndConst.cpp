#include<bits/stdc++.h>
using namespace std;
class SBI_bank{
    private : 
        string customerName;
        string location;
        int balance;
        static int accountNumber;
        static int accountCount;
        static int accountId;
    
    public:

        SBI_bank() {
            customerName = "None";
            location = "None";
            balance = 0;
        }


        SBI_bank(string CustomerName , string location , int balance ){
            this-> customerName = CustomerName;
            this-> location = location;
            this-> balance  = balance; 
            accountCount++;
            accountNumber++;
            accountId++;
        }

        static void count_Number_Of_Accounts(){
            cout<<accountCount<<endl;
        }

        void amountCredit(long long int Accountbalance){
            if(Accountbalance > 0 ){   
                balance+=Accountbalance; 
            }else{
                cout<<"Itna Pese Hone ke bd bhi itna kam ";
            }
        }

        void DisplayAccountDetails(){
            cout<<accountId<<" "<<accountNumber<<" "<<" "<<location<<" "<<balance<<" "<<customerName << " "<< accountCount<<endl;
        }



};

int SBI_bank::accountCount=0;
int SBI_bank::accountNumber=10000;
int SBI_bank::accountId=0;


int main(){
    SBI_bank Client("Mihir","Kota",100000);
    Client.DisplayAccountDetails();
    Client.amountCredit(500);
    // Client.amountCredit(0);
    Client.DisplayAccountDetails();
    SBI_bank Client1("Mihir","Kota",100000);
    Client1.DisplayAccountDetails();
    SBI_bank::count_Number_Of_Accounts();
}