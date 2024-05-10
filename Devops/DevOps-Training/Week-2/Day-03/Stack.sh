#!/bin/bash


stack=()

read -p "Enter The Size Of the stack " stack_size

for((i=0;i<20;i++)) {
    echo -e "1 -> Push \n 2-> Pop \n 3-> Peek \n 4-> isEmpty \n 5-> isFull \n 6-> Size \n  7->Display " 
    read -p "Choose A Number " Choose_Number
    case $Choose_Number in
    1)
        if [ ${#stack[@]} -eq $stack_size ]
        then
        echo "Stack is full. Cannot push element."
        else
        read -p "enter the values in stack " push_element
        stack+=("$push_element")
        echo "Pushed: ${push_element}"
        fi
    ;;
    2) 
        if (( ${#stack[@]} == 0 ))
        then
        echo "Stack is empty. Cannot pop element."
        else
        popped_element="${stack[-1]}"
        unset "stack[${#stack[@]}-1]"
        echo "Popped: $popped_element"
        fi
    ;;
    3) 
        if [ ${#stack[@]} -eq 0 ]; then
        echo "Stack is empty. Cannot peek."
        else
        echo "Top element: ${stack[-1]}"
        fi
    ;;
    4)
        if [ ${#stack[@]} -eq 0 ]; then
        echo "Stack is empty"
        else
        echo "Stack is not empty"
        fi
    ;;
    5)
        if [ ${#stack[@]} -eq $stack_size ]; then
        echo "Stack is full"
        else
        echo "Stack is not full"
        fi
    ;;
    6)
        echo "Stack size: ${#stack[@]}"
    ;;
    7)
        if [ ${#stack[*]} -eq 0 ]; then
        echo "Stack is empty"
        else
        echo "Stack elements: ${stack[*]}"
        fi

    ;;
esac
}
