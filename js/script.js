let input=document.getElementById("input-box");
let list=document.getElementById("lists");


function addtask(){
    if(input.value =="")
    {
        alert("Enter Task!");
    }
    else{
        let li=document.createElement("li")
        li.innerHTML=input.value;
        list.appendChild(li);
        let del=document.createElement("button")
        del.innerHTML="delete";
        li.appendChild(del); 
    }
    input.value="";
}
let x=document.querySelector("ul")
x.addEventListener("click",function(a){
    let lists=document.getElementById("lists");
    let li=a.target.parentNode;
    lists.removeChild(li);
});