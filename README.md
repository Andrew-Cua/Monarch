# Monarch!

Monarch is an 3d printer unifier, specifically 3d printers that use octoprint. Ultimately what you see or have seen on the heroku build isn't much... 
3 hours isn't much time at all, so I was only able to get the front end of the dashboard at a presentable state. Originally the printers and printables listed would have been editable, on the backend there was a "JSON Server" that contained data about the printers and objects, however I ran into an issue with it caching request so after the first one, you would just get 304's. So that idea was scrapped and I decided to dedicate the time I had left into making what you can see presentable, although static.


Below will be the design documents that I made in figma, for the most part the dashboard maintains a solid likeness to the original design. 









First up is the dashboard itself, on the side there is simple navigation bar H goes to the dashboard, P goes to a list of printers, and I goes to a list of printables. 

The first row is dedicated to the most recently used printers along important data such as progress (or lack thereof) or possible errors. Ideally hovering over the cards would bring up more data such as bed and hotend temperatures. 

The second row is a 2-column list of the most recently uploaded printables, its pretty bare-bones and the button on the side would bring up a dialog that would prompt the user for what printer to print it on (out of a list of those that are available), along with temperature setpoints. Since the API for octoprint allows uploading files, we wouldn't have to keep track of what printer had what files. We could just send it to wherever. 





## Printer Page








As you can see the printer page would just be a list of the printers in the database. On this page users could also control the printers is a very rudimentary way. (probably just small x,y,z jogs, along with heating setpoints) This is also where users would add extra printers to the database. 






## Printables Page










There isn't a whole lot on this page, it really just servers as a way for users to add more printables (as gcode) into the file system. While octoprint does allow for apps to upload actual stls, I wouldn't want a raspberry pi to be slicing my models. Aside from that there is more information about the printables available on this page, in this case materials usage in meters and the Time 2 Print in hours. 