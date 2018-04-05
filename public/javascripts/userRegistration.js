(function(){ // self executing function
	//alert(1);
	var registerBtn = document.getElementById('registerBtn');
	registerBtn.addEventListener('click',function(e){
		// validate the form input and select elements
		
		document.forms[0].submit(); // will post the form elements to server based on the name attributes
		 
		e.preventDefault();
		
	
	});
	



})();
