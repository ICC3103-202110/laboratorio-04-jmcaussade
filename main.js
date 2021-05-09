
const view= (counter) => {
    return ("Count " + counter + "\n" + " (+) " + " (-)"
    );
}

//console.log(view(3)); 



const update = (msg, counter) => {
    if (msg==="+"){
        return counter+=1;
    }
    else if ( msg==="-") 
    {return counter-=1}
    else { return counter};
}


const input= "-"
const c = 10
console.log(update(input,c));