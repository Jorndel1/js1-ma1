//Question (1)
var cat = { 
    complain: function(){
        console.log("Meow!");
    }
}
cat.complain();

//Question (2)
const heading = document.querySelector("h3");

//Question (3)
heading.style.fontSize = "2em";

//Question (4)
heading.classList.add("subheading");

//Question (5)
const paragraphs = document.querySelectorAll("p");

//Question (6)
const resultsContainer = document.querySelector(".results");
resultsContainer.innerHTML = "<p>New paragraph</p>";

//Question (7)
function catArray(arrayData){
    for(var i = 0; i < arrayData.length; i++){
        console.log(arrayData[i].name);
    }
}

const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

catArray(cats);

//Question (8)
function catArray2(arrayData){
    let returnResult = ""; //Declearing an empthy 'let returnResult' creates an undefined property in the return
    for(let i = 0; i < arrayData.length; i++){
        if(arrayData[i].age === undefined){
            arrayData[i].age = "Age unknown";
        }
        returnResult += "<div>" +
        "<h5>"  + arrayData[i].name + "</h5>" + 
        "<p>"   + arrayData[i].age + "</p></div>";
    }
    return returnResult;
}


//Question (9)
resultsContainer.innerHTML = catArray2(cats);

//Question (10)
//Function updated :)