param(
    [int]$number  = (Read-Host -Prompt "enter a armstrong number")
    )
function FindArmStrongNumber{
    
    param(
        [int]$number
    )  
    $original_number = $number
    $temp = $number
    $count = 0
    $lastdigit = 0
    $digit = 0
    $sum = 0
    
    while($number -ne 0){
        $digit = $number%10;
        $count = $count + 1
        $number = $number/10
    }
    
    while($temp -ne 0){
        $lastdigit = $temp%10
        $power = [math]::Pow($lastdigit,$count) 
        $sum = $sum + ($power)
        $temp = [math]::Floor($temp/10)
    }


    if($sum -eq $original_number){
        Write-Host "this is an armstrong number"
    }
    else{
        Write-Host "this is not an armstrong number"
    }
    
}
FindArmStrongNumber -number $number