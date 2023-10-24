let btn=document.querySelector(".joke_btn");
let joke_para=document.querySelector(".joke")


const options={
    method:'GET',
    headers:{
        "X-Api-Key":"UHlQ2F8s0TIYUF0HhWNLAQ==2Lak5GMOWaPhLJJ9", 
    }
}

async function getJokes(){
    let data=await fetch("https://api.api-ninjas.com/v1/dadjokes?limit=1",options)
    data=await data.json();
   
    joke_para.innerText=data[0].joke;
}
btn.addEventListener("click",getJokes)



