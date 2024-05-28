#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    int arr[n];
    for (int i = 0; i < n; i++) {
        cin >> arr[i];
    }
    
    vector<int> hash(n, 0);
    
    for (int i = 0; i < n; i++) {
        hash[arr[i] - 1]++;
    }
    
    // Finding missing and repeating elements
    int missingElement = -1;
    int repeatingElement = -1;
    for (int i = 0; i < n; i++) {
        if (hash[i] == 0) {
            missingElement = i + 1;
        }
        if (hash[i] > 1) {
            repeatingElement = i + 1;
        }
    }
    
    // Removing duplicates
    vector<int> removeDuplicate;
    for (int i = 0; i < n; i++) {
        if (hash[i] == 1) {
            removeDuplicate.push_back(i + 1);
        }
    }
    
    // Printing the unique elements
    int size = removeDuplicate.size();
    cout << "Size: " << size << endl;
    for (int i = 0; i < size; i++) {
        cout << removeDuplicate[i] << " ";
    }
    cout << endl;
    
    // Print missing and repeating elements
    cout << "Missing Element is: " << missingElement << endl;
    cout << "Repeating Element is: " << repeatingElement << endl;

    return 0;
}
