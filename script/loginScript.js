function phoneNo(input) {
	input.value = input.value.replace(/\D/g, '');
}


function getCode(){
	count=0;
	phone = document.getElementById("phoneNum").value;
   	phone = phone.trim();
   	if (phone == ''){
      		alert("Enter phone number!!");
      		count++;
		
   	}
	else if(phone.length!=10){
		alert("Enter valid phone number!!");
		count++;
		
	}
   	else{
      		alert("Verification code is send!!");
		alert("Verification code is 7852");
		
   	}
}
	
function nextStep(){
	
	count=0;
	phone = document.getElementById("phoneNum").value;
   	phone = phone.trim();
   	if (phone == ''){
      		alert("Enter phone number!!");
      		count++;
		
   	}
	else if(phone.length!=10){
		alert("Enter valid phone number!!");
		count++;
		
	}
   	else{
      	
	code=document.getElementById("Verification").value;
	code = code.trim();
	tempCode=parseInt(code);
	if(code==''){
		alert("Verification is invalid!!");
      		count++;
	}
	else if(tempCode!==7852){
		alert("Verification is not matching!!")
		count++;
	}
	
	if(count==0)
	{
		alert("Welcome!!");
	}
}

}


function withPassword(){
	count=0;
	phone = document.getElementById("phoneNum").value;
   	phone = phone.trim();
   	if (phone == ''){
      		alert("Enter phone number!!");
      		count++;
		
   	}
	else if(phone.length!=10){
		alert("Enter valid phone number!!");
		count++;
		
	}
	else{
		
	pass=document.getElementById("pass").value;
	
	const passw=12345;
	pass=parseInt(pass);
	if(pass==''){
		alert("Enter password!!");
      		count++;
	}
	else if(pass!==passw){
		alert("Password is not matching!!")
		count++;
	}
}
	if(count==0)
	{
		alert("Welcome!!");
	}
	
}