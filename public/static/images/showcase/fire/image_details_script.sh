#!/bin/bash

# go over each file in current directory and prepend a 0
# to the beginning of the file if the filename has five one character
for file in *; do
  identify $file 
done
