recipe colorUD
|  if getColor is blue
   |  down
   |  down
   |  down
   else
   |  up
   |  up
   |  up
recipe colorLR
|  if getColor is blue
   |  right
   else
   |  left
recipe colorOneStep
| if getColor is blue 
  | down
  else
  |up
right
save getColor as firstColorSeen
colorUD
colorLR
setColor remember firstColorSeen
colorOneStep
