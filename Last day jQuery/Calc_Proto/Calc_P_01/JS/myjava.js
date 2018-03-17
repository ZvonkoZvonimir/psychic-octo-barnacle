var result = document.getElementById('result');
var display = document.getElementById('display');
var bool = false;
var operator = false;



function btn_00() {
	if (bool == true) {result.innerHTML = ""; display.innerHTML = "";}

	
	if (result.innerHTML == "0" && display.innerHTML == "0" || result.innerHTML == "Infinity") 
		{
			result.innerHTML = "0";
			display.innerHTML = "0";
		}

		else if (result.innerHTML == "0" &&(display.innerHTML.slice(-1) == "/" ||
		display.innerHTML.slice(-1) == "*" ||
		display.innerHTML.slice(-1) == "-" ||
		display.innerHTML.slice(-1) == "+"))
		{
			display.innerHTML += "0";
			bool = false;
			operator = false;
		}

	else if (result.innerHTML == "0") 
	{
		result.innerHTML = "0";
		bool = false;
		operator = false;
	} 
	else 
	{	
	

	if (result.innerHTML == "+" || result.innerHTML == "-" ||
		result.innerHTML == "/" || result.innerHTML == "*" )
			{
				result.innerHTML = "";
			}

	display.innerHTML += "0";
	result.innerHTML += "0";
	bool = false;
	operator = false;}
}

function btn_01() 
{
	if (bool == true) {result.innerHTML = "";  display.innerHTML = "";}

	if (result.innerHTML == "0" && display.innerHTML == "0" || result.innerHTML == "Infinity") 
		{
			result.innerHTML = "1";
			display.innerHTML = "1";
		}

		else if (result.innerHTML == "0" &&(display.innerHTML.slice(-1) == "/" ||
		display.innerHTML.slice(-1) == "*" ||
		display.innerHTML.slice(-1) == "-" ||
		display.innerHTML.slice(-1) == "+"))
		{
			result.innerHTML =	result.innerHTML.slice(0, -1);

			if (result.innerHTML == "+" || result.innerHTML == "-" ||
			result.innerHTML == "/" || result.innerHTML == "*" )
			{
			result.innerHTML = "";
			}
			
			display.innerHTML += "1";
			result.innerHTML += "1";
			bool = false;
			operator = false;
		}

	else if (result.innerHTML == "0") 
	{
		display.innerHTML =	display.innerHTML.slice(0, -1);
		result.innerHTML =	result.innerHTML.slice(0, -1);

		if (result.innerHTML == "+" || result.innerHTML == "-" ||
		result.innerHTML == "/" || result.innerHTML == "*" )
		{
		result.innerHTML = "";
		}
		
		display.innerHTML += "1";
		result.innerHTML += "1";
		bool = false;
		operator = false;
	}
	else
	{
	
		if (result.innerHTML == "+" || result.innerHTML == "-" ||
			result.innerHTML == "/" || result.innerHTML == "*" )
		{
			result.innerHTML = "";
		}
		
		display.innerHTML += "1";
		result.innerHTML += "1";
		bool = false;
		operator = false;
	}
}

function equal() {
	
	display.innerHTML = (eval(display.innerHTML)).toFixed(2);
	result.innerHTML = (eval(display.innerHTML)).toFixed(2);
	// display.innerHTML = "";
	bool = true;
}

function plus() {
	if (result.innerHTML == "+" || result.innerHTML == "-" ||
		result.innerHTML == "/" || result.innerHTML == "*")
		{
			display.innerHTML =	display.innerHTML.slice(0, -1);
			display.innerHTML += "+";
			result.innerHTML = "+";
		}

	if(display.innerHTML.slice(-1) != "/" &&
		display.innerHTML.slice(-1) != "*" &&
		display.innerHTML.slice(-1) != "-" &&
		display.innerHTML.slice(-1) != "+" &&
		 result.innerHTML != ".")
	{
		if (result.innerHTML.length == 0)
		 {}
		else
		{
			display.innerHTML += "+";
			result.innerHTML = "+";
			
			bool = false;
			operator = true;
		}
	}
}

function minus() {
	if (result.innerHTML == "+" || result.innerHTML == "-" ||
		result.innerHTML == "/" || result.innerHTML == "*")
		{
			display.innerHTML =	display.innerHTML.slice(0, -1);
			display.innerHTML += "-";
			result.innerHTML = "-";
		}

	if(display.innerHTML.slice(-1) != "/" &&
		display.innerHTML.slice(-1) != "*" &&
		display.innerHTML.slice(-1) != "-" &&
		display.innerHTML.slice(-1) != "+" &&
		 result.innerHTML != ".")
	{
		if (result.innerHTML.length == 0)
		 {}
		else
		{
			display.innerHTML += "-";
			result.innerHTML = "-";
			
			bool = false;
			operator = true;
		}
	}
}

