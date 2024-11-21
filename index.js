
var typeWriterElement = document.getElementById('typewriter');

// The TextArray: 
var textArray = ["Logos.","Packaging.","websites."];

// You can also do this by transfering it through a data-attribute
// var textArray = typeWriterElement.getAttribute('data-array');


// function to generate the backspace effect 
function delWriter(text, i, cb) {
	if (i >= 0 ) {
		typeWriterElement.innerHTML = text.substring(0, i--);
		// generate a random Number to emulate backspace hitting.
 		var rndBack = 10 + Math.random() * 100;
		setTimeout(function() {
			delWriter(text, i, cb);
		},rndBack); 
	} else if (typeof cb == 'function') {
		setTimeout(cb,800);
	}
};

// function to generate the keyhitting effect
function typeWriter(text, i, cb) {
	if ( i < text.length+1 ) {
		typeWriterElement.innerHTML = text.substring(0, i++);
		// generate a random Number to emulate Typing on the Keyboard.
		var rndTyping = 180 - Math.random() * 100;
		setTimeout( function () { 
			typeWriter(text, i++, cb)
		},rndTyping);
	} else if (i === text.length+1) {
		setTimeout( function () {
			delWriter(text, i, cb)
		},1500);
        
	}
};

// the main writer function
function StartWriter(i) {
	if (typeof textArray[i] == "undefined") {
		setTimeout( function () {
			StartWriter(0)
		},500);
	} else if(i < textArray[i].length+5) {
		typeWriter(textArray[i], 0, function () {
			StartWriter(i+1);
		});
	}  
};
// wait one second then start the typewriter
setTimeout( function () {
	StartWriter(0);
},100);


let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");

icon.addEventListener("click", ()=>{

	ul.classList.toggle("showData");
	console.log(ul);
})


let scrollContainer = document.querySelector(".gallery");
let backBtn = document.getElementById ("backBtn");
let nextBtn = document.getElementById ("nextBtn");

scrollContainer.addEventListener("wheel", (evt) => {

	evt.preventDefault();
	scrollContainer.scrollLeft += evt.deltaY;
		scrollContainer.style.scrollBehavior = "auto"
});

backBtn.addEventListener ("click", ()=> {

	scrollContainer.style.scrollBehavior = "smooth"
	scrollContainer.scrollLeft -= 1200;

});

nextBtn.addEventListener ("click", ()=> {

	scrollContainer.scrollLeft += 1200;

});


// mouse section

const curser = document.querySelector(".curser");
const curser2 = document.querySelector(".curser2");

document.addEventListener("mousemove", function (e){

curser.style.cssText = curser2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px; ";


})

