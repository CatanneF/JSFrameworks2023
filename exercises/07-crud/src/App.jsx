import { useState } from "react";
import "./App.css";

const GroceryList = () => {

  const [groceryList, setGroceryList] = useState([]);
  const [item, setItem] = useState("");
  const [cost, setCost] = useState("");
  const [hasError, setHasError] = useState(false);

  const addToList = () => {
    setGroceryList([...groceryList, {item, cost: parseFloat(cost)},
    ])
    setItem("")
    setCost("")
  };

  const deleteItem = (indexToDelete) => {
      setGroceryList(
        [...groceryList].filter((_, index) => index !== indexToDelete)
      );
  };  
  
  const clearList = () => {
    setGroceryList([])
  };

  const totalCost = () => {
    return groceryList.reduce((total, item) => {
      return total + item.cost;
    }, 0);     
  };

    

  const handleSubmit = e => {
    e.preventDefault(); 
    if (item && (cost || cost === 0)) {
      addToList();
      setHasError(false);
    } else setHasError(true);
  }; 


  return (
    <div className="container">
      <div className="card card-body bg-light mb-2">
        <form method="POST" className="row g-3" onSubmit={handleSubmit}>
          <div className="col">
            <input
              className={
                hasError && !item ? "is-invalid form-control" : "form-control"
              }
              type="text"
              placeholder="Name of grocery item..."
              aria-label="Name of grocery item..."
              value={item}
              onChange={(e) => setItem(e.target.value)}
            />
            {hasError && !item && (
              <div className="invalid-feedback">
                Please enter a grocery item
              </div>
            )}
          </div>
          <div className="col">
            <input
              className={
                hasError && !cost ? "is-invalid form-control" : "form-control"
              }
              type="number"
              min="0"
              step=".01"
              placeholder="Cost of grocery item..."
              aria-label="Cost of grocery item..."
              value={cost}
              onChange={(e) => setCost(parseFloat(e.target.value))}
            />
            {hasError && !cost && (
              <div className="invalid-feedback">Please enter the cost</div>
            )}
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
          
            {groceryList.map((row, index) => {
              return (
                  <tr key={`item-${index}`}>
                    <td>{row.item}</td>
                    <td>${row.cost.toFixed(2)}</td>
                    <td>
                      <button 
                        aria-label="Delete" 
                        title="Delete" 
                        className="btn"
                        onClick={deleteItem(index)}>
                        &times;
                      </button>
                    </td>
                  </tr>             
              )
            })};
          </tbody>
        </table>
        <p className="lead">
          <strong>Total Cost: ${totalCost().toFixed(2)}</strong>
        </p>
        <div className="d-flex justify-content-end">
          <button 
            type="button" 
            className="btn btn-outline-success" 
            onClick={clearList}>
            Clear
          </button>
        </div>
      </div>
    </div>
  )
};

export default GroceryList;

