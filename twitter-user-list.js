/*
*	Created by Ákos Nikházy
*	
*	This script collects all @ handles from a twitter page, but set up so
*	it works for the follower and follow pages best (eg.: https://twitter.com/ [username] /followers )
*	It discards the first and last three finds as those are your own name and the three "who to follow"
*	ones.
*	
*	How to use it?
*	
*		Just copy all of this code in the console of your browser, and press enter. You can open the 
*		console by pressing F12 or CTRL + SHIFT + I key combination.
*	
*		You will see the console tab, in theory it is selected by default, if not select it. 
*		
*			Warning: you should only paste code there that you trust. It can be used for an attack. 
*			If you understand code, you can see my code does nothing such. 
*			But you have to take my word for it, if you are a laymen reading this.
*
*		You can change the timer by changing the timeSetup property. Slower internet connection might
*		need slower scrolling, so the followers / followed people have time to load in.
*
*	The more you know:
*		
*		These days Twitter hides your padlock followers you do not follow back. So they will be not in
*		the list. You can see those on mobil.
*
*/


/* 
* SETUP 
*/

const SETUP = {
	// the timer
	timeSetup:1000, // in milliseconds. It will scroll down to load more followers in every second by default.

	// file name
	fileName:'twitter-names.txt',

	// the selector
	// if Twitter changes this, you have to find what selector keeps the names.
	selector:'div.css-901oao.css-bfa6kz.r-9ilb82.r-18u37iz.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-qvutc0'
};			

clear();
console.info('%cSTARTING - lay back and wait until it finishes. The script will try and collect all the names from the page and download it as a txt file. It scrolls in every ' + Number.parseFloat(SETUP.timeSetup/1000).toPrecision(2) + ' seconds. You can change this by changeing the timeSetup variable. Slower internet connection might need a slower scroll.',"color:green");	
var collection = [],tags,item,lastOne,lastNow,aTag;	
let collect = setInterval(() => {
	
	tags = document.querySelectorAll(SETUP.selector);
	
	lastOne = tags[tags.length-4].outerText // the last name in the list we are checking righ now, we need this so we can stop if there is no new last one
	
	for(i = 1; i< tags.length-3; i++)
	{ // the first one is you, from your profile selector, the last 3 is the "who to follow" part of the page
	  // if twitter changes layout you might want to change the numbers.
		
		item = tags[i].outerText;
		
		if(collection.includes(item)) continue;
		
		collection.push(item);
		
	}
	
	if(lastOne != lastNow) 
	{ // reset the cycle, let twitter load more followers
		lastNow = lastOne;
		window.scrollBy(0,window.innerHeight);	
	} 
	else
	{ // we are at the bottom, presumably we have the list
		console.log('%cSUCCESS: collecting names done - creating file','color:green');
		
		clearInterval(collect);
		
		
		aTag = document.createElement("a");
		aTag.href = window.URL.createObjectURL(new Blob([collection.join("\r\n")], {type: 'text/txt'}));
		aTag.download = SETUP.fileName;
		
		aTag.click();
		
		
		console.log('%cSUCCESS: file created','color:green');
		console.log('Raw output: ');
		console.log(collection);
		
		
	}
	
}, SETUP.timeSetup);