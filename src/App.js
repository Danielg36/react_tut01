import "./App.css";
import Header from "./Header";
import AddItem from "./AddItem";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from "react";

function App() {

  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      label: "label text one",
    },
    {
      id: 2,
      checked: false,
      label: "label text two",
    },
    {
      id: 3,
      checked: true,
      label: "label text three",
    },
  ]);

  const [newItem, setNewItem] = useState('');

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
  }

  const setAndSaveItems = (saveItemsList) => {
    localStorage.setItem('shoppingList', JSON.stringify(saveItemsList));
  }

  const handleChecked = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  };


  const formSubmit = (e)=> {
    e.preventDefault();
    console.log(newItem);
   setNewItem('');
  }

  return (
    <div className="App">
      <Header title="Groceries List" />
      <AddItem 
        newItem={newItem}
        setNewItem={setNewItem}
        formSubmit={formSubmit}
      />
      <Content items={items} handleChecked={handleChecked} handleDelete={handleDelete}/>
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
