#! /bin/bash

#Declaration
array=(100 200 300 400 500)
myArray=( 1 2 30.5 hello "hey man")
echo ${array[*]}
echo "value in first index ${myArray[0]}"
echo "${myArray[*]}"

#find length of an array 
echo "${#myArray[*]}"

#specificvalues
echo "${myArray[*]:1}"
echo "${myArray[*]:1:2}"

#updating our array with new values
arr=( 1 2 3)
arr+=( 5 6 8)
echo "${arr[*]}"

# How to store the key values pairs

declare -A newArray
newArray=( [name]=MJ [age]=23 )
echo "${newArray[name]}"
echo "${newArray[age]}"
