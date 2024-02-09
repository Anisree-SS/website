function check(){

   var count = 0;
   fname = document.getElementById("fName").value;
   fname = fname.trim();
   if (fname == "") {
     alert("Enter name")
	count++;
   }
   else {
	count=0;
     
   }
   phone = document.getElementById("phone").value;
   phone = phone.trim();
   if (phone == ''){
     alert("Enter  phone number!!");
      count++;
   }
   else if(phone.length!=10){
      alert("Enter valid phone number!!");
   }
   else{
  	count++;
   }

}






function phoneNo(input) {
   input.value = input.value.replace(/\D/g, '');
}


function data(input){
   input.value = input.value.replace(/[^A-Za-z]/g, '');
}