function multiply () {
	if (result.innerHTML == "+" || result.innerHTML == "-" ||
		result.innerHTML == "/" || result.innerHTML == "*")
		{
			display.innerHTML =	display.innerHTML.slice(0, -1);
			display.innerHTML += "*";
			result.innerHTML = "*";
		}

	if(display.innerHTML.slice(-1) != "/" &&
		display.innerHTML.slice(-1) != "*" &&
		display.innerHTML.slice(-1) != "-" &&
		display.innerHTML.slice(-1) != "+" &&
		 result.innerHTML != ".")
	{
		if (result.innerHTML.length == 0)
		 {}
		else
		{
			display.innerHTML += "*";
			result.innerHTML = "*";
			
			bool = false;
			operator = true;
		}
	}
}

function divide () {
	if (result.innerHTML == "+" || result.innerHTML == "-" ||
		result.innerHTML == "/" || result.innerHTML == "*")
		{
			display.innerHTML =	display.innerHTML.slice(0, -1);
			display.innerHTML += "/";
			result.innerHTML = "/";
		}

	if(display.innerHTML.slice(-1) != "/" &&
		display.innerHTML.slice(-1) != "*" &&
		display.innerHTML.slice(-1) != "-" &&
		display.innerHTML.slice(-1) != "+" &&
		 result.innerHTML != ".")
	{
		if (result.innerHTML.length == 0)
		 {}
		else
		{
			display.innerHTML += "/";
			result.innerHTML = "/";
			
			bool = false;
			operator = true;
		}
	}
}

// dovrsi toa ifovite
function erase () 
{
	if(bool == false && operator == false)
	{
			if(result.innerHTML.length == 1 && result.innerHTML != "0" 
				&& result.innerHTML != "/" && result.innerHTML != "*"
				&& result.innerHTML != "+" && result.innerHTML != "-")
			{
				result.innerHTML = "0";
				display.innerHTML =	display.innerHTML.slice(0, -1);
			}
			else if(display.innerHTML.slice(0, -1) == "." && result.innerHTML.slice(0, -1) == ".")
			{
				display.innerHTML =	display.innerHTML.slice(0, -1);
				result.innerHTML =	result.innerHTML.slice(0, -1);
			}
			else if (result.innerHTML == "0" && display.innerHTML.slice(-1) == "0")
			{
				display.innerHTML =	display.innerHTML.slice(0, -1);
			}

			if (result.innerHTML.length > 1  ) 
			{		
				display.innerHTML =	display.innerHTML.slice(0, -1);
				result.innerHTML =	result.innerHTML.slice(0, -1);
			}
			// voa e novo vo ver 11
			if (display.innerHTML.length == 0  ) 
			{		
				display.innerHTML =	"0";
			}

	}
}

function clear_all() {
	
	display.innerHTML = "0";
	result.innerHTML = "0";
	bool = false;
}

function clear_result() {

	if (result.innerHTML == "/" || result.innerHTML == "*" || result.innerHTML == "+" || result.innerHTML == "-")
	{
		display.innerHTML =	display.innerHTML.slice(0, -1);
		result.innerHTML = "0";
		bool = false;
	}
	
	else if(result.innerHTML == "0")
	{
		result.innerHTML = "0";
		bool = false;
	}
	else
	{
		for (var i = 0; i < result.innerHTML.length ; i++) {
			display.innerHTML =	display.innerHTML.slice(0, -1);
		}

		result.innerHTML = "0";
		bool = false;
	}

	if (display.innerHTML.length == 0  ) 
	{		
		display.innerHTML =	"0";
	}

}

