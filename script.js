const input=document.querySelector("input");
const button=document.querySelector("button");
const list=document.querySelector("ul");

button.addEventListener("click",()=>{
    
    const text=input.value;
    input.value="";
    
    const li=document.createElement("li");
    const span=document.createElement("span");
    const btn=document.createElement("button");

    
    span.textContent=text;
    
    btn.textContent="Delete";
    

    btn.addEventListener("click",()=>{
        li.remove();//or list.removeChild(li);
    });
    li.appendChild(span);
    li.appendChild(btn);
    list.appendChild(li);
    input.focus();
});
const body=document.querySelector("body");

const done=document.createElement("button");
done.textContent="Done";
done.addEventListener("click",()=>{
    input.disabled=true;
    button.disabled=true;
});

const add=document.createElement("button");
add.textContent="New_Addons";
add.addEventListener("click",()=>{
    input.disabled=false;
    button.disabled=false;
});

body.appendChild(done);
body.appendChild(add);