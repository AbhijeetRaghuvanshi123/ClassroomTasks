// data types
// Primitive
    //number
        let a = 20;
        let salary = 32423.23;
        let b = a * a;
        console.log(b);
        //bigInt
            let bigint = 123422222222222222222222222222222222222n;

    //string
        let name = "Abhijeet";
        let fullname = name + "Raghuvanshi";
        console.log(fullname);
    //boolean
        let over18 = true;
        let under18 = false;
    //null
        let something = null;
    //undefined
        let otherthing;

//Reference Data Types
    //object
    let obj1 = {
        name: "vikas",
        age: 21,
        salary: 3394832,
    }
    let obj2 = new Object();
    obj2.name = "random";
    obj2.age = 23

    obj1.name = "abhijeet";


    console.table(Object.entries(obj1));
    console.log(obj2);

    //array
    let arr = [ 1 ,2 ,3 ,4 ,5,6];
    let arr1 = new Array();
    console.log(arr);
    console.log(arr1);

    //function
    function add(){
        return a + b;
    }
    
    let fn = add();
    console.log("c = " + fn);

        //Anynomus function
        let sayHO = function(){
            console.log(" HO HO HO")
        }

        sayHO();

        //Arrow function

        let treet = () => console.log("Treet");

        treet();

        //IIFE imidiate invoke function expression
        (function test(){
            console.log("YO Jessi Pinkman Yoo");
        })();
        

// == vs ===
    // == compares value
    console.log(2 == "2");
    // === compares type
    console.log(2 === "2");
    