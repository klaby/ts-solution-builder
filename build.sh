#!/bin/bash

declare -a sources=(
  "packages/bar" 
  "packages/foo" 
)

for pkg in "${sources[@]}"
do
   (
     cd ./"$pkg" \
     && yarn tsc -b \
     && yarn tsc-alias -f -v
   )
done
