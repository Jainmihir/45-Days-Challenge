x=10
y=2

echo "-> " $((x*y))

# -- we cannot print it like this because bash is assuming this is a string
# mul=$x*$y
# echo "$mul"

# -- we cannot print intead we use let and let is used for arithematic operation
let mul=$x*$y

echo "$mul"
let x++
echo "$x"
$((x++))
echo "$x"