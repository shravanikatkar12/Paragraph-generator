
const getData=()=>{

  const input1=document.getElementById("numOfWords").value;
  const container=document.querySelector(".container");

  let numOfWords;
 
 numOfWords= Number(input1);

 const para=document.createElement("p");
 let data="";
  for(let i=0;i<numOfWords;i++){
    const randomNumber=(Math.random()*15).toFixed(0);
    data+=generate(randomNumber).toLowerCase();
    data +=" ";
  }
 

 para.innerText=data;
 para.setAttribute("class", "paras");
 container.append(para);

};

const generate=(n)=>{
  const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let text=" ";
  for(let i=0;i<n;i++){
    const random= (Math.random()*25).toFixed(0);
    text+=letters[random];
  }
  return text;
};
