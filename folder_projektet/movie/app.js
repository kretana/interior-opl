const container=document.querySelector(".container");
const seats=document.querySelectorAll(".row .seat:not(.occupied)");
const count=document.getElementById("count");
const total=document.getElementById("total");
const movieSelect=document.getElementById("movie");

let ticketPrice=+movieSelect.value;

populateUI();

//set movie numbers and price
function setMovieData(movieIndex,moviePrice){
   localStorage.setItem("selectedMovieIndex",movieIndex);
   localStorage.setItem("selectMoviePrice",moviePrice);
}


 function updateSelectedcount(){
     const selectedSeats=document.querySelectorAll(".row .seat.selected");
     const selectedseatsCount=selectedSeats.length;
     count.innerText=selectedseatsCount;
     total.innerText=selectedseatsCount*ticketPrice;

     //copy selected seats into arr
     //map throught array
     //return a new array indexes
     const seatsIndex= [...selectedSeats].map(function(seat){
             
      return[...seats].indexOf(seat);
     }); //covert the node list in regular array,,and map() returns the functions parameters
    
     localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));
 }
//get data from local storage and populate UI

function populateUI(){
  const selectedSeats=JSON.parse(localStorage.getItem("selectedSeats"));
  if(selectedSeats !== null && selectedSeats.length>0){
      seats.forEach((seat,index)=>{
           if(selectedSeats.indexOf(index)>-1){
             seat.classList.add("selected");
           }
      });
  }
  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if(selectedMovieIndex !== null){
    movieSelect.selectedIndex=selectedMovieIndex;
  }
}


container.addEventListener("click",function(e){

if (e.target.classList.contains('seat')&&(!e.target.classList.contains('occupied'))){

    e.target.classList.toggle("selected");
    
    updateSelectedcount();
}
});

movieSelect.addEventListener("change",function(e){
  ticketPrice=+e.target.value;
  updateSelectedcount()
   setMovieData(e.target.selectedIndex,e.target.value);

});
updateSelectedcount();