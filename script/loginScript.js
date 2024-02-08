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
		code=document.getElementById("Verification").value;
		code = code.trim();
		if(code==''){
			alert("Verification is invalid!!");
      			count++;
		}
		else{
			getCode();
		}
   	}
	
	if(count==0)
	{
		alert("Welcome!!");
	}

}