import { FaEdit, FaTrash } from 'react-icons/fa'

const SingleItem = ({ id, text, deleteItem, editItem }) => {
  return (
    <article className="item">
        <p>{text}</p>
        <div>
            <button
                className="edit-btn"
                onClick={() => editItem(id)}                
            >
            <FaEdit />
            </button>
            <button
                className="delete-btn"
                onClick={() => deleteItem(id)}
            >
            <FaTrash />
            </button>
        </div>
    </article>
  )
}
export default SingleItem