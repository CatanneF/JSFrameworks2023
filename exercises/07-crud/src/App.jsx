import { useState } from "react";
import "./App.css";

const GroceryList = () => {

  const [groceryItems, setGroceryItems] = useState([]);
  const [item, setItem] = useState("");
  const [cost, setCost] = useState("");
    
    const handleSubmit = e => {
      e.preventDefault(); 

      const row = {item: item, cost: cost};
      const newGroceryList = [...groceryItems, row];
      setGroceryItems(newGroceryList);
    }

    //const deleteItem = (index) => {
      //groceryItems = groceryItems.filter(
      //  (item, cost, currentIndex) => currentIndex !== index)
      // };

      let totalCost = () => {
        
      };

      const clearList = () => {
          setGroceryItems([])
      }

      const deleteItem = (index) => {
        const newList = groceryItems.filter((row, index) => {

        })

      }


  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form method="POST" className="row g-3" onSubmit={handleSubmit}>
          <div className="col">
            <input
              className="form-control"
              type="text"
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
          </div>
          <div className="col">
            <input
              className="form-control"
              type="number"
              min="0"
              step=".01"
              placeholder="Cost of grocery item..."
              aria-label="Cost of grocery item..."
              value={cost}
              onChange={(e) => setCost((e.target.value))}
            />
          </div>
          <div className="col-md-auto">
            <button type="submit" className="btn btn-success">
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="card card-body border-white">
        <h1 className="h4">Grocery List</h1>
        <table className="table table-sm">
          <thead>
            <tr>
              <th>Item</th>
              <th>Cost</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          
            {groceryItems.map((row, index) => {
              return (
                
                    <div className="grocery-list-item" key={`row-${index}`}>
                      <tr>
                    <td>{row.item}</td>
                    <td>${row.cost}</td>
                    <td>
                      <button aria-label="Delete" title="Delete" onClick={deleteItem(index)}>
                        &times;
                      </button>
                    </td>
                  </tr>
                    </div>
              )} 
              )
            }
          </tbody>
        </table>
        <p className="lead">
          <strong>Total Cost: {/* Complete me */}</strong>
        </p>
        <div className="d-flex justify-content-end">
          <button type="button" className="btn btn-outline-success" onClick={clearList}>
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroceryList;

