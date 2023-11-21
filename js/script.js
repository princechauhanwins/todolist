let input=document.getElementById("input-box");
let list=document.getElementById("lists");


function addtask(){
    if(input.value=="")
    {
        document.getElementById("alert").innerHTML="Enter Task!";
    }
    else if(input.value.length>20){
        document.getElementById("alert").innerHTML="Enter Length less than 20";
    }
    else{
        document.getElementById("alert").innerHTML="";
        let li=document.createElement("li")
        li.innerHTML=input.value;
        list.appendChild(li);
        let del=document.createElement("button")
        del.innerHTML="&times";
        del.addEventListener("click",function(){
            list.removeChild(li);
        });
        li.appendChild(del);

        let a=document.createElement("span")
        a.innerHTML="&#x2713";
        a.addEventListener("click",function(){
             let line = li.style.textDecoration="line-through"; 
        });
        li.appendChild(a);
    }
    input.value="";
}

