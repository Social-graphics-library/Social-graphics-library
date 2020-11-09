#!/bin/sh

VERSION=$(jq -r .version package.json);

escape_slashes() {
    sed 's/\//\\\//g'
}

change_line() {
    OLD_LINE_PATTERN=$1; shift
    NEW_LINE=$1; shift
    FILE=$1

    NEW=$(echo "${NEW_LINE}" | escape_slashes)
    sed -i '/'"${OLD_LINE_PATTERN}"'/s/.*/'"${NEW}"'/' "${FILE}"
}


change_line 'private readonly _version: string = '  "	private readonly _version: string = \"${VERSION}\"" ./src/model/info.ts
