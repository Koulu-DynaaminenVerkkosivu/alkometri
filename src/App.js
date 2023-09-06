import logo from './logo.svg';
import './App.css';

function App() {
  
//  const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
  const numbers = new Array(24).fill(null).map((_,i) => i+1)


  return (
    <>
      <h3>Alkometri</h3>
      <select>
        {
          numbers.map(number => (
            <option>{number} pulloa</option>
          ))
        }
      </select>
      
    </>
    
  );
}

export default App;
