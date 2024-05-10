# function myFun {
#     echo "Hi this is function"
# }
# myFun

# myfun1() {
#     echo "hi"
# }
# myfun1

# myfun3() {
#     local num1=$1
#     local num2=$2
#     let sum=$num1+$num2
#     echo "sum of $num1 and $num2 is $sum"

# }
# myfun3 12 13

# myFunction() {
#     FILEPATH="/mnt/c/Users/mihir.jain/desktop/Mihir-AssignmentRepo-1/Week-2/Day-01/HelloWorld.txt"
#     if (( -f $FILEPATH ))
#     then
#         echo "file exists"
#     else
#         echo "file is not exist"
#     fi
# }
# myFunction

# FILEPATH="/mnt/c/Users/mihir.jain/desktop/Mihir-AssignmentRepo-1/Week-2/Day-01/HelloWorld.txt"

# if [[ -f $FILEPATH ]]; then
#     echo "File exists"
# else
#     echo "File does not exist"
# fi



# read -p "enter a number " number

# Array=()
# length=${#Array[*]}
# echo "length is " $length
# # declare -a Array

# for ((i=0; i<$number; i++));
# do
#     read -p "enter the value in array " Array[i]
# done
# length=${#Array[*]}
# echo "length is " $length
# for ((i=0; i<$number; i++))
# do
#     echo "the values are  ${Array[$i]}"
# done

# function conf() {
#     echo "${FUNCNAME}" // system defined varibles
    
#     echo "hello is ${1}"
    
#     # mj=${1}
#     # echo "hello $mj"

# }
# conf "hi"

# packagename="helloji"

# function first() {
#     local packagename="hi"
#     echo "0-> " ${FUNCNAME} 
#     echo "1->  "${packagename}

# }

# function second() {
#     myname="hello"
#     echo "0-> ${FUNCNAME}" 
#     echo "1-> ${packagename}" 
# }

# echo "first $packagename" 
# first "${packagename}"
# second "${packagename}"
# echo "last  $packagename"
# echo "myname $myname"
read -p "enter the number of elements" number
Array=()

for((i=0; i<$number; i++))
do
    read -p "enter the number of elements " Array[i]
done
for((i=0; i<$number; i++))
do
    echo "the values are ${Array[$i]}"
done
echo " ${Array[@]} "
unset "Array[${#Array[@]}-1]"
last=${Array[-1]}
echo "last is ${last}"
length=${#Array[@]}
echo "length is ${length}"

