function myfun() 
{
  var x = document.getElementById("inp");
  
  if (x.type == "password") 
  {
    x.type = "text";
	return false;
  } 
  else
  {
    x.type = "password";
	return false;
  }
}