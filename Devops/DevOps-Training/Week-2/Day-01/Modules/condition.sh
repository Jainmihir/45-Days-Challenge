#! /bin/bash


# count=10
# if [ $count -eq 9 ]
# then
#     echo "condition is true"
# else
#     echo "conditon is not true"
# fi

# read -p 'enter number : ' number
# if (( $number > 9 ))
# then
#     echo "this is greater then 9 "
# else
#     echo "this is less than 9 "
# fi


# read -p "enter a number : " number
# if (( $number == 9 ))
# then
#     echo "same"
# else
#     echo "not same"
# fi

# read -p "enter a number : " number
# if (($number != 9))
# then
#     echo "this is number is not equal to 9"
# else
#     echo "this is number is 9 "
# fi  

# word=abc
# if (($word == "abc"))
# then 
# echo "matching"
# else
# echo "not matching"
# fi


# number=4
# if [ $number -eq 6 ]
# then 
#     echo "this is same number"
# elif [ $number -gt 6 ]
# then
#     echo "this is greater"
# elif [ $number -lt 6 ]
# then 
#     echo "this is less than 6 "
# else
#     echo "please input "
# fi

read -p  "enter a number" number
case $number in
1)
    echo "this is 1"
    ;;
2) 
    echo "this is 2"
    ;;
*)
    echo "not a valid"
    ;;
esac
