#!/bin/bash

_dockerDir=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
_tags=$1

export TAGS=$_tags
exec docker compose -p buidler-documentation-prod \
  -f "$_dockerDir/compose.prod.yml" \
  "${@: 2}"
