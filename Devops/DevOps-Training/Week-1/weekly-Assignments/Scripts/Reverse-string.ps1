param(
      [string]$inputstring = (Read-Host -Prompt "enter a string" )
    )

function reverseString{
   param(
      [string]$inputstring
   )

   $chararray = $inputstring.ToCharArray()
   $start = 0
   $end = $chararray.Length-1
   
   while($start -lt $end)
   {
      $temp = $chararray[$start]
      $chararray[$start] = $chararray[$end]
      $chararray[$end] = $temp
      $start++
      $end--     
   }
   [string]$reversed = -join $chararray

   Write-Host "output : $reversed"
}

reverseString -inputstring $inputstring