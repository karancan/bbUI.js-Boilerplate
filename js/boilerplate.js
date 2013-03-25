//=============================================================================================
// This file contains the scripts that are specific to this boilerplate application
//=============================================================================================

//*******************************
// storage-localStorage.htm
//*******************************

//The following four functions control what happens the user clicks one of the four pill buttons
		
function showIntro(){
	document.getElementById('ls-intro').style.display = 'block';
	document.getElementById('ls-set').style.display = 'none';
	document.getElementById('ls-get').style.display = 'none';
	document.getElementById('ls-delete').style.display = 'none';
}
		
function showSet(){
	document.getElementById('ls-intro').style.display = 'none';
	document.getElementById('ls-set').style.display = 'block';
	document.getElementById('ls-get').style.display = 'none';
	document.getElementById('ls-delete').style.display = 'none';
}

function showGet(){
	document.getElementById('ls-intro').style.display = 'none';
	document.getElementById('ls-set').style.display = 'none';
	document.getElementById('ls-get').style.display = 'block';
	document.getElementById('ls-delete').style.display = 'none';
}
	
function showDelete(){
	document.getElementById('ls-intro').style.display = 'none';
	document.getElementById('ls-set').style.display = 'none';
	document.getElementById('ls-get').style.display = 'none';
	document.getElementById('ls-delete').style.display = 'block';
}