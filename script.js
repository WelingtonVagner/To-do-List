const add = document.getElementById("add")
const input = document.getElementById("input")
const list = document.querySelector(".list")
const inpCon = document.querySelector(".input-container")
const body = document.querySelector("body")

let arrlist = JSON.parse(localStorage.getItem("itens")) || ["Tarefa"]

function createButton(){
     list.innerHTML=""
    arrlist.map((e,i)=>{
    const imgAdd = document.createElement("img")
    imgAdd.setAttribute("src","SVG/adicionar.svg")

    const imgDel = document.createElement("img")
    imgDel.setAttribute("src","SVG/Delete.svg")

    const imgEdit = document.createElement("img")
    imgEdit.setAttribute("src","SVG/edit.svg")

     const elemt = document.createElement("div")
     elemt.setAttribute("class", "list-item")
     

     const btnOk= document.createElement("img")
     btnOk.setAttribute("src", "SVG/checkboxchek.svg")
     

     const btnEdit= document.createElement("button")
     btnEdit.setAttribute("class", "edit")
     btnEdit.appendChild(imgEdit)
     

    const text= document.createElement("span")
    text.setAttribute("class", "text")
     text.innerHTML = e;

     const del = document.createElement("button")
     del.setAttribute("class", "delete")
     del.appendChild(imgDel)
    
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
             ipt.setAttribute("class","edit-text")
            ipt.value = text.textContent

            const okBtn = document.createElement("button")
            okBtn.appendChild(imgAdd)

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
          if (btnOk.getAttribute("src") === "SVG/checkbox.svg") {
        btnOk.setAttribute("src", "SVG/checkboxchek.svg");
    } else {
        btnOk.setAttribute("src", "SVG/checkbox.svg");
    }
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


