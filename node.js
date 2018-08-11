function c(val)
{
	document.getElementById("d").value=val;
}
function v(val)
{
	document.getElementById("d").value+=val;
}
function e() 
{ 
	try 
	{ 
	  c(eval(document.getElementById("d").value)) 
	} 
	catch(e) 
	{
	  c('Error') 
	} 
}
function digital_clock()
{
	var date=new Date();
	var hours=date.getHours();
	var minutes=date.getMinutes();
	var seconds=date.getSeconds();
	hours=addZero(hours);
	minutes=addZero(minutes);
	seconds=addZero(seconds);
	document.getElementById('hours').innerHTML = hours;
	document.getElementById('minutes').innerHTML = minutes;
	document.getElementById('seconds').innerHTML = seconds;
	setTimeout('digital_clock()',500);
}
function addZero(date_part)
{
 	if(date_part < 10)
		{
  			date_part="0" + date_part;
                 }
		 return date_part;
}
