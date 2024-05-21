import { useState } from "react"
import { toast } from "react-toastify";

const AddItem = ({ AddNewItem, setIsEdit, isEdit, setItems, items }) => {
 const [text, setText] = useState("");

 const handleSubmit = (e) => {
    e.preventDefault();

    if (text === "") {
        toast.error("Enter a valid value!")
        return;
    }
    else if (text && isEdit) {
        setItems(items.map((item) => item.edit === isEdit ? 
                { ...item, text: text, edit: false } : item)
        );
        setIsEdit(!isEdit);
        setText("");
        toast.success("Item Edited!")
    }
    else {
        AddNewItem(text);
        setText("");
        toast.success("Item Add!")
    }
 }

  return (
    <div>
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input 
                    type="text"
                    value={text}
                    placeholder="Type Some Item..."
                    onChange={(e) => setText(e.target.value)}
                    />
                  <button
                  >
                  {isEdit ? "Edit Item" : "Add Item"}
                  </button>
                </div>
            </form>
        </div>
    </div>
  )
}
export default AddItem