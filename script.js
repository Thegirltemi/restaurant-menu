const menuItems=[
    {
        id:1,
        item:"Food Item1",
        fooddesc:"An amazing meal that taste better than you expect..you can use the word wow to express your surprise",
        img:"image/food1.JPG",
        hotel:"Lush Hotel1",
        hoteldesc:"one: Our suite is the most preferred in the country and its all about the right mix! located in the heart of the city",


   },
   {
    id:2,
    item:"Food Item2",
    fooddesc:"An amazing meal that taste better than you expect..you can use the word wow to express your surprise",
    img:"image/food2.JPG",
    hotel:"Lush Hotel2",
    hoteldesc:"one: Our suite is the most preferred in the country and its all about the right mix! located in the heart of the city",


},
{
    id:3,
    item:"Food Item3",
    fooddesc:"An amazing meal that taste better than you expect..you can use the word wow to express your surprise",
    img:"image/food3.JPG",
    hotel:"Lush Hotel3",
    hoteldesc:"one: Our suite is the most preferred in the country and its all about the right mix! located in the heart of the city",


},
{
    id:4,
    item:"Food Item4",
    fooddesc:"An amazing meal that taste better than you expect..you can use the word wow to express your surprise",
    img:"image/food4.JPG",
    hotel:"Lush Hotel4",
    hoteldesc:"one: Our suite is the most preferred in the country and its all about the right mix! located in the heart of the city",


},
{
    id:5,
    item:"Food Item5",
    fooddesc:"An amazing meal that taste better than you expect..you can use the word wow to express your surprise",
    img:"image/food5.JPG",
    hotel:"Lush Hotel5",
    hoteldesc:"one: Our suite is the most preferred in the country and its all about the right mix! located in the heart of the city",


},

]

const item=document.querySelector('.item');
const fooddesc=document.querySelector('.fooddesc');
const img=document.querySelector('.img');
const hotel=document.querySelector('.hotel')
const hoteldesc=document.querySelector('.hoteldesc');
const prev=document.querySelector('.prev');
const random=document.querySelector('.random');
const next=document.querySelector('.next');

let currentMenu=0;
window.addEventListener('DOMContentLoaded',function(){
   // let menu=menuItems[currentMenu];
    //item.textContent=menu.item;
    //fooddesc.textContent=menu.fooddesc;
   // img.src=menu.img;
   // hotel.textContent=menu.hotel;
    //hoteldesc.textContent=menu.hoteldesc;
    allMenu(currentMenu);
    
});

const allMenu=()=>{
    let menu=menuItems[currentMenu];
    item.textContent=menu.item;
    fooddesc.textContent=menu.fooddesc;
    img.src=menu.img;
    hotel.textContent=menu.hotel;
    hoteldesc.textContent=menu.hoteldesc;
};

random.addEventListener('click', ()=>{
    currentMenu=Math.floor(Math.random()*menuItems.length);
    allMenu(currentMenu);
});

prev.addEventListener('click',()=>{
    currentMenu--;
    if(currentMenu<0){
        currentMenu=menuItems.length-1;
    }
    allMenu(currentMenu);
});

next.addEventListener('click',()=>{
    currentMenu++;
    if(currentMenu>menuItems.length-1){
        currentMenu=0
    }
    allMenu(currentMenu);
})





