function dot() {

	// if (result.innerHTML == "+" || result.innerHTML == "-" ||
	// 	result.innerHTML == "/" || result.innerHTML == "*" )
	// 	{
	// 		result.innerHTML = "";
	// 	}


	if(result.innerHTML.includes(".") )
	{}
	// Novo vo ver 11
	else if (result.innerHTML == "0" && (display.innerHTML.slice(-1) == "/" || display.innerHTML.slice(-1) == "*" || display.innerHTML.slice(-1) == "-" || display.innerHTML.slice(-1) == "+"))
	{
		display.innerHTML += "0";
		display.innerHTML += ".";
		result.innerHTML += ".";
		bool = false;
	}
	else if((result.innerHTML == "/" && display.innerHTML.slice(-1) == "/") || (result.innerHTML == "*" && display.innerHTML.slice(-1) == "*") ||(result.innerHTML == "-" && display.innerHTML.slice(-1) == "-") ||(result.innerHTML == "+" && display.innerHTML.slice(-1) == "+"))
	{	
		result.innerHTML = "";
		display.innerHTML += "0";
		result.innerHTML += "0";
		display.innerHTML += ".";
		result.innerHTML += ".";
		bool = false;
	}	
	else
	{
		display.innerHTML += ".";
		result.innerHTML += ".";
		bool = false;
	}
}
function operator_sign() {
	var value = this.getAttribute("data-id")

	if (result.innerHTML == "+" || result.innerHTML == "-" ||
		result.innerHTML == "/" || result.innerHTML == "*")
		{
			display.innerHTML =	display.innerHTML.slice(0, -1);
			display.innerHTML += value;
			result.innerHTML = value;
		}

	if(display.innerHTML.slice(-1) != "/" &&
		display.innerHTML.slice(-1) != "*" &&
		display.innerHTML.slice(-1) != "-" &&
		display.innerHTML.slice(-1) != "+" &&
		 result.innerHTML != ".")
	{
		if (result.innerHTML.length == 0)
		 {}
		else
		{
			display.innerHTML += value;
			result.innerHTML = value;
			
			bool = false;
			operator = true;
		}
	}
}

function btn_num() {
	var value = this.getAttribute("data-id")
	// var value = this.getAttribute("value")
	// result.innerHTML += value;

	if (bool == true) {result.innerHTML = "";  display.innerHTML = "";}

	if (result.innerHTML == "0" && display.innerHTML == "0" || result.innerHTML == "Infinity") 
		{
			result.innerHTML = value;
			display.innerHTML = value;
		}

		else if (result.innerHTML == "0" &&(display.innerHTML.slice(-1) == "/" ||
		display.innerHTML.slice(-1) == "*" ||
		display.innerHTML.slice(-1) == "-" ||
		display.innerHTML.slice(-1) == "+"))
		{
			result.innerHTML =	result.innerHTML.slice(0, -1);

			if (result.innerHTML == "+" || result.innerHTML == "-" ||
			result.innerHTML == "/" || result.innerHTML == "*" )
			{
			result.innerHTML = "";
			}
			
			display.innerHTML += value;
			result.innerHTML += value;
			bool = false;
			operator = false;
		}

	else if (result.innerHTML == "0") 
	{
		display.innerHTML =	display.innerHTML.slice(0, -1);
		result.innerHTML =	result.innerHTML.slice(0, -1);

		if (result.innerHTML == "+" || result.innerHTML == "-" ||
		result.innerHTML == "/" || result.innerHTML == "*" )
		{
		result.innerHTML = "";
		}
		
		display.innerHTML += value;
		result.innerHTML += value;
		bool = false;
		operator = false;
	}
	else
	{
	
		if (result.innerHTML == "+" || result.innerHTML == "-" ||
			result.innerHTML == "/" || result.innerHTML == "*" )
		{
			result.innerHTML = "";
		}
		
		display.innerHTML += value;
		result.innerHTML += value;
		bool = false;
		operator = false;
	}
}

