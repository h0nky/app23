const fs = require('fs');

 const nextData = fs.readFileSync('1-json.json');
 const nextDataJSON = nextData.toString();
 const parsedNextData = JSON.parse(nextDataJSON);
 
 const newProps = { name: 'Eugene', age: 34 };
 const newData = { ...parsedNextData, ...newProps };
 const newDataJSON = JSON.stringify(newData);
 fs.writeFileSync('1-json.json', newDataJSON);

 const updatedJSON = fs.readFileSync('1-json.json');
 console.log(updatedJSON.toString());