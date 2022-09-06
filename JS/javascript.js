//-----------------------------------------------------
//CURTAIN MENU
function openNav() {
	document.getElementById("curtain-nav").style.width = "50%";			
}

function closeNav() {
	document.getElementById("curtain-nav").style.width = "0%";			
}		



//********************************************************************************************
//******************************************************************************************** 











//*******************************************************************************************
//*******************************************************************************************
// JS for js-demo.html page

// BUTTON ONE
let topDevices = [{id: 0, name: "Apple 13inch Macbook Air", type: "Laptop", image_url: "MEDIA/m2macbookair.webp"},
				  {id: 1, name: "HP Intel Iris Xe", type: "Laptop", image_url: "MEDIA/hp.webp"},
				  {id: 2, name: "Lenovo Chromebook", type: "Laptop", image_url: "MEDIA/lenovochromebook.jpeg"},
				  {id: 3, name: "Samsung Galaxy Tab", type: "Tablet", image_url: "MEDIA/samsunggalaxytab.webp"},
				  {id: 4, name: "Apple iPad mini", type: "Tablet", image_url: "MEDIA/appleipadmini.webp"}
				 ];


//Manual slideshow
let manualIndex = 0;
function nextDevice() {
		//Increase the index by 1 if the index <= the length of topMovies array
		//If the index == 4, move back to the first movie: index = 0
		if (manualIndex < topDevices.length - 1 ) {
			manualIndex++;
		} else {
				manualIndex = 0;
		}

		//Extract the name, image_url and display on HTML elements
		//Change title
		document.getElementById("manual-slide-name").innerHTML = topDevices[manualIndex].name;
		document.getElementById("manual-slide-image").src = topDevices[manualIndex].image_url;
}


function previousDevice() {
		//Decrease the index if the index is not 0
		if (manualIndex > 0) {
			manualIndex--;
		} else {
			manualIndex = topMovies.length -1;
		}

		//Extract the title and url and display them on HTML elements
		document.getElementById("manual-slide-name").innerHTML = topDevices[manualIndex].name;
		document.getElementById("manual-slide-image").src = topDevices[manualIndex].image_url;
}


//Automatic Slideshow
let autoIndex = 0;
function autoSlideShow() {
		//Change the autoIndex
		if (autoIndex < topDevices.length - 1 ) {
			autoIndex++;
		} else {
				autoIndex = 0;
		}

		//Extract title and url and display them on HTML Elements
		document.getElementById("auto-slide-name").innerHTML = topDevices[autoIndex].name;
		document.getElementById("auto-slide-image").src = topDevices[autoIndex].image_url;


		//Wait 2 seconds and display next movie
		setTimeout(autoSlideShow, 2000); //Wait 2 seconds
}

//Execute the autoSlideShow() function when loading the website
autoSlideShow();




//---------------------------------------------------------------------------------------------------------
// BUTTON TWO

//WEB PAGE CUSTOMIZATION
//Change text size
function customizeText() {
	let selectedTextSize = document.getElementById("text-size").value;
	document.getElementById("abstract").style.fontSize = selectedTextSize;
	document.getElementById("detailed").style.fontSize = selectedTextSize;
}

//Change background color		
function changeColor() {
	let selectedBGColor = document.getElementById("colorOption").value;
  document.getElementById("page_content").style.backgroundColor = selectedBGColor;
}

//Read More/less function
//function expandText() {
	//Find the expandBtn element on HTML file
	//let expandBtn = document.getElementById("expandBtn");
	
	//Check whether to expand or collapse text based on the text display on the button
	//if (expandBtn.value.toLowerCase() == "more") {
		//document.getElementById("detailed").style.display = "block";
		//expandBtn.value = "LESS";
		//expandBtn.textContent = "LESS";
	//} else {
		//document.getElementById("detailed").style.display = "none";
		//expandBtn.value = "MORE";
		//expandBtn.textContent = "MORE";
	//}	
//}	









