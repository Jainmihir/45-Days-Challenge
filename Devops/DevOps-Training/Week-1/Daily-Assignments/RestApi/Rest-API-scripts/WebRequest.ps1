param(
    [string]$url = "https://blogs.msdn.microsoft.com/powershell/feed/"
)

function fetchWebRequest{
    
    param(
        [string]$url
    )

    Invoke-WebRequest -Uri $url 
}
fetchWebRequest -url $url

