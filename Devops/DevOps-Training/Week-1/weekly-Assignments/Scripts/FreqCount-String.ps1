param (
        [string]$inputString = (Read-Host -Prompt "Enter the string")
    )
function frequencyCount {
    param (
        [string]$inputString
    )

    $charCounts = @{}

    foreach ($char in $inputString.ToCharArray()) {

        if ($charCounts.ContainsKey($char)) {
            $charCounts[$char]++
        }
        else {

            $charCounts[$char] = 1
        }
    }

    foreach ($key in $charCounts.Keys) {
        Write-Host "Character '$key' occurs $($charCounts[$key]) times."
    }
}

frequencyCount -inputString $inputString
