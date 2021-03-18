class Weather{
    constructor(qytet){
     
        this.qytet=qytet;

    }
    async getWeather(){
    const response= await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${this.qytet}&units=metric&appid=5ba1fa728af8f14e2113583f72ce8f10`);
    const responseData= await response.json();
     
         return responseData;
        
        
    
    }
    changeLocation(qytet){
        this.qytet=qytet;
    }
 }