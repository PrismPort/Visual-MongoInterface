import React, {useState, useEffect} from 'react'; 

function App() {
  
  //turn json-Data into states
  const [data,setData]=useState([]);

  const getData=()=>{
    fetch('./collection.json' //fetches the json-document (in public folder) that is the collection!!!
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }

  useEffect(()=>{
    getData()
  },[])



  //create a viaual representation of a document using divs (gets called by generateCollection)
  function generateDocument(data, gen) {
    const newData = Object.keys(data).reduce((result, currentKey) => { //go over all the keys of the key-value pairs of the document
      if (typeof data[currentKey] === 'object' || data[currentKey] instanceof Object) {
        if(Array.isArray(data[currentKey])){ //arrays are also objects

          //if the value is an array: go over it and make it a (pretty) string (otherwise array-content will look like "BiologyChemistryCalculus")
          //does not work yet with objects inside the array!!
          var arrayString = "["
          for(var i=0; i < data[currentKey].length; i++){
            arrayString = arrayString + data[currentKey][i]
            if(i !== data[currentKey].length-1){
              arrayString = arrayString + ", " 
            }
          }
          arrayString = arrayString + "]"

          result.push(<div>{gen}"{currentKey}": {arrayString}</div>); //eg: "subjects": ["Biology", "Chemistry", "Calculus"]
        }
        else{ //if value is a nested document (object)

          //gen (generation) gets put before the key-value pair to show if it is a child of another key 
          //the amount of lines ("-") shows what generation the key-value pair is a part of
          gen = gen + "-"; 

          //since the value is another document, the function gets called recursively with it as an argument
          result.push(
            <div>
              {gen.substring(0, gen.length-1)}"{currentKey}":
              {generateDocument(data[currentKey], gen)} 
            </div>
            );

          //gen looses a line ("-") because we are back at the parent-generation
          gen = gen.substring(0, gen.length-1);

        }
      } else {

        //boolean values cannot be displayed, so I turned them into strings
        if(data[currentKey] === true ){
          data[currentKey] = "true";
        }
        if(data[currentKey] === false){
          data[currentKey] = "false";
        }

        result.push(<div>{gen}"{currentKey}": {data[currentKey]}</div>); //eg: "name": "Sally" or "age": 22.5
      }
      return result; //result saved all the div-rows with the key-value pairs
    }, []);
    return newData;
  }

  //for each document of collection: generate Data in a div of class "document" (gets styled in index.css) 
  function generateCollection(data) {
    const newData = Object.keys(data).reduce((result, currentKey) => {
      result.push(<div class="document">{generateDocument(data[currentKey], "")}</div>); //each document has a key like an array-index (0,1,2,...)
      result.push(<br />); //leave space between documents
      return result;
    }, []);
    return newData;
  }

  //what App returns
  return (
    <div>
      {generateCollection(data)}        
    </div>
  )
}

export default App;
