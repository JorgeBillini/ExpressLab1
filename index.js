const express = require('express');
const math = require('./routes/Math.js');
const QueryObj = require(`./routes/ObjectFunctions.js`)
const gifs = require('./routes/gifs.js');
const request = require('request')
// const gifs = require('./routes/gifs/gifs.js');
const app = express();
const port = 8000;

app.listen(port, ()=>{
    console.log('hi');
})

app.get('/math/add', (request, response) => {
    /*
    All of this operation could go into a function, however because we are using the Math module it 
    might make the program crash so for now these operations will live on our index
    */
   const isValid = QueryObj.validate(request.query)
   if (isValid === false){
       response.send({
           error: 'You passed a non number value into the parameters'
       })
   }
   const operationsObj = QueryObj.ObjStrToNum(request.query);
   const keys = Object.keys(operationsObj);
   console.log(keys);
   let objResult = 0;
   for (let i = 0; i < keys.length ; i++){
       if (i === keys.length -1){
           continue;
       }
    objResult = math.add(operationsObj[keys[i]],operationsObj[keys[i+1]]);
    console.log(objResult);
   }
    response.send({
        input: QueryObj.inputObj(request.query),
        sumString : QueryObj.sumStr(request.query),
        result: objResult,
    });
  });
 
  app.get('/math/multiply', (request, response) => {
      // READ ABOVE (LINE 13)
      const isValid = QueryObj.validate(request.query)
      if (isValid === false){
          response.send({
              error: 'You passed a non number value into the parameters'
          })
      }
    const operationsObj = QueryObj.ObjStrToNum(request.query);
   const keys = Object.keys(operationsObj);
   console.log(keys);
   let objResult = 0;
   for (let i = 0; i < keys.length ; i++){
       if (i === keys.length -1){
           continue;
       }
    objResult = math.multiply(operationsObj[keys[i]],operationsObj[keys[i+1]]);
   } // Operation
    response.send({
        input: QueryObj.inputObj(request.query),
        productString: QueryObj.productString(request.query),
        result: objResult,
    });
  });
app.get('/gifs/',(request,response)=>{
         gifs.getGifs(request.query.search,(data)=>{
        response.send({
            Gif: data,
        });
    })
   
})
  