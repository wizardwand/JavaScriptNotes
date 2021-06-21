#!/bin/bash
isPresent=$(tail -1 mso-web.log | grep -c "MemCache")
echo $isPresent

if [ "$isPresent" -eq "1" ]; then
  echo "Copy "
  exit 0
else
  echo "Don't copy"
  exit 0
fi


# $1 filename
# $2 search 
# $3 destination
#!/bin/bash
echo "FileName: $1";
echo "Search: $2";
echo "Destination: $3";
isPresent=$(tail -1 $1 | grep -c $2)
echo $isPresent

if [ "$isPresent" -eq "1" ]; then
  $(cp $1 $3)
  echo "Copied "
  exit 0
else
  echo "Don't copy"
  exit 0
fi