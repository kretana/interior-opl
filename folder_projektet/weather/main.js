const weather=new Weather('Sydney');

//weather.changeLocation();


const ui= new Ui();
//weather.changeLocation(this.location);
//const butoni=document.getElementById("butoni");
//butoni.addEventListener("click",getWeather);
document.addEventListener("DOMContentLoaded",getWeather);

document.getElementById("butoni").addEventListener("click",(e)=>{
    const city=document.getElementById("button-addon2").value;
    weather.changeLocation(city);
    getWeather();
});

function getWeather(){ 
//city=document.getElementById("button-addon2");  
weather.getWeather()
    .then(results=> { 
        
        
        ui.paint(results);
        
    })
    .catch(err=> 
        alert(err));
 }