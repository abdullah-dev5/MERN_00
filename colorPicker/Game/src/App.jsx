import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


function App() {
  const [user, setUser] = useState("");
  const [comp, setComp] = useState("");
  const [output, setOutput] = useState("");
  const [playWins, setPlayWins] = useState(0); // player wins attributes should be added  here .
  
  const keys = [
    {
      index: 1,
      value:"ROCK"
    },
    {
      index: 2,
      value:"PAPER"
    },
    {
      index: 3,
      value:"SCISSORS"
    },
    
  ]
  function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const handleResults = (player, computer) => {
    if (player === "ROCK") {
      if (computer === "PAPER") {
        setOutput("COMPUTER WON");
        //        computerScore++;
      } else if (computer === "ROCK") {
        setOutput("DRAW");
      } else {
        setOutput("PLAYER WON");
        // playerScore++;
      }
    } else if (player === "SCISSORS") {
      if (computer === "ROCK") {
        setOutput("COMPUTER WON");
        //    computerScore++;
      } else if (computer === "SCISSORS") {
        setOutput("DRAW");
      } else {
        setOutput("PLAYER WON");
        //playerScore++;
      }
    } else if (player === "PAPER") {
      if (computer === "SCISSORS") {
        setOutput("COMPUTER WON");

        //    computerScore++;
      } else if (computer === "PAPER") {
        setOutput("DRAW");
      } else {
        setOutput("PLAYER WON");
        //playerScore++;
      }
    }
  };
  const handlComp = () => {
    if (getRandomIntInclusive(1, 4) === 1) {
      setComp("ROCK");
    } else if (getRandomIntInclusive(1, 4) === 2) {
      setComp("PAPER");
    } else if (getRandomIntInclusive(1, 4) === 3) {
      setComp("SCISSORS");
    }
  };

  return (
    <>
      <div className="container">
        <div className="outputs">
        <label> Results :</label>             
            <output>{output}</output>
            <label> comp Ouptut :</label>
            <output>{comp}</output>
            <label> your Ouptut :</label>
            <output>{user}</output>
        </div>
        <div className="buttons">
          <button
            onClick={() => {
              setUser("ROCK");
              handlComp();
              handleResults(user,comp);
              console.log(user);
              console.log(comp);
              console.log(output);
         
            }}
          >
            Rock
          </button>
          <button
            onClick={() => {
             
              setUser("SCISSORS");
              handlComp();
              handleResults(user,comp);
              console.log(user);
              console.log(comp);
              console.log(output);
         
            }}
          >
            Scissor
          </button>
          <button
            onClick={() => {
              setUser("PAPER");
              handlComp();
              handleResults(user,comp);
              console.log(user);
              console.log(comp);
              console.log(output);
            }}
          >
            Paper
          </button>
          {/* <button onClick={handlComp}>Computer</button> */}
          {/* <button
            onClick={() => {
              
              handleResults(user, comp);
            }}
          >
            Results
          </button>
           */}
        </div>
      </div>
    </>
  );
}

export default App;
