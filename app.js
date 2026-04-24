const student = {
    name: 'Sachin',
    marks: 80,
    prop: this, //Global Scope
    getName: function() {
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this); //parent scope of arrow function is global scope -> window object
        return this.marks;
    },
    getInfo1: function() {
        setTimeout(() => {
            console.log(this); //Lexical Scope -> student object
        }, 2000);
    },
    getInfo2: function() {
        setTimeout(function() {
            console.log(this);  //Global Scope -> window object
        }, 2000);
    },
};