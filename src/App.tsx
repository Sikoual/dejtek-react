import { Button } from "./components/Button.tsx";

function App() {
  return <Button bgColor="bg-neutral-900" textColor="text-neutral-200" >Click me from parent</Button>
    ;
}

// function App() {
//   return <Button styledButton = {{bgColor: 'bg-neutral-200', textColor: 'text-neutral-200'}}/>
// }

export default App;
