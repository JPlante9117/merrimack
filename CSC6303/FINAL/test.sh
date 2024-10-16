#!/bin/bash
echo "Enter the folder to create"
read namedir
if [ -d "$namedir" ]
then
echo "Nothing to do, $namedir exists already"
else
`mkdir $namedir`
echo "Folder $namedir created!"
fi