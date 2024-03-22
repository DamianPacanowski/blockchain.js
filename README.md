to start 
# var entry 
and 
# var redirect
simple create a .js file and enter

	var email_entry = document.getElementById("email_from_terms_and_conditions_of_connection").value;	
	if(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(email_entry) !== false)
	{
		var entry = email_entry;
		var redirect = "email="
	}
	else
	{
		document.getElementById("email_from_terms_and_conditions_of_connection").style.border= "1px solid rgb(255,0,0)";
		document.getElementById("email_from_terms_and_conditions_of_connection").style.color= "rgb(255,0,0)";
		document.getElementById("error").style.display= "block";
	}
