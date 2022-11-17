const contents = document.querySelector(`content`)
const listItems = document.querySelector(`nav ul li`)
listItems.forEach((Item,idx) => {
    item.addEventlistener(`click`,()=>{
        hideAllContents()
        hideAllItems()

        item.classList.add(`active`)
        contents[idx].classList.add(`show`)
    })
})
function hideAllContents(){
    contents.forEach(content => content.classList.remove(`show`))
}
function hideAllItems(){
    listItems.forEach(item => item.classList.remove(`active`))
}