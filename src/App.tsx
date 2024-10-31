import "./App.css";

function App() {
  const recipes = [{id: 1, title: 'Pizza'}, {id: 2, title: 'Lasagne'}, {id: 3, title: 'Kebab'}]
  return (
    <ul>
      {recipes.map((recipe) => <li key={recipe.id}>{recipe.title}</li>)}
    </ul>
  );
}

export default App;
