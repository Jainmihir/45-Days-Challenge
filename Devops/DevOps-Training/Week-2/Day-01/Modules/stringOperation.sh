#! /bin/bash

myVar="hello bro ?"

myVarLength=${#myVar}

echo "${myVar[*]}"

echo "length of my var is $myVarLength"

echo "uppercase is ${myVar^^}"
echo "lowercase is ${myVar,,}"

#slice
echo "${myVar:4:5}"

# replace a word
newVar=${myVar/bro/bhai}
echo "${newVar[*]}"