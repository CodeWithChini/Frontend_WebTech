const fs = require('fs');

//write file
fs.writeFile('A2.txt', 'Hello', (err) => {
    if (err)
    {
        console.log("Error");
    }
    else {
        console.log("Written");
    }
} );

//read file
fs.readFile('A2.txt', (err, data) => {
    if (err)
    {
        console.log("Error");
    }
    else
    {
        console.log(data.toString());
    }
})

//append
fs.appendFile('A2.txt', '\n Hello Everyone!!', (err) => {
    if (err)
    {
        console.log("Error");
    }
    else {
        console.log("Appended");
    }
})

//exist file
fs.exists('H:\DU\Web Technology\Lab Dairy', (err) => {
    if (err)
        {
            console.log("Error");
        }
        else {
            console.log("Exsist");
        }
})


//stat
fs.stat('A2.js', (err, data) => {
    if (err)
        {
            console.log("Error");
        }
        else
        {
            console.log(data);
        }
})


//delete
fs.unlink('A2.txt', (err) => {
    if (err)
        {
            console.log("Error");
        }
        else {
            console.log("deleted");
        }
})
