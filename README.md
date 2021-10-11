# twitter-follower-list


Created by Ákos Nikházy

This script collects all @ handles from a twitter page, but set up so
it works for the follower and follow pages best (eg.: `https://twitter.com/ [username] /followers` )
It discards the first and last three finds as those are your own name and the three "who to follow"
ones.

## How to use it?

Just copy all of this code in the console of your browser, and press enter. You can open the 
console by pressing F12 or CTRL + SHIFT + I key combination.

You will see the console tab, in theory it is selected by default, if not select it. 
	
		Warning: you should only paste code there that you trust. It can be used for an attack. 
		If you understand code, you can see my code does nothing such. 
		But you have to take my word for it, if you are a laymen reading this.

You can change the timer by changing the timeSetup property. Slower internet connection might
need slower scrolling, so the followers / followed people have time to load in.

## The more you know:
	
	These days Twitter hides your padlock followers you do not follow back. So they will be not in
	the list. You can see those on mobile.
  
## Setup

You can change properties of the SETUP object. The comments in twitter-user-list.js will help you with them.
You can change the time it scrolls to load new names, the file name and the selector that represents the names. The later can change based on what Twitter change in the future. I will not update it if I do not use it. It works today (2021. oct. 11.)

# min version

Also you can use the [minified version](https://github.com/akosnikhazy/twitter-follower-list/blob/main/twitter-user-list-min.js). I exposed the setup object though so you can easily modify it.
