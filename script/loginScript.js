function phoneNo(input) {
	input.value = input.value.replace(/\D/g, '');
}


function getCode(){
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
   	else {
      		alert("Verification code is send!!");
   	}

}