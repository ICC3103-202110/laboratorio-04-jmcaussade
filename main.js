const prompt = require('prompt-sync')();

const view= (counter) => {
    return ("\nCount " + counter + "\n\n" + " (+) " + " (-)" + "\n\n" + "(q) to quit\n "
    );
}
 

const update = (msg, counter) => {
    if (msg==='+'){
        return counter+=1;
    }
    else if ( msg==='-') 
    {return counter-=1}
    else { return  counter };
}

//const input= "-"
//const c = 10
//console.log(update(input,c));
//if (msg==="q"){ break }



const app = (counter) => { 
    var msg = '0'
    while ( msg!='q'){
    const CurrentView = view(counter);
    console.clear();
    console.log(CurrentView);
    msg = prompt('What do you whant to do? ');
    counter= (update(msg,counter));
    }
} 
app(0)
