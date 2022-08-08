import logo from './logo.svg';
import './App.css';
import TikTacToe from './TicTacToe/TikTacToe';

function App() {
  return (
    
    <div className="App">
            <div className='header'><b>WELCOME TO TIK TAC TOE GAME</b></div>
      <TikTacToe/>
      <div className='footer'><b>HOME    |     ABOUT US         | TERMS & POLICY </b></div>
    </div>
  );
}

export default App;
