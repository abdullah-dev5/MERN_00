import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Page from './Page.jsx';

//import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <App />
    {/*<Page /> */}
  </React.StrictMode>,
)




/*
//1 for UL,li , Span ,div
//Opening and Closing tags
const Elements = () =>
{

  return <div>

  </div>
}

// 2 for input slef closing tags 

const Element = () =>
{

  return <input type="text" />
};


// 3 Commos
// a. items , after every items :: Arrays and same goes for OBj and after key and value.

//items =  [1,2,3,4,undefined]
{
  name : " xyz" ,
  anotherKey : "1234"
};

// 4. Colon asssigments in Objects or destructuring

const {name:Oldname} =
{
  name : " xyz" ,
  anotherKey : "1234"
};

// 5. () functions for param
*/