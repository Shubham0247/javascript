const coding = ["js","rb","py","java","cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach( function (item) {
//     if(item[0] == 'j')
//         console.log(item);
// } )

coding.forEach( (item) => {
    if(item[0] == 'j');
        // console.log(item);
} )

function printMe(val) {
    // console.log(val);
}

coding.forEach(printMe) // only give reference dont call the function 

coding.forEach( (item,index,arr) =>{
    // console.log(item,index,arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "C++",
        languageFileName: "cpp"
    },
]

myCoding.forEach( (item) => {
    console.log(`${item.languageName} has file name as ${item.languageFileName}`);
} )

