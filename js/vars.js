/* All menu */
const mainMenu = document.querySelector('div#menu')
const listMenu = document.querySelector('div#list-menu')
const addItemMenu = document.querySelector('div#add-item-menu')
const removeItemMenu = document.querySelector('div#remove-item-menu')
const categoriesMenu = document.querySelector('#categorie-menu')

/* Buttons */
const startAddButton = document.querySelector('#start-addition') // Clicking opens the menu that adds items
const startRemoveButton = document.querySelector('#start-removal') // Clicking opens the menu that adds items
const checkListButton = document.querySelector('#check-list') // Clicking opens the menu that shows the shopping list
const addButton = document.querySelector('#add-button') // Clicking saves the item
const removeButton = document.querySelector('#remove-button') // Clicking removes the item
const categoriesSelected = document.querySelectorAll('.categorie-button') // Clicking saves the item in one of the categories in the list
const returnMenuButton = document.querySelectorAll('.return-menu')

/* Inputs */
const addInput = document.querySelector('#add-input') // Input to write what item you want to add to the list
const removeInput = document.querySelector('#remove-input') // Input to write what item you want to remove to the list

/* Spans */
const alertSpan = document.querySelectorAll('.alert-error')
/* Array of the list */
let itemsShow =[
    {items: document.querySelector('#laticinios-items'), categorie: "laticinios"},
    {items:  document.querySelector('#doces-items'), categorie: "doces"},
    {items: document.querySelector('#congelados-items'), categorie: "congelados"},
    {items: document.querySelector('#frutas-items'), categorie: "frutas"},
    {items: document.querySelector('#verduras-items'), categorie: "verduras"},
    {items: document.querySelector('#outros-items'), categorie: "outros"}
];
let itemsList = [
    {categorie: "laticinios", items: []},
    {categorie: "doces", items: []},
    {categorie: "congelados", items: []},
    {categorie: "frutas", items: []},
    {categorie: "verduras", items: []},
    {categorie: "outros", items: []}
]
/* let containing the item to be added or removed */7
let item