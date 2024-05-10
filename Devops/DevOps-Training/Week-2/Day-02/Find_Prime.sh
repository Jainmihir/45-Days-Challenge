#!/bin/bash

findPrime() {
    read -p "Enter a PrimeNumber " prime_number
    flag=0

    if (( $prime_number == 1 || $prime_number == 0 )); then 
        flag=1
    else
        for ((i=2; i<$prime_number; i++)); do
            if (( $prime_number % $i == 0 )); then
                flag=1
                break
            fi
        done
    fi

    if (( $flag == 1 )); then
        echo "This is not a prime number."
    else
        echo "This is a prime number."
    fi
}

findPrime
