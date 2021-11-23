let download = document.querySelector(".fa-bookmark")
let openinput = document.querySelector(".open-input")
let openbtn = document.querySelector(".fa-folder-open")
let newbtn = document.querySelector(".fa-file")

download.addEventListener("click", function (e){
    let a = document.createElement("a");
    var stringcode = encodeURIComponent(JSON.stringify(sheetsdb));
    var dataStr = "data:text/json;charset=utf-8," + stringcode;
    a.href = dataStr;
    a.download = "file.json";
    a.click();

})

openbtn.addEventListener("click", function (e){
    openinput.click();
})

openinput.addEventListener("change", function (e){
    let filesarr = openinput.files;
    let file = filesarr[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.addEventListener('load',(event)=>{
        let jsondata = JSON.parse(event.target.result);
        sheetsdb = jsondata
        db = sheetsdb[0]; 
        // console.log(OBJ);
        sheetlist.children = [];
        setUI();
        setsheet();
    })
})

function setsheet(){
    for(let i=0;i < sheetsdb.length-1;i++){
        let sheetnumber = sheetlist.children.length;
       let newsheet = document.createElement("div");
       newsheet.setAttribute("class", "sheet");
       newsheet.setAttribute("sheetid", sheetnumber);
       newsheet.textContent = `Sheet ${sheetnumber+1}`;
       sheetlist.appendChild(newsheet);
       newsheet.addEventListener("click", function () {
           for(let i=0;i<sheetlist.children.length;i++){
               sheetlist.children[i].classList.remove("active-sheet");
           }
           newsheet.classList.add("class","active-sheet");
           let idx = newsheet.getAttribute("sheetid");
           db = sheetsdb[idx];
           setUI();
       })
   
    }
}


//newbtn work
newbtn.addEventListener("click", function (){
    sheetsdb = [];


for(let i = 1;i<101;i++){
    
    for(let j=0;j<26;j++){
        
        let address = String.fromCharCode(j+65)+i
        db[address]= {
            color : "black",
            background : "white",
            fontfamily : "Courier New",
            fontsize : 14,
            align : "left",
            bold : "normal",
            italic : "normal",
            underline : "none",
            value: ""
        }

        let changedcell = document.querySelector(`.grid .cell[address=${address}]`)
        changedcell.innerText = db[address].value;
        changedcell.style.color = db[address].color;
        changedcell.style.backgroundColor = db[address].background;
        changedcell.style.fontFamily = db[address].fontfamily
        changedcell.style.fontSize = db[address].fontsize
        changedcell.style.fontWeight = db[address].bold
        changedcell.style.textDecoration = db[address].underline
        changedcell.style.fontStyle = db[address].italic
        changedcell.style.textAlign = db[address].align


        //update in menu bar
        fontsizeinput.value = db[address].fontsize;
        
        
        
        fontfamilyinput.value = db[address].fontfamily;
        




//align items
for(let i=0 ; i<textalignicon.length;i++){

    let classarr = textalignicon[i].classList
    let reqclass = classarr[classarr.length-1]
    
    textalignicon[i].classList.remove("iconSelected")
    // db[address].align = reqclass 
    
}
//bold

    bold.classList.remove("iconSelected")


//italic

    italic.classList.remove("iconSelected")


//underline

    underline.classList.remove("iconSelected")



colorinput.style.color = db[address].color


bginput.style.color = db[address].background
        
    }
    
}
let firstcell = document.querySelector(".grid .cell[address='A1']");
firstcell.click();



// setUI();





})

    function setUI(){
        for(let i = 1;i<101;i++){
            
            for(let j=0;j<26;j++){
                let objaddress = String.fromCharCode(j+65)+i
                
                // console.log(db[objaddress]);
                let cellobject = db[objaddress];
               
                // console.log(cellobject.value)
                let changedcell = document.querySelector(`.grid .cell[address=${objaddress}]`)
                changedcell.innerText = cellobject.value;
                changedcell.style.color = cellobject.color;
                changedcell.style.backgroundColor = cellobject.background;
                changedcell.style.fontFamily = cellobject.fontfamily;
                changedcell.style.fontSize = cellobject.fontsize;
                changedcell.style.fontWeight = cellobject.bold;
                changedcell.style.textDecoration = cellobject.underline;
                changedcell.style.fontStyle = cellobject.italic;
                changedcell.style.textAlign = cellobject.align;




            }
        }
    }



    for(let i=0;i<allgrid.length;i++){
        allgrid[i].addEventListener("blur",function(e){
            
            
            let content = allgrid[i].textContent
            let address = allgrid[i].getAttribute("address")
            // address = addressbar.value 
            // console.log(content)
            db[address].value = content;
            // console.log(db[address])
       

        })
    }

