let randomNumber1= Math.floor(Math.random()*6)+1;
let randomNumer2=Math.floor(Math.random()*6)+1;

document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+randomNumer2+".png");

if(randomNumber1>randomNumer2)
{
    document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(randomNumber1<randomNumer2)
{
    document.querySelector("h1").innerHTML="Player2 Wins";
}
else{
    document.querySelector("h1").innerHTML="It is a Draw";
}