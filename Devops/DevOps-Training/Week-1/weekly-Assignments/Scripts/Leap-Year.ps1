param(
   [int]$Input_Year = (Read-Host -Prompt "enter a leap year ")
   )
function findLeapYear{
   param(
      [int]$Input_Year
   )
   if($Input_Year % 400 -eq 0)
   {
      Write-Host "this is an  leap year" 
   }
   elseif($Input_Year % 100 -eq 0)
   {
      Write-Host "this is not an  leap year" 
   }
   elseif($Input_Year % 4 -eq 0)
   {
      Write-Host "this is a leap year"  
   }
   else{
      Write-Host "this is not an leap year" 
   }
}
findLeapYear -Input_Year $Input_Year