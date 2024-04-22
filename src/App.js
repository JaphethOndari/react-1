import Count from "./assets/Count";
import './App.css'
function App() {
  const increment = () => {
    document.getElementById("count").innerText = parseInt(document.getElementById("count").innerText) + 1;
  };
  const decrement = () => {
    document.getElementById("count").innerText = parseInt(document.getElementById("count").innerText) - 1;
  };
  const reset = () => {
    document.getElementById("count").innerText = parseInt(document.getElementById("count").innerText) * 0;
  };
  return (
    <div class= "body">
      <div class="container">
      <h1 class='h1'>Counter App</h1>
      <Count increment={increment} decrement={decrement} reset={reset} />
      </div>
    </div>
  )
}
export default App