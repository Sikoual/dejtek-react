import "./App.css";
import { Button } from './Component/Button.tsx';

function App() {
  return (
    <Button handleClick={() => console.log('cliqué depuis le composant' +
      ' enfant')}/>
  );
}

export default App;
