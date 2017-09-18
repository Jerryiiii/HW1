recipe downEight
|  repeat if steps < 8
   |  down
   |  save steps + 1 as steps
recipe downSeven
|  repeat if steps < 7
   |  down
   |  save steps + 1 as steps
recipe upSeven
|  repeat if steps < 7
   |  up
   |  save steps + 1 as steps
recipe rightTwice
|  right
|  right
downEight
rightTwice
upSeven
rightTwice
downSeven
rightTwice
downSeven
rightTwice
upSeven
rightTwice
downSeven
right
