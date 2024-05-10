#! /bin/bash

read -p "Enter a First Number :" FirstNumber
read -p "Enter a Second Number :" SecondNumber
echo "Select a Arithematic operation :"
echo -e " 1 -> Addition \n 2 -> Subtraction \n 3 -> Multiply \n 4 -> Divide \n 5 -> Modulas \n "
read -p "Select 1 to 5 :" SelectNumber
case $SelectNumber in
    1)
        echo "Addition is  :- " $(( FirstNumber + SecondNumber ))
    ;;
    2)
        echo "Subtraction is  :- " $(( FirstNumber - SecondNumber ))
    ;;
    3)
        echo "Multiplication is :- " $(( FirstNumber * SecondNumber ))
    ;;
    4)
        echo "Division is :- " $(( FirstNumber / SecondNumber ))
    ;;
    5) 
        echo "Modulas is :- " $(( FirstNumber % SecondNumber ))
    ;;
    *)
        echo "Please Select A Number Between 1 To 5"
    ;;
esac



