class Ui{
    
    constructor(){
            //header
    this.location=document.getElementById("loc");
    this.temp=document.getElementById("temp");
    this.imazhi=document.getElementById("imazhi");
    this.data=document.getElementById("data");
    //pjesa 2.1
    this.imazhi1=document.getElementById("imazhi1");
    this.temp1=document.getElementById("temp1");
    this.ora1=document.getElementById("ora1");
    this.data1=document.getElementById("data1");
    //pjesa 2.2
    this.imazhi2=document.getElementById("imazhi2");
    this.temp2=document.getElementById("temp2");
    this.ora2=document.getElementById("ora2");
    this.data2=document.getElementById("data2");
    
    //pjesa 3.1
    this.img1=document.getElementById("img1");
    this.t1=document.getElementById("t1");
    this.dat1=document.getElementById("dat1");
    //pjesa 3.2
    this.img2=document.getElementById("img2");
    this.t2=document.getElementById("t2");
    this.dat2=document.getElementById("dat2");
    //pjesa 3.3
    this.img3=document.getElementById("img3");
    this.t3=document.getElementById("t3");
    this.dat3=document.getElementById("dat3");
    
    //footer
    this.inputi=document.getElementById("button-addon2");
    
     }
    paint(weather){
            //header
        
            this.location.textContent=weather.city.name;
            this.temp.textContent= `${weather.list[0].main.temp}° ` ;
            
           
            
            
            this.data.textContent="Today,";
            var iconcode =weather.list[0].weather[0].icon;
            var iconurl = "https://openweathermap.org/img/w/" + iconcode + ".png";
            this.imazhi.setAttribute('src', iconurl);
            const options={
                month:"short",
                day:"2-digit",
                hour:"numeric",
                minute: "numeric"
            };
    
    
            //pjesa 2.1
            this.temp1.textContent=`${weather.list[1].main.temp}° `;
            const data1=new Date(weather.list[1].dt_txt).toLocaleDateString("en-US",options);
            this.data1.textContent=`${data1}`;
            var iconcode1=weather.list[1].weather[0].icon;
            var iconurl1 = "https://openweathermap.org/img/w/" + iconcode1 + ".png";
            this.imazhi1.setAttribute('src', iconurl1);
            //pjesa 2.2
            this.temp2.textContent=`${weather.list[2].main.temp}° `;
            const data2=new Date(weather.list[2].dt_txt).toLocaleDateString("en-US",options);
            this.data2.textContent=`${data2}`;
            var iconcode2=weather.list[2].weather[0].icon;
            var iconurl2 = "https://openweathermap.org/img/w/" + iconcode2 + ".png";
            this.imazhi2.setAttribute('src', iconurl2);
            //pjesa 3.1
            this.t1.textContent=`${weather.list[10].main.temp}° `;
            const options2={
                month:"short",
                day:"2-digit",   
            };
    
            const dat1=new Date(weather.list[10].dt_txt).toLocaleDateString("en-US",options2);
            this.dat1.textContent=`${dat1}`;
            var iconcode3=weather.list[10].weather[0].icon;
            var iconurl3 = "https://openweathermap.org/img/w/" + iconcode3 + ".png";
            this.img1.setAttribute('src', iconurl3);
            //pjesa 3.2
            this.t2.textContent=`${weather.list[18].main.temp}° `;
            const dat2=new Date(weather.list[18].dt_txt).toLocaleDateString("en-US",options2);
            this.dat2.textContent=`${dat2}`;
            var iconcode4=weather.list[18].weather[0].icon;
            var iconurl4 = "https://openweathermap.org/img/w/" + iconcode4 + ".png";
            this.img2.setAttribute('src', iconurl4);
            //pjesa 3.3
            this.t3.textContent=`${weather.list[26].main.temp}° `;
            const dat3=new Date(weather.list[26].dt_txt).toLocaleDateString("en-US",options2);
            this.dat3.textContent=`${dat3}`;
            var iconcode5=weather.list[26].weather[0].icon;
            var iconurl5 = "https://openweathermap.org/img/w/" + iconcode5 + ".png";
            this.img3.setAttribute('src', iconurl5);    
    
        }
        
    }