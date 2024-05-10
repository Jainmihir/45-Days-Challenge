param(
        [string]$remoteIP = (Read-Host -Prompt "enter a remote ip address :"),
        [string]$source = (Read-Host -Prompt "enter a source path "),
        [string]$destination = (Read-Host -Prompt "enter a destination path ")
    )

function copyFileToRemote{
    
    param(
        [string]$remoteIP,
        [string]$source ,
        [string]$destination
    )
    
    $credential = Get-Credential
    $session  = New-PSSession -ComputerName $remoteIP -Credential $credential

    if($session){
        Write-Host "Successfully configured"
        Copy-Item -Path $source -Destination $destination -ToSession $session
    }
    else{
        Write-Host "Not configured successfully"
    }
}

copyFileToRemote -remoteIP $remoteIP -source $source -destination $destination