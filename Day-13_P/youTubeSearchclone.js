const showYouTubeCards=(data) => {
    console.log(data);
};

const getData= async() => {    //---we create callback function using async and await. 
    try{
        const res=await fetch("https://youtube-v2.p.rapidapi.com/search/?query=renessaince");// we request data from api here
        const dataObj=await res.json();//we store data here
        showYouTubeCards(dataObj);  //we call .......???
    } catch(err) {
        alert("Oops Something went wrong!!!....")
    }
};

getData();  