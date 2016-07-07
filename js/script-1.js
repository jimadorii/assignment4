// BEGIN part 1 - Practice with Javascript OOP Concepts

/*
// BEGIN problem 1

var ANIMAL = ANIMAL || {};

ANIMAL.Cat = function() {    
}
ANIMAL.Dog = function() {   
}
*/
// END problem 1


// BEGIN problem 2
/*
//Literal notation below
var cat = {
    fluff: "3% fluff",
    poof: "97% poof",
    age: 2
};

//Constructor notation below
function Dog(breed) {
    this._breed = breed;
    this.puff = "97%";
    this.ruff = "3%";
    this.amount = "4";
};
// END problem 2


/ BEGIN problem 3
/*
var myDog = new Dog("Mutt");

//window.console.log(myDog._breed);
*/
//END problem 3


// BEGIN problem 4
/*
function Animal() {
    window.console.log("The Animal has been created");
}
Animal();
*/
// END problem 4


// BEGIN problem 5
/*
function Animal(display) {
    this.display = display;
}
var displayANimal = new Animal("The Animal has been created");
window.console.log(displayANimal.display);
*/
// END problem 5


// BEGIN problem 6
/*
function Animal(type,breed,color,height,length) {
    this.type = "small";
    this.breed = "Labrador";
    this.color = "black";
    this.height = "2 ft tall";
    this.length = "4 ft long";
}
var display = new Animal();

window.console.log("You dog is a " +display.type + " " + display.color + " " + display.breed + " and is " +display.height + " and " + display.length);
*/
// END problem 6


// BEGIN problem 7
/*
var Animal = function(make, model, miles) {
    this.type = "small";
    this.breed = "Labrador";
    this.color = "black";
    this.height = "2 ft tall";
    this.length = "4 ft long";
}
var myCar= new Animal();
for (var property in myCar) {
    window.console.log(property);
}
*/
// END problem 7


// BEGIN problem 8

/*
var Speak = function(check) {
    this.color1 = "black";
    this.color2 = "white";
    this.check = check;
    if(this.check =="dog") {
        window.console.log("The " + color1 + " dog is barking!");
    }
    else if (this.check == "Dog") {
        window.console.log("The " + color1 + " dog is barking!");
    }
    else if (this.check == "cat") {
        window.console.log("The " + color2 + " cat is barking!");
    }
    else if (this.check == "Cat") {
        window.console.log("The " + color2 + " cat is barking!");
    }
    else {
        window.console.log('Please enter either "Cat" or "Dog" only');
    }
}
Speak(prompt('Please enter "cat" or "dog"'));
*/
// END problem 8


// BEGIN problem 9
/*
var Animal = function() {
    var color1 = "black";
    var color2 = "white";
    var checkType = prompt('Please enter either "Cat" or "Dog"');
    if(checkType =="dog") {
        var Speak = function() {
        console.log("The " + checkType + " has made a noise");
        };
        Speak();
    }
    else if (checkType == "Dog") {
        var Speak = function() {
        console.log("The " + checkType + " has made a noise");
        };
        Speak();
    }
    else if (checkType == "cat") {
        var Speak = function() {
        console.log("The " + checkType + " has made a noise");
        };
        Speak();
    }
    else if (checkType == "Cat") {
        var Speak = function() {
        console.log("The " + checkType + " has made a noise");
        };
        Speak();
    }
    else {
        window.console.log('Please enter either "Cat" or "Dog" only');
    }
}
var Speak = function(Animal) {
            this.speak1 = Animal;
            console.log("The " + speak1 + " has made a noise");
        }
Animal();
*/
// END problem 9


// BEGIN problem 10
/*
function findWords(str) {
    var str = "This is a paragraph about a paragraph called paragraph in which the word paragraph is mentioned a few times in and put of the paragraph.";
    var res = str.match(/paragraph/g).length;
    
    window.console.log("This is a paragraph about a paragraph called paragraph in which the word paragraph is mentioned a few times in and put of the paragraph.");
    
    window.alert('This paragraph has the word "paragraph" in it ' + res + ' times.');
}
findWords();
*/
// END problem 10


// END part 1 - Practice with Javascript OOP Concepts


//------------------------


// BEGIN part 2 - The Recipe Card
/*
var recipe = function() {
    var title = "Guacamole";
    var servings = 4;
    var ingredients = ["Ingredients:", "\n- 3 Avocados", "\n- 1 Lime", "\n- 1 Teaspoon Salt", "\n- 1/2 Cup Onion", "\n- 3 Tablespoons Cilantro", "\n- 2 Diced Tomatoes", "\n- 1 Teaspoon Garlic", "\n- 1 Pinch Ground Pepper"]; 
    window.console.log(title);
    window.console.log("Serves: " + servings);
    window.console.log(ingredients.join(" ").toString());
};
recipe();
*/
// END part 2 - The Recipe Card

