
const view= (counter) => {
    return ("\nCount " + counter + "\n\n" + " (+) " + " (-)" + "\n\n" + "(q) to quit\n "
    );
}

console.log(view(3)); 

const update = (msg, counter) => {
    if (msg==="+"){
        return counter+=1;
    }
    else if ( msg==="-") 
    {return counter-=1}
    else { return counter};
}

//const input= "-"
//const c = 10
//console.log(update(input,c));
//if (msg==="q"){ break }


const app = (counter) => {
        const CurrentView = view(counter)
        console.clear();
        console.log(CurrentView);
        const msg = "-" //AQUI GUARDAR INPUT USUARIO
        console.log(update(msg,counter));
}

app(0)