//------------------------------------------------------------------------------------------------------------------------
// BUTTON THREE
// Authentication
// Data: assume we have a list of existing users stored in an array "allAccounts"
let allAccounts = [{user: "admin", pass: "1234"}];	

function createAccount() {
	//Get entered data
	let enteredUser = document.getElementById("signup_user").value;
	let enteredPass = document.getElementById("signup_password").value;
	
	//Loop through all users and check if this user exists or not?
	let existing = false;
	for (var i=0; i < allAccounts.length; i++) {
		if (enteredUser == allAccounts[i].user) {
			alert("SORRY! THIS USER ALREADY EXIST!");			
			existing = true;
			break;//quit
		} 
	}
	//Until the end, no existing user
	if (existing == false) {
		//Add a new user
		allAccounts.push({user: enteredUser, pass: enteredPass});	
		alert("CONGRATS! YOUR ACCOUNT IS CREATED");		
	}	
}


function validateAccount() {
	//Get entered data
	let enteredUser = document.getElementById("login_username").value;
	let enteredPass = document.getElementById("login_password").value;
	
	//Loop through all users and check if any matching?
	let valid = false;
	for (var i=0; i < allAccounts.length; i++) {
		if (enteredUser == allAccounts[i].user && enteredPass == allAccounts[i].pass) {
			alert("CONGRATS! YOU ARE LOGED IN!");			
			valid = true;
			break;//quit
		} 
	}
	//Until the end, no user matching.
	if (valid == false) {
		alert("SORRY! WRONG ACCOUNT");	
	}	
}	












//------------------------------------------------------------------------------------------------
// VOTE: LIKE / DISLIKE
// Assume the current votes are 20 likes and 5 dislikes
let currentVotes = {like: 20, dislike: 5};

//Load the current votes to HTML page
document.getElementById("likeNumber").innerHTML = currentVotes.like;
document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;

//Variables to track the clicking status
//RULE: Allow to vote only one: UP or DOWN
let voteStatus = {like: false, dislike: false};

//Click like button
function like() {
			//Check current status of "like" button (has been clicked or not)
			if (voteStatus.like == false) {
				//Increase a "like": Increase the like number by one
				document.getElementById("likeNumber").innerHTML = currentVotes.like + 1;
				//Change the background colour of like button to green
				document.getElementById("likeButton").style.backgroundColor = "green";
				//Change the current status of "like" button: has been clicked
				voteStatus.like = true;//

				//Check "dislike" status - if dislike has been voted down it by one and change status to False
				//and change background colour to white
					if (voteStatus.dislike == true) {
						document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;
						voteStatus.dislike = false;//
						document.getElementById("dislikeButton").style.backgroundColor = "white";
					}
			 } else {
				//Keep the current number of likes
				document.getElementById("likeNumber").innerHTML = currentVotes.like;
				//Change the background colour of like button to white
				document.getElementById("likeButton").style.backgroundColor = "white";
				//Change the current status of "like" like button
				voteStatus.like = false;//has been clicked
			}
	}

	//Click dislike button
	function dislike() {
			//check current status of "dislike" button (has been clicked or not)
			if (voteStatus.dislike == false) {
				//increase a "dislike" by 1
				document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike + 1;
				//Change the background color of dislike button to green
				document.getElementById("dislikeButton").style.backgroundColor = "green";
				//Change the current status of "dislike"
				voteStatus.dislike = true;//has been clicked

				//Check "like" status - if like has been voted, down it by one and change status to False and
				// change background colour to white
				if (voteStatus.like == true) {
						document.getElementById("likeNumber").innerHTML = currentVotes.like;
						voteStatus.like = false;//
						document.getElementById("likeButton").style.backgroundColor = "white";
				}
			} else {
				//Keep the current number of dislikes
				document.getElementById("dislikeNumber").innerHTML = currentVotes.dislike;
				//Change the background colour of like button to white
				document.getElementById("dislikeButton").style.backgroundColor = "white";
				//Change the current status of "like" like button
				voteStatus.dislike = false;//has been clicked
			}
	}






