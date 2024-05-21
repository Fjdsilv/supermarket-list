import { useState } from "react";
import Header from "./components/Header";
import List from "./components/List";
import AddItem from "./components/AddItem";
import data from "./assets/data/data";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

const App = () => {
  const [items, setItems] = useState(data);
  const [isEdit, setIsEdit] = useState(false);

  const AddNewItem = (text) => {
    const newItem = {
      id: nanoid(),
      text: text,
      edit: false,
    }
    setItems([ ...items, newItem ]);
  }

  const deleteItem = (id) => {
    const newItems = items.filter(item => item.id !== id);
    setItems(newItems);
    toast.error("Item deleted!");
  }

  const editItem = (id) => {
    setItems(items.map((item) => item.id === id ? { ...item, edit: !item.edit } : item));
    setIsEdit(!isEdit);
    toast.warn("Enter a new value!");
  }

  return (
    <div>
      <Header />
      <main>
        <AddItem 
          AddNewItem={AddNewItem}
          setIsEdit={setIsEdit}
          isEdit={isEdit}
          setItems={setItems}
          items={items}
        />
        <List 
          items={items} 
          deleteItem={deleteItem}
          editItem={editItem}
          setItems={setItems}
        />

      </main>
    </div>
  )
}
export default App