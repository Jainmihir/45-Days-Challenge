param(
        [string]$remoteIP = (Read-Host -Prompt "enter a remote ip address :")
    )

function configRemote{
    
    param(
        [string]$remoteIP
    )
    
    $credential = Get-Credential
    
    $session = New-PSSession -ComputerName $remoteIP -Credential $credential

    Write-Host "Configured Successfully"

    $session

}

configRemote -remoteIP $remoteIP