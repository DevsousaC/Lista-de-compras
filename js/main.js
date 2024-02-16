//click event that opens the menu containing the item categories
addButton.addEventListener('click', ()=>{
    redAlertText(0, addInput)
    if(addInput.value != ""){
        item = addInput.value
        addItemMenu.style.display = "none"
        categoriesMenu.style.display = "flex"
    }
})
// adds the item written in the selected categorie from the array
categoriesSelected.forEach(button => {
    button.addEventListener('click', evt =>{
        addItem(evt.target.innerHTML)
    })
})
/* Remove item from list */
removeButton.addEventListener('click', ()=>{
    redAlertText(1, removeInput)
    if(removeInput.value != ""){
        item = removeInput.value
        alertText(1)
        removeItem(item)
    }
})
console.log(itemsList[0].items.find((items) => items == "item"))
// Calls the functions that open the menus
openMenu(startAddButton, addItemMenu, mainMenu, 0, addInput)
openMenu(startRemoveButton, removeItemMenu, mainMenu, 1, removeInput)
openMenu(checkListButton, listMenu, mainMenu, 1, undefined)
// Call the function that return  to the main menu
returnMainMenu(0, addItemMenu)
returnMainMenu(1, removeItemMenu)
returnMainMenu(2, listMenu)