function btn_num_key() {

	var value = this.getAttribute("data-id")

	if(keyName > 0)
	{
		value = keyName;
	}

	// var value = this.getAttribute("value")
	// result.innerHTML += value;

	if (bool == true) {result.innerHTML = "";  display.innerHTML = "";}

	if (result.innerHTML == "0" && display.innerHTML == "0" || result.innerHTML == "Infinity") 
		{
			result.innerHTML = value;
			display.innerHTML = value;
		}

		else if (result.innerHTML == "0" &&(display.innerHTML.slice(-1) == "/" ||
		display.innerHTML.slice(-1) == "*" ||
		display.innerHTML.slice(-1) == "-" ||
		display.innerHTML.slice(-1) == "+"))
		{
			result.innerHTML =	result.innerHTML.slice(0, -1);

			if (result.innerHTML == "+" || result.innerHTML == "-" ||
			result.innerHTML == "/" || result.innerHTML == "*" )
			{
			result.innerHTML = "";
			}
			
			display.innerHTML += value;
			result.innerHTML += value;
			bool = false;
			operator = false;
		}

	else if (result.innerHTML == "0") 
	{
		display.innerHTML =	display.innerHTML.slice(0, -1);
		result.innerHTML =	result.innerHTML.slice(0, -1);

		if (result.innerHTML == "+" || result.innerHTML == "-" ||
		result.innerHTML == "/" || result.innerHTML == "*" )
		{
		result.innerHTML = "";
		}
		
		display.innerHTML += value;
		result.innerHTML += value;
		bool = false;
		operator = false;
	}
	else
	{
	
		if (result.innerHTML == "+" || result.innerHTML == "-" ||
			result.innerHTML == "/" || result.innerHTML == "*" )
		{
			result.innerHTML = "";
		}
		
		display.innerHTML += value;
		result.innerHTML += value;
		bool = false;
		operator = false;
	}
}
//==================================================================================
// document.getElementsByClassName("my_button")[0].addEventListener("click", butonClicked);
//==================================================================================
var proto_btn = document.getElementsByClassName("num_sign");
// proto_btn.addEventListener("click", hmm);

 for(var i = 0; i < proto_btn.length; i++){
	 proto_btn[i].addEventListener("click", btn_num_key);
 }
//==================================================================================
var operator_btn = document.getElementsByClassName("operator_sign");


 for(var i = 0; i < operator_btn.length; i++){
	 operator_btn[i].addEventListener("click", operator_sign);
 }
//==================================================================================
// var myButton0 = document.getElementById("btn_00");
// myButton0.addEventListener("click", hmm);
// // myButton0.addEventListener("click", btn_00);

// var myButton1 = document.getElementById("btn_01");
// myButton1.addEventListener("click", hmm);

// var myButton2 = document.getElementById("btn_02");
// myButton2.addEventListener("click", hmm);

// var myButton3 = document.getElementById("btn_03");
// myButton3.addEventListener("click", hmm);

// var myButton4 = document.getElementById("btn_04");
// myButton4.addEventListener("click", hmm);

// var myButton5 = document.getElementById("btn_05");
// myButton5.addEventListener("click", hmm);

// var myButton6 = document.getElementById("btn_06");
// myButton6.addEventListener("click", hmm);

// var myButton7 = document.getElementById("btn_07");
// myButton7.addEventListener("click", hmm);

// var myButton8 = document.getElementById("btn_08");
// myButton8.addEventListener("click", hmm);

// var myButton9 = document.getElementById("btn_09");
// myButton9.addEventListener("click", hmm);

var my_equal = document.getElementById("equal");
my_equal.addEventListener("click", equal);

var my_plus = document.getElementById("plus");
my_plus.addEventListener("click", plus);

var my_minus = document.getElementById("minus");
my_minus.addEventListener("click", minus);

var my_multy = document.getElementById("multiply");
my_multy.addEventListener("click", multiply);

var my_divide = document.getElementById("divide");
my_divide.addEventListener("click", divide);

var eraser = document.getElementById("erase");
eraser.addEventListener("click", erase);

var myClear_all = document.getElementById("clear_all");
myClear_all.addEventListener("click", clear_all);

var myClear_result = document.getElementById("clear_result");
myClear_result.addEventListener("click", clear_result);

var myDot = document.getElementById("dot");
myDot.addEventListener("click", dot);


//==========================================================================================

// var erase = document.getElementById("erase");
// function change_hover_style()
// {	
// 			erase.style.color = "#ffb056"
// 			erase.style.color = "blue";
// 			erase.style.fontSize = "30px";
// }
// document.createStyleSheet().addRule('#btn_09:hover', 'background:#000000;');

  // var test = document.getElementById("btn_09");
  
  // this handler will be executed only once when the cursor moves over the unordered list
  // test.addEventListener('keydown', function( 'btn_09' ) {

  // // document.addEventListener('keydown', function( event ) {
   
  //   // highlight the mouseenter target
  //   event.target.style.color = "purple";

  //   // reset the color after a short delay
  //   setTimeout(function() {
  //     event.target.style.color = "";
  //   }, 500);
  // }, false);


//   var myVar = setInterval(myTimer, 2000);

// function myTimer() {
//     var d = new Date();
//     document.getElementById("demo").innerHTML = d.toLocaleTimeString();
// }


//==================================================================================

