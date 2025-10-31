//globalscope
    let a = 10;
    {
    }

//block scope
    {
        //let b = 10; will thorw error
        var c = 20;
    }

    

function outer(){
    let a = 20;
    function inner(){
        console.log(a);
    }

    return inner;
}

let res = outer();

console.log(res());