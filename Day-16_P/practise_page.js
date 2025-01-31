const showProdcuts = (data)=>{
    // console.log(data);
    const products=data.products;
    for(let i=0;i<6;i++){
        const SinglePAcket=products[i];
        const card=document.createElement('div');//creating div named card
        card.className='card';//giving class name to card div
            //logo
        const image=document.createElement('img');
        image.src=SinglePAcket.thumbnail;
        card.appendChild(image);
            //title
        const para=document.createElement('p');
        para.innerText=SinglePAcket.title;
        card.appendChild(para);
            //description
        const discriptions=document.createElement('h4');
        discriptions.innerText=SinglePAcket.description;
        card.appendChild(discriptions);
            //printing this on html page
        const parent=document.getElementById('root');
        parent.appendChild(card);
        console.log(card);
    }
   


};

const getData = () =>{
    const req= fetch("https://dummyjson.com/products");//request data from api
    req.then((response) => {//then will store data
        const pr=response.json();//
        pr.then((data)=>{
            showProdcuts(data);
        })
    }).catch((error) => {//catch will store error
        alert(error.message);
    });
};

getData();