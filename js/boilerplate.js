//=============================================================================================
// This file contains the scripts that are specific to this boilerplate application
//=============================================================================================

//*******************************
// storage-localStorage.htm
//*******************************

//The following four functions control what happens the user clicks one of the four pill buttons
		
function showlocalStorageIntro(){
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