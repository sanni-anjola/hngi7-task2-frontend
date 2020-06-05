import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import Button from './components/button/button.component';
import CardList from './components/card-list/card-list.component'
import data from './data/data.json'

function App() {
    let count = 0;
    let pass = 0;
    let fail = 0;
    while (count < data.length) {
        if (data[count].status === "pass") pass++;
        if (data[count].status === "fail") fail++;
        count++;
    }
    return (
        <div className="App">
          <Header />
          <div className="container">
            <h2 style={{textAlign: "left"}}>All Scripts</h2>
            
            <Button count={count}>Submitted</Button>
            <Button count={pass} status="pass">Pass</Button>
            <Button count={fail} status="fail">Fail</Button>
            <CardList contents={data}/>
            
          </div>
        </div>
    );
}

export default App;