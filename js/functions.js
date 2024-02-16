// function used for open the selected menu on click
function openMenu(button, open, closed, i, input){
    button.addEventListener('click', ()=>{
        open.style.display = 'flex';
        closed.style.display = 'none'
        if(open == listMenu){
            updateList()
        }else if( input.values != "" || alertSpan[i].innerHTML != ""){
            alertSpan[i].innerHTML = ""
            input.value = ""  
        }      
    })
}
// function used for return to the main menu when clicking in the buttton
function returnMainMenu(i, closed){ 
    returnMenuButton[i].addEventListener('click', ()=>{
        mainMenu.style.display = "flex"
        closed.style.display = "none"
    })
}
// These functions check the value of inputs and list items
// if necessary these functions record an indicative alert to the span
function alertText(i){
    for(let a = 0; a < itemsList.length; a++){
        if(itemsList[a].items.find((items) => items == item) != undefined){
            alertSpan[i].style.color = 'green'
            alertSpan[i].style.fontFamily = 'var(--font-family)'
            alertSpan[i].innerHTML = "Esse item foi removido"
            break
        }
    }
}
function redAlertText(i, input){
    if(input.value == ""){
        alertSpan[i].style.color = 'red'
        alertSpan[i].style.fontFamily = 'var(--font-family)'
        alertSpan[i].innerHTML = "adicione um item primeiro"
    } else if(removeItemMenu.style.display == "flex"){
        for(let a = 0; a < itemsList.length; a++){
            if(itemsList[a].items.find((items) => items == item) != undefined){
                alertSpan[i].style.color = 'green'
                alertSpan[i].style.fontFamily = 'var(--font-family)'
                alertSpan[i].innerHTML = "Esse item foi removido"
                console.log(a)
                break
            }else if(itemsList[a].items.find((items) => items == item) == undefined){
                alertSpan[i].style.color = 'red'
                alertSpan[i].style.fontFamily = 'var(--font-family)'
                alertSpan[i].innerHTML = "Esse item não foi encontrado"
            }
        }
    }
}
// This function adds the item written to the respective array according to its category
function addItem(c){
    categoriesMenu.style.display = "none"
    mainMenu.style.display = "flex"
    for(let i = 0; i <itemsList.length; i++){
        if(c.toLowerCase() == itemsList[i].categorie.toLowerCase()){
            itemsList[i].items.push(item) 
            break
        }
    }
}
// This function removes the indicated item  from the array
function removeItem(item){
    for(let i = 0; i < itemsList.length; i++){
        itemsList[i].items = itemsList[i].items.filter((arr) => arr != item )
    }
}
// This function updates the list every time you click to open it
function updateList(){
    for(let i = 0; i <itemsShow.length; i++){
        itemsShow[i].items.innerHTML = itemsList[i].items.join(', ')
    }
}