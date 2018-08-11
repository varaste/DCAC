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
  function myAccFunc() {
            var x = document.getElementById("demoAcc");
            if (x.className.indexOf("w3-show") == -1) {
                x.className += " w3-show";
                x.previousElementSibling.className += " w3-green";
            } else {
                x.className = x.className.replace(" w3-show", "");
                x.previousElementSibling.className =
                    x.previousElementSibling.className.replace(" w3-green", "");
            }
        }

        function myDropFunc() {
            var x = document.getElementById("demoDrop");
            if (x.className.indexOf("w3-show") == -1) {
                x.className += " w3-show";
                x.previousElementSibling.className += " w3-green";
            } else {
                x.className = x.className.replace(" w3-show", "");
                x.previousElementSibling.className =
                    x.previousElementSibling.className.replace(" w3-green", "");
            }
        }

         <script type='text/javascript' src='https://www.geeksforgeeks.org/wp-includes/js/jquery/jquery.js'></script>
    <script type='text/javascript' src='https://www.geeksforgeeks.org/wp-includes/js/jquery/jquery-migrate.min.js'></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>
    <script type='text/javascript' src='https://www.geeksforgeeks.org/wp-content/themes/iconic-one/js/gfg-7.1.js'></script>
    <style type="text/css" id="syntaxhighlighteranchor"></style>
    <script href="E:\Persian-literature-Demo\newGFGjs.js"></script>
    <script src="E:\Persian-literature-Demo\newGFGjs.js"></script>
