const baseURL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn=document.querySelector("form button");
const fromcurr=document.querySelector(".from select");
const tocurr=document.querySelector(".to select");
const msg=document.querySelector(".msg");

for (let select of dropdowns) {
    for (let currcode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currcode;
        newOption.value = currcode;
        if(select.name==="from" && currcode==="USD"){
            newOption.selected="selected";
        }else if(select.name==="to" && currcode==="INR"){
            newOption.selected="selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target);
    })
}


const updateFlag=(element)=>{
    let currcode=element.value;
    let countryCode=countryList[currcode];
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`;
    let img= element.parentElement.querySelector("img");
    img.src=newSrc;
}

btn.addEventListener("click", async (evt)=>{
    evt.preventDefault();
    let amount=document.querySelector(".amount input");
    let amtval=amount.value;
    if(amtval === ""||amtval < 1){
        amtval=1;
        amount.value="1";
    }

    let URL=`${baseURL}/${fromcurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data=await response.json();
    let rate=data[fromcurr.value.toLowerCase()][tocurr.value.toLowerCase()];

    let finalamt=amtval*rate;
    msg.innerText=`${amtval} ${fromcurr.value} = ${finalamt} ${tocurr.value}`;
});

