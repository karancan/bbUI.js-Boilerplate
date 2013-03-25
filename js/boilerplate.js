//=============================================================================================
// This file contains the scripts that are specific to this boilerplate application
//=============================================================================================

//*******************************
// storage-localStorage.htm
//*******************************

//The following three functions control what happens the user clicks one of the four pill buttons
		
function showlocalStorageIntro(){
	document.getElementById('ls-intro').style.display = 'block';
	document.getElementById('ls-set').style.display = 'none';
	document.getElementById('ls-get-delete').style.display = 'none';
}
		
function showSet(){
	document.getElementById('ls-intro').style.display = 'none';
	document.getElementById('ls-set').style.display = 'block';
	document.getElementById('ls-get-delete').style.display = 'none';
}

function showGet(){
	document.getElementById('ls-intro').style.display = 'none';
	document.getElementById('ls-set').style.display = 'none';
	document.getElementById('ls-get-delete').style.display = 'block';
	fetchKeyValuePairs();
}

//Check if a key value pair has been provided and then add it to localStorage
function addKeyValuePair(){
	if (document.getElementById('ls-set-key').value == ""){
		alert("You haven't specified a key!");
		return;
	}
	else{
		localStorage.setItem(document.getElementById('ls-set-key').value, document.getElementById('ls-set-value').value);
		alert("Key value pair has been added :)");
		document.getElementById('ls-set-key').value = "";
		document.getElementById('ls-set-value').value = "";
	}
}

//Fetch all the key value pairs available in localStorage and display them on the page
function fetchKeyValuePairs(){
	key_value_containers = document.getElementsByClassName('fetched-key-value-pairs');
	
	//There are two place where we update the list of key value pairs
	for (j=0; j < key_value_containers.length; j++) {
		//Begin by clearing the existing items in the UI
		key_value_containers[j].innerHTML = "";
		
		if (window.localStorage.length < 1){
			empty_row = document.createElement('h5');
			empty_row.innerHTML = "There are no items in localStorage...";
			key_value_containers[j].appendChild(empty_row);
		}
		else{
			//Get all the items in localStorage and display them
			for (i = 0; i < window.localStorage.length; i++) {
				row = document.createElement('div');
				//Create the delete button
				delete_button = document.createElement('span');
				delete_button.innerHTML = "[Delete]";
				delete_button.setAttribute("style", "color: navy;");
				//Using the key attribute so that we know which key to delete when the delete button is pressed
				delete_button.setAttribute("onclick", "deleteKeyValuePair(this.getAttribute('key'))");
				delete_button.setAttribute("key", window.localStorage.key(i));
				row.innerHTML = window.localStorage.key(i) + ":" +  localStorage.getItem(window.localStorage.key(i)) + "<br>" ;
				row.appendChild(delete_button);
				row.setAttribute("style", "background-color: lightgray; border: 2px solid gray; padding: 10px;");
				key_value_containers[j].appendChild(row);
			}
		}
	}
}

//Given a key, delete the key value pair from localStorage
function deleteKeyValuePair(key){
	localStorage.removeItem(key);
	fetchKeyValuePairs();
}

//*******************************
// storage-websql.htm
//*******************************

//The following five functions control what happens the user clicks one of the four pill buttons

function showWebSqlIntro(){
	document.getElementById('ws-intro').style.display = 'block';
	document.getElementById('ws-create').style.display = 'none';
	document.getElementById('ws-insert').style.display = 'none';
	document.getElementById('ws-select').style.display = 'none';
	document.getElementById('ws-delete').style.display = 'none';
}

function showCreate(){
	document.getElementById('ws-intro').style.display = 'none';
	document.getElementById('ws-create').style.display = 'block';
	document.getElementById('ws-insert').style.display = 'none';
	document.getElementById('ws-select').style.display = 'none';
	document.getElementById('ws-delete').style.display = 'none';
}

function showInsert(){
	document.getElementById('ws-intro').style.display = 'none';
	document.getElementById('ws-create').style.display = 'none';
	document.getElementById('ws-insert').style.display = 'block';
	document.getElementById('ws-select').style.display = 'none';
	document.getElementById('ws-delete').style.display = 'none';
}

function showSelect(){
	document.getElementById('ws-intro').style.display = 'none';
	document.getElementById('ws-create').style.display = 'none';
	document.getElementById('ws-insert').style.display = 'none';
	document.getElementById('ws-select').style.display = 'block';
	document.getElementById('ws-delete').style.display = 'none';
}

function showRemove(){
	document.getElementById('ws-intro').style.display = 'none';
	document.getElementById('ws-create').style.display = 'none';
	document.getElementById('ws-insert').style.display = 'none';
	document.getElementById('ws-select').style.display = 'none';
	document.getElementById('ws-delete').style.display = 'block';
}