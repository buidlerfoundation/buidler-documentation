#!/bin/bash

# _dockerDir=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
# exec TAGS="$1" docker compose \
#   -f "$_dockerDir/compose.prod.yml" \

exec echo "$1"
