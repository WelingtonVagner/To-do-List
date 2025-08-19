const add = document.getElementById("add")
const input = document.getElementById("input")
const list = document.querySelector(".list")
const inpCon = document.querySelector(".input-container")
const body = document.querySelector("body")

let arrlist = JSON.parse(localStorage.getItem("itens")) || ["Tarefa"]

function createButton(){
     list.innerHTML=""
    arrlist.map((e,i)=>{
     const elemt = document.createElement("div")
     elemt.setAttribute("class", "list-item")
     

     const btnOk= document.createElement("button")
     btnOk.setAttribute("class", "marcar")
     btnOk.innerHTML = "ok";

     const btnEdit= document.createElement("button")
     btnEdit.setAttribute("class", "edit")
     btnEdit.innerHTML = "edt"

    const text= document.createElement("span")
    text.setAttribute("class", "text")
     text.innerHTML = e;

     const del = document.createElement("button")
     del.setAttribute("class", "delete")
     del.innerHTML = "del"
    
     const divcrud = document.createElement("div")

     elemt.appendChild(btnOk)
     elemt.appendChild(text)
     elemt.appendChild(divcrud)
     divcrud.appendChild(btnEdit)
     divcrud.appendChild(del)
    list.appendChild(elemt)

     del.addEventListener("click",(evt)=>{
         console.log(arrlist)
         console.log(i)
         arrlist.splice(i,1)
         createButton()
     })
     
     btnEdit.addEventListener("click",(e)=>{
        
            const divEdit = document.createElement("div")
            divEdit.setAttribute("class","divEdit")

            const ipt = document.createElement("input")
            ipt.setAttribute("type","text")
            ipt.value = text.textContent

            const okBtn = document.createElement("button")
            okBtn.textContent="ok"

            body.appendChild(divEdit)
            divEdit.append(ipt)
            divEdit.appendChild(okBtn)
            ipt.focus()

            okBtn.addEventListener("click",()=>{

                if(ipt.value.trim()!==""){
                    text.textContent = ipt.value
                    body.removeChild(divEdit)
                    btnEdit.removeAttribute("disabled")
                    arrlist[i] = ipt.value
                }
            })
            
            divEdit.addEventListener("click",(evt)=>{
                if(evt.target === divEdit){
                    body.removeChild(divEdit);
                    btnEdit.removeAttribute("disabled");
                }
            })
     })
     
     btnOk.addEventListener("click",()=>{
       text.classList.toggle("line")
     })
    })
    localStorage.setItem("itens", JSON.stringify(arrlist))
}

 createButton()

add.addEventListener("click",()=>{
    if(input.value.trim() !== ""){
        list.innerHTML = ""
        arrlist.push(input.value.trim()) 
        createButton()
    }
})


