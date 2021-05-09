
const view= (counter) => {
    return ("Count " + counter + "\n" + " (+) " + " (-)"
    );
}

//console.log(view(3)); 



const update = (msg, counter) => {
    if (msg==="+"){
        return counter+=1;
    }
    else { return counter-=1;}
}


const input= "-"
const c = 2
console.log(update(input,c));