//------------------------

// BEGIN part 3 - The Reading List
/*
var books = function() {
    
    // BEGIN book 1 variable array
    var book1 = ['Author: ', 'Suzanne Collins', 'Title: ', 'The Hunger Games', alreadyRead=true];
        for (var i = 0; i < book1.length; i++) {
            if(book1[i] === true) {
                console.log(book1[0] + book1[1] + '\n' + book1[2] + book1[3] +  '\n \n' + 'You have read ' + book1[3] + ' by ' + book1[1] + '\n' + 'It is NOT on your list' + '\n \n');
                }
            else if(book1[i] ===false) {
                console.log(book1[0] + book1[1] + '\n' + book1[2] + book1[3] +  '\n \n' + 'You have not read ' + book1[3] + ' by ' + book1[1] + '\n' + 'It IS on your list' + '\n \n');
                }
            }
    //END book 1 variable array
    
//*****
    
    
    // BEGIN book 2 variable array
    var book2 = ['Author: ', 'Jane Austen', 'Title: ', 'Pride and Prejudice',   alreadyRead=false];
        for (var i = 0; i < book2.length; i++) {
            if(book2[i] === true) {
                console.log(book2[0] + book2[1] + '\n' + book2[2] + book2[3] +  '\n \n' + 'You have read ' + book2[3] + ' by ' + book2[1] + '\n' + 'It is NOT on your list' + '\n \n');
                }
            else if(book2[i] ===false) {
                console.log(book2[0] + book2[1] + '\n' + book2[2] + book2[3] +  '\n \n' + 'You have not read ' + book2[3] + ' by ' + book2[1] + '\n' + 'It IS on your list' + '\n \n');
                }
            }
    //END book 2 variable array
    
//*****
    
    
    // BEGIN book 3 variable array
    var book3 = ['Author: ', 'J.K. Rowling', 'Title: ', 'The Harry Potter Series', alreadyRead=true];
        for (var i = 0; i < book3.length; i++) {
            if(book3[i] === true) {
                console.log(book3[0] + book3[1] + '\n' + book3[2] + book3[3] +  '\n \n' + 'You have read ' + book3[3] + ' by ' + book3[1] + '\n' + 'It is NOT on your list' + '\n \n');
                }
            else if(book3[i] ===false) {
                console.log(book3[0] + book3[1] + '\n' + book3[2] + book3[3] +  '\n \n' + 'You have not read ' + book3[3] + ' by ' + book3[1] + '\n' + 'It IS on your list' + '\n \n');
                }
            }
    //END book 3 variable array
    
//*****
    
    
    // BEGIN book 4 variable array
    var book4 = ['Author: ', 'Stephen King', 'Title: ', 'It', alreadyRead=true];
        for (var i = 0; i < book4.length; i++) {
            if(book4[i] === true) {
                console.log(book4[0] + book4[1] + '\n' + book4[2] + book4[3] +  '\n \n' + 'You have read ' + book4[3] + ' by ' + book4[1] + '\n' + 'It is NOT on your list' + '\n \n');
                }
            else if(book4[i] ===false) {
                console.log(book4[0] + book4[1] + '\n' + book4[2] + book4[3] +  '\n \n' + 'You have not read ' + book4[3] + ' by ' + book4[1] + '\n' + 'It IS on your list' + '\n \n');
                }
            }
    //END book 4 variable array
    
//*****
    
    
    // BEGIN book 5 variable array
    var book5 = ['Author: ', 'Stephen King', 'Title: ', 'The Shining', alreadyRead=false];
        for (var i = 0; i < book5.length; i++) {
            if(book5[i] === true) {
                console.log(book5[0] + book5[1] + '\n' + book5[2] + book5[3] +  '\n \n' + 'You have read ' + book5[3] + ' by ' + book5[1] + '\n' + 'It is NOT on your list' + '\n \n');
                }
            else if(book5[i] ===false) {
                console.log(book5[0] + book5[1] + '\n' + book5[2] + book5[3] +  '\n \n' + 'You have not read ' + book5[3] + ' by ' + book5[1] + '\n' + 'It IS on your list' + '\n \n');
                }
            }
    //END book 5 variable array
    
} // <--- This curly brace associated with "books" function


books();
*/
// END part 3 - The Reading List
