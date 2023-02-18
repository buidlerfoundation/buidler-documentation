#!/bin/bash

_dockerDir=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )

# exec docker compose -p buidler-documentation-prod \
#   -f "$_dockerDir/compose.prod.yml" \
#   "$@"
echo "$1"
echo "$_dockerDir"
echo "$_dockerDir/compose.prod.yml"
export TAGS=$1
# docker compose -f "$_dockerDir/compose.prod.yml" up -d
