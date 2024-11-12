#!/usr/bin/env bash
# usage: './misc/release/pump-version.sh <major|minor|patch>


TYPE=$1

if [[ $TYPE == "major" ]]; then
  echo 'Pumping a major version'
elif [[ $TYPE == "minor" ]]; then
  echo 'Pumping a minor version'
elif [[ $TYPE == "patch" ]]; then
  echo 'Pumping a patch version'
else
  echo 'Expected <major|minor|patch>'
  exit 1
fi

VERSION_BEFORE=v$(jq -r '.version' package.json)

npm version $TYPE --no-git-tag-version

VERSION_AFTER=v$(jq -r '.version' package.json)

echo "Pumped @immich/ui from $VERSION_BEFORE to $VERSION_AFTER"
echo "IMMICH_VERSION=$VERSION_AFTER" >>"$GITHUB_ENV"
