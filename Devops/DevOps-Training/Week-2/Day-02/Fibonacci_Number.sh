findFibonacci (){
    read -p "Enter a Fibonacci Number :- " Fibonacci_Number
    firstNumber=0
    secondNumber=1
    echo -e "$firstNumber\n$secondNumber"
    for(( i=2;i<$Fibonacci_Number;i++ ))
    do
        addFibonnaci=$((firstNumber+secondNumber))
        echo "$addFibonnaci"
        firstNumber=$secondNumber
        secondNumber=$addFibonnaci
    done
}
findFibonacci