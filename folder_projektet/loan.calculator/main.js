
 document.getElementById('loan-form').addEventListener('submit',function(e){
  
  document.getElementById('results').style.display='none';

  document.getElementById('loading').style.display='block';

  setTimeout(calculateResults, 1000);
  
 e.preventDefault();
});

function calculateResults (){
 const amount=document.getElementById('amount');
 const interest=document.getElementById('interest');
 const years=document.getElementById('years');
 const monthlyPayment=document.getElementById('monthly-payment');
 const totalPayment=document.getElementById('total-payment');
 const totalInterest=document.getElementById('total-interest');
 
const principal =parseFloat(amount.value);
const calculatedInterests = parseFloat(interest.value) / 100 / 12;
const calculatedPayments=parseFloat(years.value) * 12 ;

//monthly payment
const x=Math.pow(1+calculatedInterests,calculatedPayments);
const monthly=(principal*x*calculatedInterests)/(x-1);

if(isFinite(monthly)){
   document.getElementById('results').style.display='block';

   document.getElementById('loading').style.display='none';

    monthlyPayment.value=monthly.toFixed(2);

    totalPayment.value=
    (monthly*calculatedPayments).toFixed(2);
   
    totalInterest.value=((monthly*calculatedPayments)-principal).toFixed(2);
}
else{

  showError('Please check your numbers');
}
}

function showError(error){

  document.getElementById('results').style.display='none';

  document.getElementById('loading').style.display='none';

 const errorDiv=document.createElement('div');

 errorDiv.className='alert alert-danger';

 errorDiv.appendChild(document.createTextNode(error));

 card.insertBefore(errorDiv,heading);
 
 const card=document.querySelector('.card');
 const heading=document.querySelector('.heading');

 setTimeout(clearError,3000);
}

 function clearError(){
     document.querySelector('.alert').remove();
 }








