#!/bin/sh

VERSION=$(jq -r .version package.json);

function escape_slashes {
    sed 's/\//\\\//g'
}

function change_line {
    local OLD_LINE_PATTERN=$1; shift
    local NEW_LINE=$1; shift
    local FILE=$1

    local NEW=$(echo "${NEW_LINE}" | escape_slashes)
    sed -i '/'"${OLD_LINE_PATTERN}"'/s/.*/'"${NEW}"'/' "${FILE}"
}


change_line 'private readonly _version: string = '  "	private readonly _version: string = \"${VERSION}\"" ./src/info.ts
