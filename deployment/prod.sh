#!/bin/bash

_dockerDir=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
_tags=$1


exec TAGS=$_tags docker compose \
  -f "$_dockerDir/compose.prod.yml" \
  "$@"