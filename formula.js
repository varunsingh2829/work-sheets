formulainput.addEventListener("keydown", function (e){
    if(e.key == "Enter" && e.key != ""){
        let typeformula = e.currentTarget.value
        let address = addressinput.value;
        db[address].formula = typeformula
        // console.log(db[address])


        for(let k=0;k<db[address].upstream.length;k++){
            removefromdownstream(db[address].upstream[k],celladdress);

        }
        db[address].upstream = [];

        let splitarr = typeformula.split(" ");
        for(let i=0;i< splitarr.length;i++){
            if(splitarr[i] != "+" &&
            splitarr[i] != "-" &&
            splitarr[i] != "*" &&
            splitarr[i] != "/" && isNaN(splitarr[i])
            ){
                db[address].upstream.push(splitarr[i]);  
            }
        }

        for(let i=0;i< db[address].upstream.length;i++){
            addtodownstream(db[address].upstream[i],address)
        }

        let valobj = {}

    for(let l=0;l<db[address].upstream.length;l++){
        valobj[db[address].upstream[l]] = db[db[address].upstream[l]].value;
    }
    // console.log(valobj) 


    for( let key in valobj){
        typeformula = typeformula.replace(key,valobj[key])
    }
    
    let newval = eval(typeformula)
    // console.log(newval);
    db[address].value = newval;
    let updatecellvalue = document.querySelector(`[address='${address}']`)
    updatecellvalue.innerText = newval;

    for(let l=0;l<db[address].downstream.length;l++){
        updatecell(db[address].downstream[l]);
    }
        


    };
});







// remove from downstream

function removefromdownstream(parent,child){
    let parentdownstream = db[parent].downstream;
    let filteredarr = parentdownstream.filter( (e) => {

        return  e!=child;

    })

    db[parent].downstream = filteredarr;

}




function updatecell(cell){
    let cellobj = db[cell];
    let upstream = db[cell].upstream;
    console.log(db[cell].upstream) 
    let formula = db[cell].formula; 


    let valobj = {}

    for(let l=0;l<upstream.length;l++){
        valobj[upstream[l]] = db[upstream[l]].value;
    }
    // console.log(valobj) 


    for( let key in valobj){
        formula = formula.replace(key,valobj[key])
    }
    
    let newval = eval(formula)
    db[cell].value = newval;
    let updatecellvalue = document.querySelector(`[address='${cell}']`)
    updatecellvalue.innerText = newval;
    // console.log(cell) 

    let downstream = cellobj.downstream
    for(let i=0;i<downstream.length;i++){
        updatecell(downstream[i]);
    }
}



function addtodownstream(parent,child){
    db[parent].downstream.push(child)
}

