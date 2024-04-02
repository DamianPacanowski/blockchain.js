if(document.getElementById("net"))
{
	var net = document.getElementById("net").value;
}
else
{
	var net = "1234567890ABCDEFGHIJKLMNOPRSTUWXYVQZabcdefghijklmnoprstuwxyvqz@.=_-+*/!#%|";
}
if(document.getElementById("text"))
{
	var text = document.getElementById("text").value;
}
else
{
	var text = "";
}
if(document.getElementById("type"))
{
	var type = document.getElementById("type").value;
}
else
{
	var type = "0";
}		
var entry = text;
var redirect = "?"
