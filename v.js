//LOGIN FORM VALIDATION 
function validateLogin() 
{
  let x = document.forms["login"]["username"].value;
  if (x == "") 
  {
    alert("Name must be filled out");
    return false;
  }
  
  let y = document.forms["login"]["password"].value;
  if (y == "") 
  {
    alert("Password must be filled out");
    return false;
  }
}

//SIGNIN FORM VALIDATION
function validateSignin() 
{
  let a = document.forms["signin"]["username"].value;
  if (a == "") 
  {
    alert("Name must be filled out");
    return false;
  }
  
  let b = document.forms["signin"]["password"].value;
  if (b == "") 
  {
    alert("Password must be filled out");
    return false;
  }
  
  let c = document.forms["signin"]["re-enter"].value;
  if (c == "") 
  {
    alert("Re Enter your Password ");
    return false;
  }
  if (b != c) 
  {
    alert("Password must be same..");
    return false;
  }
}


//Bill Calculation 

//Pastry Bill Calculation
 function pastryCal() 
{
  var p1 = document.getElementById("pqty1").value;
  var p2 = document.getElementById("pqty2").value;
  var p3 = document.getElementById("pqty3").value;
  var p4 = document.getElementById("pqty4").value;
  var p5 = document.getElementById("pqty5").value;
  var p6 = document.getElementById("pqty6").value;
  var p7 = document.getElementById("pqty7").value;
  var p8 = document.getElementById("pqty8").value;
  var p9 = document.getElementById("pqty9").value;
  var p10 = document.getElementById("pqty10").value;
  var p11 = document.getElementById("pqty11").value;
  var p12 = document.getElementById("pqty12").value;
  var p13 = document.getElementById("pqty13").value;
  var p14 = document.getElementById("pqty14").value;
  
  var amnt1 = p1*70 + p2*60 +p3*95 + p4*100 + p5*100 + p6*80 + p7*50 + p8*120 +p9*70 + p10*65 + p11*50 + p12*50 + p13*55 + p14*50;
   /* alert("Items Successfully Added ");
  document.getElementById("amnt1").innerHTML = amnt1; */ 
  alert("AMOUNT IS RS." + amnt1);
} 

//Cake Bill Calculation
function cakeCal() 
{
  var c1 = document.getElementById("cqty1").value;
  var c2 = document.getElementById("cqty2").value;
  var c3 = document.getElementById("cqty3").value;
  var c4 = document.getElementById("cqty4").value;
  var c5 = document.getElementById("cqty5").value;
  var c6 = document.getElementById("cqty6").value;
  var c7 = document.getElementById("cqty7").value;
  var c8 = document.getElementById("cqty8").value;
  var c9 = document.getElementById("cqty9").value;
  var c10 = document.getElementById("cqty10").value;
  var c11 = document.getElementById("cqty11").value;
  var c12 = document.getElementById("cqty12").value;
  
  var amnt2 = c1*70 + c2*80 +c3*95 + c4*100 + c5*100 + c6*80 + c7*150 + c8*100 +c9*70 + c10*65 + c11*50 + c12*85;
  /* alert("Items Successfully Added ");
  document.getElementById("amnt1").innerHTML = amnt2; */
  alert("AMOUNT IS RS." + amnt2);  
}

//Burger Bill Calculation
function burgerCal() 
{
  var br1 = document.getElementById("brqty1").value;
  var br2 = document.getElementById("brqty2").value;
  var br3 = document.getElementById("brqty3").value;
  var br4 = document.getElementById("brqty4").value;
  var br5 = document.getElementById("brqty5").value;
  
  var amnt3 = br1*270 + br2*280 +br3*265 + br4*240 + br5*200 ;
  /* alert("Items Successfully Added ");
  document.getElementById("amnt1").innerHTML = amnt3; */
  alert("AMOUNT IS RS." + amnt3); 
}

//Beverages Bill Calculation
function bevCal() 
{
  var b1 = document.getElementById("bqty1").value;
  var b2 = document.getElementById("bqty2").value;
  var b3 = document.getElementById("bqty3").value;
  var b4 = document.getElementById("bqty4").value;
  
  var amnt4 = b1*200 + b2*80 +b3*120 + b4*200;
   /* alert("Items Successfully Added ");
  document.getElementById("amnt4").innerHTML = amnt4; */ 
  alert("AMOUNT IS RS." + amnt4);  
}

//Candy Bill Calculation
function candyCal()
{
 var cn1 = document.getElementById("cnqty1").value;
 var cn2 = document.getElementById("cnqty2").value;
 var cn3 = document.getElementById("cnqty3").value;
 var cn4 = document.getElementById("cnqty4").value;
 var cn5 = document.getElementById("cnqty5").value;
 var cn6 = document.getElementById("cnqty6").value;
 var cn7 = document.getElementById("cnqty7").value;
 var cn8 = document.getElementById("cnqty8").value;
 var cn9 = document.getElementById("cnqty9").value;
 var cn10 = document.getElementById("cnqty10").value;
 var cn11 = document.getElementById("cnqty11").value;
 var cn12 = document.getElementById("cnqty12").value;
 var cn13 = document.getElementById("cnqty13").value;
 var cn14 = document.getElementById("cnqty14").value;
 var cn15 = document.getElementById("cnqty15").value;
 
 var amnt5 = cn1*100 + cn2*10 +cn3*15 + cn4*90 + cn5*20 + cn6*80 +cn7*150 + cn8*100 +cn9*70 + cn10*150 + cn11*300 + cn12*85 + cn13*200 + cn14*85 + cn15*50;
 /* alert("Items Successfully Added ");
 cnocument.getElementByIcn("amnt5").innerHTML = amnt5; */
 alert("AMOUNT IS RS." + amnt5);
}

//Desserts Bill Calculation
function dessertsCal() 
{
 var d1 = document.getElementById("dqty1").value;
 var d2 = document.getElementById("dqty2").value;
 var d3 = document.getElementById("dqty3").value;
 var d4 = document.getElementById("dqty4").value;
 var d5 = document.getElementById("dqty5").value;
 var d6 = document.getElementById("dqty6").value;
 var d7 = document.getElementById("dqty7").value;
 var d8 = document.getElementById("dqty8").value;
 var d9 = document.getElementById("dqty9").value;
 var d10 = document.getElementById("dqty10").value;
 var d11 = document.getElementById("dqty11").value;
 var d12 = document.getElementById("dqty12").value;
 

 var amnt6 = d1*200 + d2*200 +d3*150 + d4*90 + d5*200 + d6*100 + d7*150 + d8*100 +d9*70 + d10*80 + d11*100 + d12*75;
 /* alert("Items Successfully Added ");
 document.getElementById("amnt6").innerHTML = amnt6; */
 alert("AMOUNT IS RS." + amnt6);
}



//Total Bill Calculation
function totalBillCal()
{
	var tot = amnt1 + amnt2 + amnt3 + amnt4 + amnt5 + amnt6;
	/* document.getElementById("tot").innerHTML = tot; */	
	alert("Total Bill Amount ---->> Rs." +tot );
}

function validateOrder() 
{
  let p = document.forms["amnt"][""].value;
  if (x == "") 
  {
    alert("Name must be filled out");
    return false;
  }
  
  let y = document.forms["login"]["password"].value;
  if (y == "") 
  {
    alert("Password must be filled out");
    return false;
  }
}
