import './App.css';
import { useState } from 'react';

function App() {

  const [weight, setWeight] = useState(90);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState(0);
  
  //  const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
  const numbers = new Array(24).fill(null).map((_,i) => i+1);

  function calculate(e) {

    let proms = 0;
    let litres = bottles*0.33;
    let burning = weight/10;
    let grams = ((litres)*8*4.5)-((burning)*time);

    if(gender === 'male') {
      proms = grams/(weight*0.7);
    } else {
      proms = grams/(weight*0.6);
    }
    if(proms < 0) {
      proms = 0;
    }
    setResult(proms);
  }
  

  return (
    <div class="content">
      <h3>Alkometri</h3>
      <div class="input">
        <label>Paino: </label><input name="weight" type="number" defaultValue={weight} onChange={e => setWeight(e.target.value)}></input>
      </div>
      <div class="input">
        <label>Pulloja: </label>
        <select defaultValue={bottles} onChange={e => setBottles(e.target.value)}>
          {
            numbers.map(number => (
              <option value={number}>{number} pulloa</option>
            ))
          }
        </select>
      </div>
      <div class="input">
        <label>Aika: </label>
        <select defaultValue={time} onChange={e => setTime(e.target.value)}>
          {
            numbers.map(number => (
              <option value={number}>{number} tuntia</option>
            ))
          }
        </select>
      </div>
      <div class="input">
        <label>Gender: </label>
        <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/><label>Male</label>
        <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/><label>Female</label>
    </div>
    
    <div class="input">
      <button onClick={(calculate)}>Laskeppa</button>
    </div>

    <div class="input">
      <label>Tulos: </label><output>{result.toFixed(2)} promillea</output><br />
    </div>
      
    </div>
    
  );
}

export default App;
