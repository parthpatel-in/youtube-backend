//first approch hum sara code index file se execute karane wale hain (nodemon) ke through jab meri index file load ho ki function me database connection code likha use turant execute karadu

// second approch me db namak folder banau uske under connection ka mera function likhu or phir index file me function ko import karau  pros code  separate likhoge to code clean hoga, distribute hoga moduler banega 

// server ki file reload or change karni ho to server ko phirse restart karna padta hain isliye hum nodmon use of when your file is saved your server is restart automaticaly


/* first approch 
import express from "express";
const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error",(error) =>{   for error listening before app listen
        console.error("error:" ,error);
        throw error
    })

    app.listen(process.env.PORT, ()=>{
        console.log(`App is listening on port ${process.env.PORT}`)
    })
  } catch (error) {
    console.error("Error: ", error);
    throw error;
  }
})();
*/
nodemon -r dotenv/config 









 request When and how data is coming in the request and how to handle it.
response ke ander kaise response bhejna hain

when u app.use  for middleware | configration setting
cookie parser used for access the user browers cookie and set the cokkie on crud operation