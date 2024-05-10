param(
    [string]$url = "https://blogs.msdn.microsoft.com/powershell/feed/"
)

function fetchRestMethod{
    
    param(
        [string]$url
    )

    Invoke-RestMethod -Uri $url 
}
fetchRestMethod -url $url

