import "./styles.css"
function App() {
  

  return (
    <>
     <form action="">
      <div>
        <label htmlFor="item">New Item</label>
        <input type="text"  className="item"/>
      </div>
      <button className="addBtn">Add</button>
     </form>
     <h1 className="header">ToDo List</h1>
     <ul className="todoList">
      <li>
        <label><input type="checkbox" />Item 1</label>
        <button>Delete</button>
      </li>
      <li>
        <label><input type="checkbox" />Item 1</label>
        <button>Delete</button>
      </li>
     </ul>
    </>
  )
}

export default App
