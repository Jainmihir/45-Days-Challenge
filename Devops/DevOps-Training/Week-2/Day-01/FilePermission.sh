#! /bin/bash

setFilePermissions() {
    local file="$1"
    echo "Setting read and write permissions for file: $file"
    chmod +rw "$file"
}
fileModify="$1"
setFilePermissions "$fileModify"

