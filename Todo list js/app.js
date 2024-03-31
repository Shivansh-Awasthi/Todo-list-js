let input = document.querySelector("input")
let button = document.querySelector("button")
let ul = document.querySelector("ul")

 
button.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = input.value;

    let btn = document.createElement("button");
    btn.innerText = "delete"
    btn.classList.add("delete")

    item.appendChild( btn);
    ul.appendChild(item);
    input.value = "";

    });

    // let delbtns = document.querySelectorAll(".delete")
   
    // for (delbtn of delbtns){
    //     delbtn.addEventListener("click", function () {
    //         console.log("del")
    //         let par = this.parentElement;
    //         console.log(par);
    //         par.remove(); 
    //     })

    // };

    ul.addEventListener("click", function(event) {
        if(event.target.nodeName== "BUTTON"){
            let listItem =event.target.parentElement;
            listItem.remove(); 
            console.log("delete")
        }
        else{
            console.log("don't delete")
        }

    })

   
