let fontsizeinput = document.querySelector(".font-size")
let fontfamilyinput = document.querySelector(".font-family")
let textalign = document.querySelector(".text-align")
let bold = document.querySelector(".fa-bold")
let italic = document.querySelector(".fa-italic")
let underline = document.querySelector(".fa-underline")
let colorinput = document.querySelector(".fa-palette")
let colorinputh = document.querySelector(".colorinput")
let bginput = document.querySelector(".fa-fill-drip")
let bginputh = document.querySelector(".bginput")
let textalignicon = document.querySelectorAll(".fa")
let formulainput = document.querySelector(".formula-input")
let addressinput = document.querySelector(".address-input")
let plusicon = document.querySelector(".fa-plus")
let sheetlist = document.querySelector(".sheets-list")
let firstsheet = document.querySelector(".sheet")

let sheetsdb = [];
// let db = {};
// let prevAddress;








let row = document.querySelector(".top-row")
for(let i=0;i<26;i++){

    let div = document.createElement("div")
    div.setAttribute("class","cell")
    div.textContent = String.fromCharCode(i+65)
    row.appendChild(div)
}
let leftcol = document.querySelector(".left-col")
for(let i=1;i<101;i++){

    let div1 = document.createElement("div")
    div1.setAttribute("class","cell")
    div1.textContent = i
    leftcol.appendChild(div1)
}



function initdb(){

    let grid = document.querySelector(".grid")
    let db = {};
    for(let i = 1;i<101;i++){
        let div1 = document.createElement("div")
        div1.setAttribute("class","first-row")
        for(let j=0;j<26;j++){
            let div = document.createElement("div")
            div.setAttribute("class","cell")
            div.setAttribute("contenteditable","true")
            // div.setAttribute("rid",i)
            // div.setAttribute("cid",String.fromCharCode(j+65))
            let address = String.fromCharCode(j+65)+i
            // let cellname = String.fromCharCode(j+65)+i
            div.setAttribute("address",address)
            db[address]= {
                color : "black",
                background : "white",
                fontfamily : "Courier New",
                fontsize : 14,
                align : "left",
                bold : "normal",
                italic : "normal",
                underline : "none",
                value : "",
                upstream : [],
                downstream : [],
                formula : ""
            }
    
    
            
            
            
            
            // div.textContent = String.fromCharCode(j+65) + i
            div1.appendChild(div)
    
        }
        grid.appendChild(div1)
    
        
    
    }
    
    sheetsdb.push(db);
}
initdb();
let db = sheetsdb[0];


//fake data
// db["A1"].value = 20;
// db["A1"].downstream = ["B1"];
// db["B1"].formula = "2 * A1";
// db["B1"].upstream = ["A1"];
// db["B1"].value = 40;

// let a1cell = document.querySelector("[address='A1']")
// let b1cell = document.querySelector("[address='B1']")

// a1cell.innerText = 20;
// b1cell.innerText = 40;





// console.log(Object.keys(db).length)

let allgrid = document.querySelectorAll(".grid .cell")
let addressbar = document.querySelector(".address-input")
for(let i=0;i<allgrid.length;i++){
    allgrid[i].addEventListener("click",function(e){
        let prevAddress = addressbar.value;
        if(prevAddress != ""){
            let prevcell = document.querySelector(`.grid .cell[address=${prevAddress}]`)
            // console.log(prevcell)
           
            prevcell.style.border = "0.01px solid rgb(202, 196, 196)";
            prevcell.style.borderLeft  = "0px";
            prevcell.style.borderTop = "0px";
            

        }
        let address = allgrid[i].getAttribute("address")
        addressbar.value = address
        let cellobject = db[address] 
        // console.log(cellobject.color)
        allgrid[i].focus();
        allgrid[i].style.border = "2px solid #1b9cfc";
        allgrid[i].style.color = cellobject.color;
        allgrid[i].style.backgroundColor = cellobject.background;
        allgrid[i].style.fontFamily = cellobject.fontfamily;
        allgrid[i].style.fontSize = cellobject.fontsize;
        allgrid[i].style.fontWeight = cellobject.bold;
        allgrid[i].style.textDecoration = cellobject.underline;
        allgrid[i].style.fontStyle = cellobject.italic;
        allgrid[i].style.textAlign = cellobject.align;
        allgrid[i].innerText = cellobject.value;
        formulainput.value = cellobject.formula;
        // console.log(db["B1"]);



        //value inchage in input
        fontsizeinput.value = cellobject.fontsize;
        
        
        fontfamilyinput.value = cellobject.fontfamily;




        //align items
        for(let i=0 ; i<textalignicon.length;i++){

            let classarr = textalignicon[i].classList
            let reqclass = classarr[classarr.length-1]
            
            textalignicon[i].classList.remove("iconSelected")
            if(cellobject.align == reqclass){
                textalignicon[i].classList.add("iconSelected")
              }
            //   console.log(classarr)
        }
        //bold
        if(cellobject.bold !== "bold"){
            bold.classList.remove("iconSelected")
        }else{
            bold.classList.add("iconSelected")
        }

        //italic
        if(cellobject.italic !== "italic"){
            italic.classList.remove("iconSelected")
        }else{
            italic.classList.add("iconSelected")
        }

        //underline
        if(cellobject.underline !== "underline"){
            underline.classList.remove("iconSelected")
        }else{
            underline.classList.add("iconSelected")
        }
        
        
        colorinput.style.color = cellobject.color
        
        
        bginput.style.color = cellobject.background








        allgrid[i].addEventListener("input", function (e){
            let celladdress = e.currentTarget.getAttribute("address");
            db[celladdress].value = e.currentTarget.innerText;
            // console.log(db[celladdress].value);
            db[celladdress].formula = undefined;

            for(let k=0;k<db[celladdress].upstream.length;k++){
                removefromdownstream(db[celladdress].upstream[k],celladdress);

            }
            db[celladdress].upstream = [];
            for(let k=0;k < db[celladdress].downstream.length;k++){
                // console.log(db[celladdress].downstream[k])
                updatecell(db[celladdress].downstream[k]);

            }

            
            // console.log(db[address])
        })
        
        
        // console.log(addressbar.value);
        

    })
}
let firstcell = document.querySelector(".grid .cell[address='A1']");
firstcell.click();
// firstcell.style.border = "2px solid green";




