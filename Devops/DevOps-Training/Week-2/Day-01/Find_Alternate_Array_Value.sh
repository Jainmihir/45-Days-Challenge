#! /bin/bash

Array=(100 200 300 400 500)
length=${#Array[*]}

for (( i=0;i<$length;i++))
do
    if (( i%2==0 ))
    then
        echo "value of array is ${Array[$i]}"
    fi
done
