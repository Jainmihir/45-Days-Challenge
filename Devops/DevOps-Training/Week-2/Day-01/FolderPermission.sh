#! /bin/bash

setFolderPermissions() {
    local file="$1"
    echo "Giving Read Permission To Folder$file"
    chmod +r "$file"
}
folderModify="$1"
setFolderPermissions "$folderModify"

