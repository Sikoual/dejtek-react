import "./App.css";

function App() {
  const age = 18;
  let content = '';

  if (age >= 18) {
    content = 'Je suis majeur';
  } else {
    content = 'Je suis mineur';
  }

  return <div className="flex justify-center items-center">
    <h1 className="text-emerald-700">
      {content}
    </h1>
  </div>
}

export default App;
