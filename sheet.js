plusicon.addEventListener("click" ,function () {
   let sheetnumber = sheetlist.children.length;
//    console.log(sheetnumber);
   if(sheetnumber < 10){

       let newsheet = document.createElement("div");
       newsheet.setAttribute("class", "sheet");
       newsheet.setAttribute("sheetid", sheetnumber);
       newsheet.textContent = `Sheet ${sheetnumber+1}`;
       sheetlist.appendChild(newsheet);
       sheetdb();
       newsheet.addEventListener("click", function () {
           for(let i=0;i<sheetlist.children.length;i++){
            //    console.log(sheetnumber);
               sheetlist.children[i].classList.remove("active-sheet");
           }
           newsheet.classList.add("class","active-sheet");
           let idx = newsheet.getAttribute("sheetid");
           db = sheetsdb[idx];
           setUI();
       })
   }else{
       alert("Too many Sheet")

   }



})



firstsheet.addEventListener("click", function () {
    for(let i=0;i<sheetlist.children.length;i++){
     //    console.log(sheetnumber);
        sheetlist.children[i].classList.remove("active-sheet");
    }
    firstsheet.classList.add("class","active-sheet");
    db = sheetsdb[0];
    setUI();
})




function sheetdb(){

   
    let db = {};
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
                value : "",
                upstream : [],
                downstream : [],
                formula : ""
            }  
        }
    }
    
    sheetsdb.push(db);
}


