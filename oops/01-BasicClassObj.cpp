#include<iostream>
using namespace std;
class Hero{

    // int value;
    // int value1;
    
    
	private:
    int health;
    
    public:
	char level;
    
    Hero(){
        cout<<" Constructor called ";
    }
	Hero(int health){
        this-> health = health;
    }
	
	int getHealth(){
		return health;
	}
	
	void setHealth(int h){
		health = h;
	}
	
};

int main(){
    
    
    // Hero Mihir;
    // Mihir.health = 1;
	// Mihir.level = '7';
    // cout<<Mihir.health<<endl;
    // cout<<Mihir.level<<endl;
	// Mihir.setHealth(1);
	// cout<<Mihir.getHealth();
    // Hero *b = new Hero;
    // (*b).setHealth(1);
    // cout<< "health is "<< (*b).getHealth() << endl;
    //  cout<< "health is "<< b->getHealth() << endl;
    // cout<<sizeof(Mihir);
}