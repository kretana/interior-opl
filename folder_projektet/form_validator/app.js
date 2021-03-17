

const form=document.getElementById("form");
const username= document.getElementById("username");
const email= document.getElementById("email");
const password=document.getElementById("password");
const password2=document.getElementById("password2");
//Error
    function showError(input,message){
    const formControl=input.parentElement;
    formControl.className="form-control error";
    const small=formControl.querySelector("small");
    small.innerText=message;
}
//Success
function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className="form-control success";
}

//A jane plotesuar fushat
function checkRequired(input){
   
        if(input.value===""){
           showError(input,"Ploteso vendin bosh");
        }else{
            showSuccess(input);
        }  
    }  
 


//kontroll email
function checkEmail(input) {
     while(checkRequired(input)){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if( re.test(input.value.trim())){
        showSuccess(input);
    
    }else{
        showError(input,"Vendos sakt emailin");

    }
  }
}



//kontrolli i karaktereve te username dhe password
function checkLength(input,min,max){
    if(input.value.length<min){
        showError(input,`Kujdes jo me pak se ${min} karaktere`);
    }else if(input.value.length>max){
        showError(input,`Kujdes jo me pak se ${max} karaktere`);
    }else{
        showSuccess(input);
    }
}

 function matchPassword(input1,input2){
    if(input1.value!==input2.value){
        showError(input2,"Passw duhet te jene te njejte");
    }
} 



form.addEventListener("submit",function(e){
e.preventDefault();

checkRequired(input);

checkLength(username,3,15);
checkLength(password,6,24);

matchPassword(password,password2);
checkEmail(email);

});