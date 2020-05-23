function palindrom(str){
    let strNew = str.toLowerCase().replace(/[^a-z0-9]/gi, '');
    strNew = strNew.split('').reverse().join('');
    if(str.toLowerCase() ===  strNew ){
        console.log (`${str} : is a palindrom`);
    }else{
        console.log (`Unfortunately  "${str}" : isn't a palindrom`);
    }
    console.log(str);
    console.log(strNew);
}

palindrom('eye');