function hover_style_btn_00()
{	
	document.getElementById("btn_00").style.color = "#23ff23";
      document.getElementById("btn_00").style.border = "3px dashed #23ff23";
      setTimeout(function() {
      document.getElementById("btn_00").style.color = "#66aa6d";
      document.getElementById("btn_00").style.border = "1px solid #66aa6d";
    }, 150);
}
function hover_style_btn_01()
{	
	document.getElementById("btn_01").style.color = "#23ff23";
      document.getElementById("btn_01").style.border = "3px dashed #23ff23";
      setTimeout(function() {
      document.getElementById("btn_01").style.color = "#66aa6d";
      document.getElementById("btn_01").style.border = "1px solid #66aa6d";
    }, 150);
}
function hover_style_btn_02()
{	
	document.getElementById("btn_02").style.color = "#23ff23";
      document.getElementById("btn_02").style.border = "3px dashed #23ff23";
      setTimeout(function() {
      document.getElementById("btn_02").style.color = "#66aa6d";
      document.getElementById("btn_02").style.border = "1px solid #66aa6d";
    }, 150);
}
function hover_style_btn_03()
{	
	document.getElementById("btn_03").style.color = "#23ff23";
      document.getElementById("btn_03").style.border = "3px dashed #23ff23";
      setTimeout(function() {
      document.getElementById("btn_03").style.color = "#66aa6d";
      document.getElementById("btn_03").style.border = "1px solid #66aa6d";
    }, 150);
}
function hover_style_btn_04()
{	
	document.getElementById("btn_04").style.color = "#23ff23";
      document.getElementById("btn_04").style.border = "3px dashed #23ff23";
      setTimeout(function() {
      document.getElementById("btn_04").style.color = "#66aa6d";
      document.getElementById("btn_04").style.border = "1px solid #66aa6d";
    }, 150);
}
function hover_style_btn_05()
{	
	document.getElementById("btn_05").style.color = "#23ff23";
      document.getElementById("btn_05").style.border = "3px dashed #23ff23";
      setTimeout(function() {
      document.getElementById("btn_05").style.color = "#66aa6d";
      document.getElementById("btn_05").style.border = "1px solid #66aa6d";
    }, 150);
}
function hover_style_btn_06()
{	
	document.getElementById("btn_06").style.color = "#23ff23";
      document.getElementById("btn_06").style.border = "3px dashed #23ff23";
      setTimeout(function() {
      document.getElementById("btn_06").style.color = "#66aa6d";
      document.getElementById("btn_06").style.border = "1px solid #66aa6d";
    }, 150);
}
function hover_style_btn_07()
{	
	document.getElementById("btn_07").style.color = "#23ff23";
      document.getElementById("btn_07").style.border = "3px dashed #23ff23";
      setTimeout(function() {
      document.getElementById("btn_07").style.color = "#66aa6d";
      document.getElementById("btn_07").style.border = "1px solid #66aa6d";
    }, 150);
}
function hover_style_btn_08()
{	
	document.getElementById("btn_08").style.color = "#23ff23";
      document.getElementById("btn_08").style.border = "3px dashed #23ff23";
      setTimeout(function() {
      document.getElementById("btn_08").style.color = "#66aa6d";
      document.getElementById("btn_08").style.border = "1px solid #66aa6d";
    }, 150);
}
function hover_style_btn_09()
{	
	document.getElementById("btn_09").style.color = "#23ff23";
      document.getElementById("btn_09").style.border = "3px dashed #23ff23";
      setTimeout(function() {
      document.getElementById("btn_09").style.color = "#66aa6d";
      document.getElementById("btn_09").style.border = "1px solid #66aa6d";
    }, 150);
}

function hover_style_plus()
{	
	document.getElementById("plus").style.color = "#2de3ff";
      document.getElementById("plus").style.border = "3px dashed #2de3ff";
      setTimeout(function() {
      document.getElementById("plus").style.color = "#66aa6d";
      document.getElementById("plus").style.border = "1px solid #66aa6d";
    }, 150);
}

