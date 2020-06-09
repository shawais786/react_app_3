import React from 'react';
import './Hello.css'
import './App.css';

function Hi(props) {
return <div>
  
  <h1>Salam!</h1>
  <h2 className="myname"> My name is <strong>{props.name}</strong></h2>
    I'm an Electrical Engineer.
  <h4>Calculating JS Expression below:</h4>
  10+5={10+5}
      </div>

}

export default Hi;
