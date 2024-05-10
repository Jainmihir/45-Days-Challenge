
# for i in 1 2 3 4 
# do
#     echo "the number is : $i"
# done

# for name in mihir jain
# do
#     echo "name is : $name"
# done

# read -p "enter the value " N
# for p in {1..5}
# do
#     echo "number is : $p"
# done

# FILE="/mnt/c/users/mihir.jain/desktop/MIHIR-ASSIGNMENTREPO-1/Week-2/Day-01/Modules$"
# for i in $(cat $FILE)
# do
#     echo "I is $i"
# done

# Array=(100 200 300 400 500)
# length=${#Array[*]}
# for (( i=0;i<$length;i++))
# do
#     echo "value of array is ${Array[$i]}"
# done


count=0
num=10
while [[ $count -le $num ]]
do
    echo "Numbers are $count"
    let count++
done