param(
    [string]$Policy = (Read-Host -Prompt "Enter a policy "),
    [string]$scope = (Read-Host -Prompt "Enter a scope")
)

function setExecutionPolicy{
    
    param(
        $Policy,
        $scope
    )


    Set-ExecutionPolicy -ExecutionPolicy $setexe -Scope $setmachine
    Write-Host "Successfully Set The Policy"
} 

setExecutionPolicy -Policy $Policy -scope $scope