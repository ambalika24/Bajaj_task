const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Where we will keep books

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    const request = req.body;
    const numbers=request.numbers
    const numberArr=numbers.split(" ").map(x=>+x);
    let is_success=true;
    for(let i=0;i<numberArr.length;i++){
        if(typeof numberArr[i] === "number"){
            if(Number.isNaN(numberArr[i])){
                is_success=false;
                break;
            }
        }
        else{
            is_success=false;
            break;
        }
    }
    const evenArr=numberArr.filter(x=> {if(x%2===0){
        return x
    }})
    const oddArr=numberArr.filter(x=> {if(x%2!==0){
        return x
    }});
    let response;
    if(is_success){
        response={
            is_success:is_success,
            user_id:"john_doe_17091999",
            odd:oddArr,
            even:evenArr,
        }
    }
    else{
        response={
            is_success:is_success,
            user_id:"john_doe_17091999",
        }
    }
    
    res.send(response);
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));