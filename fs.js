// Import the filesystem module
const fs = require('fs');
function generateHTMLTemplate(data) {

    let temp = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
    </head>
    
    <body>
        <main>
           ${data}
        </main>
    
    </body>
    
    <footer>
    
    </footer>`

  
    return temp;
} 

const names = [ 'bill', 'jane', 'joe'];

let data = '';

for(var i = 0; i < names.length; i ++){
    data = data +   names[i] ;
}

  

const htmlData = generateHTMLTemplate(data);
  
fs.writeFile("index.html", htmlData, (err) => {
  if (err)
    console.log(err);
 
});