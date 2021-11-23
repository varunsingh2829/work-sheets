//font=size changed


fontsizeinput.addEventListener("change", function () {
    let fontSize = fontsizeinput.value
    // console.log(fontsize);
    let address = addressbar.value
    // let cellobject = db[address]
    let changedcell = document.querySelector(`.grid .cell[address=${address}]`)
    // console.log(changedcell)
    changedcell.style.fontSize = fontSize+"px"
    db[address].fontsize = Number(fontSize)
    
})

//font-family changed


fontfamilyinput.addEventListener("change", function () {
    let fontfamily = fontfamilyinput.value
    // console.log(fontfamily);
    let address = addressbar.value
    let changedcell = document.querySelector(`.grid .cell[address=${address}]`)
    // console.log(changedcell)
    changedcell.style.fontFamily = fontfamily
    db[address].fontfamily = fontfamily
})

//align-items

textalign.addEventListener("click", function (e) {
    // console.log(e.target)
    if(e.target !== textalign){
        let classarr = e.target.classList
        let reqclass = classarr[classarr.length-1]

        let address = addressbar.value
        let changedcell = document.querySelector(`.grid .cell[address=${address}]`)
        
        for(let i=0 ; i<textalignicon.length;i++){
         textalignicon[i].classList.remove("iconSelected")
         }
        
        changedcell.style.textAlign = reqclass 
        db[address].align = reqclass 
        e.target.classList.add("iconSelected")
       
        

        

    }
    
})


//bold-italic-uderline-styling

bold.addEventListener("click", function () {
    
    let address = addressbar.value
    let changedcell = document.querySelector(`.grid .cell[address=${address}]`)
    
    if(db[address].bold == "bold"){
        changedcell.style.fontWeight = "normal"
    db[address].bold = "normal"
    bold.classList.remove("iconSelected")

    }else{
        changedcell.style.fontWeight = "bold"
    db[address].bold = "bold"
    bold.classList.add("iconSelected")

    }
    

})

italic.addEventListener("click", function () {
    
    let address = addressbar.value
    let changedcell = document.querySelector(`.grid .cell[address=${address}]`)

    if(db[address].italic == "italic"){
        changedcell.style.fontStyle = "normal"
    db[address].italic = "normal"
    italic.classList.remove("iconSelected")

    }else{
        changedcell.style.fontStyle = "italic"
    db[address].italic = "italic"
    italic.classList.add("iconSelected")

    }
    
    

})

underline.addEventListener("click", function () {
    
    let address = addressbar.value
    let changedcell = document.querySelector(`.grid .cell[address=${address}]`)

    if(db[address].underline == "underline"){
        changedcell.style.textDecoration = "none"
    db[address].underline = "none"
    underline.classList.remove("iconSelected")

    }else{
        changedcell.style.textDecoration = "underline"
    db[address].underline = "underline"
    underline.classList.add("iconSelected")

    }
    
    

})
// color input


colorinput.addEventListener("click", function () {

    colorinputh.click();
    colorinputh.addEventListener("change", function (){
        let color = colorinputh.value
        let address = addressbar.value
        let changedcell = document.querySelector(`.grid .cell[address=${address}]`)
        
        changedcell.style.color = color
        db[address].color = color
        colorinput.style.color = color
    
        
    })
})

bginput.addEventListener("click", function () {

    bginputh.click();
    bginputh.addEventListener("change", function (){
        let color = bginputh.value
        let address = addressbar.value
        let changedcell = document.querySelector(`.grid .cell[address=${address}]`)
        
        changedcell.style.backgroundColor = color
        db[address].background = color
        bginput.style.color = color
    
        
    })
})
