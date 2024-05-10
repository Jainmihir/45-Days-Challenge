param(
    [int]$number = (Read-Host -Prompt "enter a number")
    )
function findPalindrome{
    
    param(
        [int]$number
    )
    $reverse_number = 0
    $original_number = $number

	while($number -ne 0){
		$lastdigit = $number % 10;
		$reverse_number = ($reverse_number*10)+$lastdigit;
		$number = [math]::Floor($number/10);
	} 
    
	if ($original_number -eq $reverse_number) 
    {
        Write-Host "The number is a palindrome .$original_number"
    } 
    else 
    {
        Write-Host "The number is not a palindrome.$reverse_number"
    }

}
findPalindrome -number $number




