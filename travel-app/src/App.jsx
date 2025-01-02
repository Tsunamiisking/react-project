import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg"; // to import
import "./index.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1> 🌴 Far away 💼</h1>;
}

function Form() {
  const [description, setDescription] = useState("")
  const [selectedOption, setSelectedOption] = useState(1)
  const handeSubmit = (e) => {
    e.preventDefault()

    if(!description) return;

    const newItem = {
      id: Date.now(),
      description,
      quantity: selectedOption,
      packed: false,

    }
    // initialItems.push(newItem)
    setDescription("")
    setSelectedOption(1)

    // console.log(initialItems)
    // console.log(selectedOption)
  }
  return (
    <form className="add-form" onSubmit={handeSubmit}>
      <h3>What do you need for your 😊 trip</h3>
      <select name="itemNumber" value={selectedOption} onChange={(e) => setSelectedOption(Number(e.target.value))} >
        {Array.from({length: 20}, (currentItem, indexOfItem) => indexOfItem + 1).map(currNum => <option key={currNum} value={currNum}>{currNum}</option>)}
      </select>

      <input type="text" placeholder="Item..." value={description} onChange={(e) => setDescription(e.target.value)} />
      <button> Add</button>
    </form>
  );
}
function PackingList({}) {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? {textDecoration: "line-through"} : {}}>
        
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items on your list, and you already packed X (X%)</em>
    </footer>
  );
}
