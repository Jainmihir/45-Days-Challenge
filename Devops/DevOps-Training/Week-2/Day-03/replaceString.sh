#!/bin/bash


findreplacestring() {
    
    local file="$1"
    local target_string="$2"
    local replacement_string="$3"

    echo "Before Replacing "
    sed -n "p" $file 

    echo -e "\nWord is Read "
    sed -n "/$target_string/p" $file
    sed -i "s/$target_string/$replacement_string/g" "$file"
    echo -e "\n" "String '$target_string' replaced with '$replacement_string' in '$file'."
    echo "After replacing a word "
    sed -n "p" $file 
    echo -e "\n"
}

file_to_modify="$1"
target_string="$2"
replacement_string="$3"

findreplacestring "$file_to_modify" "$target_string" "$replacement_string"
