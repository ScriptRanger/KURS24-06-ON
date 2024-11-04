import logo from './logo.svg';
import './App.css';

function App() {
  const heute = "Heute ist ein schöner Tag";
 
  return (
    <>
    <h1>willkommen zu meiner ersten React-App</h1>
    <h2>{heute}</h2>
    <h3>Die Summe von 2 + 2 ist {2 + 2}</h3>
    <button onClick={() => alert('Hallo, dies ist eine Nachricht!')}>Klicke mich</button>
    </>
  );
  
}

export default App;