function hover_style_minus()
{	
	document.getElementById("minus").style.color = "#ffb056";
      document.getElementById("minus").style.border = "3px dashed #ffb056";
      setTimeout(function() {
      document.getElementById("minus").style.color = "#66aa6d";
      document.getElementById("minus").style.border = "1px solid #66aa6d";
    }, 150);
}
function hover_style_divide()
{	
	document.getElementById("divide").style.color = "#cfff56";
      document.getElementById("divide").style.border = "3px dashed #cfff56";
      setTimeout(function() {
      document.getElementById("divide").style.color = "#66aa6d";
      document.getElementById("divide").style.border = "1px solid #66aa6d";
    }, 150);
}
function hover_style_multiply()
{	
	document.getElementById("multiply").style.color = "#2de3ff";
      document.getElementById("multiply").style.border = "3px dashed #2de3ff";
      setTimeout(function() {
      document.getElementById("multiply").style.color = "#66aa6d";
      document.getElementById("multiply").style.border = "1px solid #66aa6d";
    }, 150);
}
function hover_style_equal()
{	
	document.getElementById("equal").style.color = "#fc7aff";
      document.getElementById("equal").style.border = "3px dashed #fc7aff";
      setTimeout(function() {
      document.getElementById("equal").style.color = "#66aa6d";
      document.getElementById("equal").style.border = "1px solid #66aa6d";
    }, 150);
}
function hover_style_erase()
{	
	document.getElementById("erase").style.color = "#ffb056";
      document.getElementById("erase").style.border = "3px dashed #ffb056";
      setTimeout(function() {
      document.getElementById("erase").style.color = "#66aa6d";
      document.getElementById("erase").style.border = "1px solid #66aa6d";
    }, 150);
}
function hover_style_dot()
{	
	document.getElementById("dot").style.color = "#cfff56";
      document.getElementById("dot").style.border = "3px dashed #cfff56";
      setTimeout(function() {
      document.getElementById("dot").style.color = "#66aa6d";
      document.getElementById("dot").style.border = "1px solid #66aa6d";
    }, 150);
}
function hover_style_clear_all()
{	
	document.getElementById("clear_all").style.color = "#ff7f85";
      document.getElementById("clear_all").style.border = "3px dashed #ff7f85";
      setTimeout(function() {
      document.getElementById("clear_all").style.color = "#66aa6d";
      document.getElementById("clear_all").style.border = "1px solid #66aa6d";
    }, 150);
}
function hover_style_clear_result()
{	
	document.getElementById("clear_result").style.color = "#7f85ff";
      document.getElementById("clear_result").style.border = "3px dashed #7f85ff";
      setTimeout(function() {
      document.getElementById("clear_result").style.color = "#66aa6d";
      document.getElementById("clear_result").style.border = "1px solid #66aa6d";
    }, 150);
}




//===================================================================================


 // document.addEventListener('keypress', (event) => {
 document.addEventListener('keydown', (event) => {
  const keyName = event.key;
if(keyName==0) 
{
      btn_00();
      hover_style_btn_02();
}  
if(keyName==1) 
{
      btn_01();
      hover_style_btn_02();
}
if(keyName==2) 
{
      btn_02();
      hover_style_btn_02();
}
if(keyName==3) 
{
      btn_03();
      hover_style_btn_03();
}
if(keyName==4) 
{
      btn_04();
      hover_style_btn_04();
}
if(keyName==5) 
{
      btn_05();
      hover_style_btn_05();
}
if(keyName==6) 
{
      btn_06();
      hover_style_btn_06();
}
if(keyName==7) 
{
      btn_07();
      hover_style_btn_07();
}
if(keyName==8) 
{
      btn_08();
      hover_style_btn_08();
}
if(keyName==9) 
{
    btn_09();
    hover_style_btn_09();
}
if(keyName== "+") 
{
    plus();
    hover_style_plus();
}
if(keyName== "-") 
{
    minus();
    hover_style_minus();
}
if(keyName== "*") 
{
    multiply();
    hover_style_multiply();
}
if(keyName== "/") 
{
    divide();
    hover_style_divide();
}
if(keyName== "=") 
{
	hover_style_equal();
    equal();
}
if(keyName== "Enter") 
{
	hover_style_equal();
    equal();
}
if(keyName== "Backspace") 
{
    erase();
    hover_style_erase();
}
if(keyName== ".") 
{
    dot();
    hover_style_dot();
}
if(keyName== "Escape") 
{
    clear_all();
    hover_style_clear_all();
}
if(keyName== "Delete") 
{
    clear_result();
    hover_style_clear_result();
}



});

//==================================================================================
 
// var str = display.innerHTML;
// var lastLetter = display.innerHTML.slice(-1);
// var lastLetter = str[str.length - 1];

function last_Letter() {
	alert(display.innerHTML.slice(-1));
}

var myn_a = document.getElementById("n_a");
myn_a.addEventListener("click", last_Letter);

// erasot da strava nula ako nema nisto (done ! probably)
// erasot da ostava nula vo display (koa go brise posledniot broj)i so toa go zgolemuva borjot (done ! probably)
// da se dovrsi clear_result

//==============================================================

// najnova verzija
// -so tocka nulite
// -erase koa ima nula vo result a nema vo display
