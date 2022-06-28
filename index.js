var up=document.querySelector("#up");
var down=document.querySelector("#down");
var left=document.querySelector("#left");
var right=document.querySelector("#right");
var inline=100;
var sidha=200;
up.addEventListener("click",function()
{
    sidha=sidha-20;
    document.querySelector("#mario").style.top=`${sidha}px`;
})


down.addEventListener("click",function()
{
    sidha=sidha+20;
    document.querySelector("#mario").style.top=`${sidha}px`;
})


left.addEventListener("click",function()
{
    inline=inline-20;
    document.querySelector("#mario").style.left=`${inline}px`;
})


right.addEventListener("click",function()
{
    inline=inline+20;
    document.querySelector("#mario").style.left=`${inline}px`;
})