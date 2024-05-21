import SingleItem from "./SingleItem"

const List = ({ items, deleteItem, editItem, setItems }) => {
    if (items.length === 0) {
        return (
        <section>
            <div className="container">
            </div>
        </section>
        )
    }

  return (
    <section>
        <div className="container">
            {
                items.map(item => {
                    return (
                        <SingleItem 
                            key={item.id} 
                            {...item}
                            deleteItem={deleteItem}
                            editItem={editItem}
                        />
                    )
                })
            }
            <div className="clear-list">
                <button 
                    className="btn"
                    onClick={() => setItems([])}
                >
                    Clean List
                </button>
            </div>
        </div>
    </section>
  )
}
export default List