import React from 'react';
import './Nodes.css'
import { useState } from 'react';



const Nodes = () => {
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  const onChange = e => {
    const target = e.target;
    const id = target.dataset.id;
    const check = parseInt(target.value, 10);
    if (!isNaN(check)) {
      switch (id) {
        case 'first':
          setFirst(check);
          break;

        case 'second':
          setSecond(check);
          break;
      }
    }
  }

  return (
    <div className='main'>
      <div>
        <p>Result 1: {first}</p>
        <p>Result 2: {second}</p>
      </div>
      <br />
      <h2>NOTE: Enter Only Digits In the Input Field</h2>
      <div className='main-input'>
        <span>Input for Result 1: </span>
        <input type="text" data-id="first" onChange={onChange} />
      </div>
      <br />
      <div>
        <span>Input for Result 2: </span>
        <input type="text" data-id="second" onChange={onChange} />
      </div>
    </div>
  );
};

export default Nodes;
