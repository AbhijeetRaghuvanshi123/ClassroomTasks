let obj = {
    name : 'abhijeet',
    lname : 'baliyan',
    getName: function (){ //cant use arrow function for this keywordfjldkjs
        console.log(`my name is ${this.name} ${this.lname}`);
    },
}
obj.getName();