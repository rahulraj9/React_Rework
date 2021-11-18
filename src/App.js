// import './App.css';
import Expenses from "./components/Expense/Expenses";

function App() {
  const expense_data = [
    {
      date: new Date(2020, 11, 18),
      expense_item_description: 'car insurance',
      expense_item_price: 320
    },
    {
      date: new Date(2021, 9, 21),
      expense_item_description: 'buying new bike',
      expense_item_price: 1800
    }
  ]
  return (

    <div className="App">
      <Expenses expense_data = {expense_data}/>
    </div>
  );
}

export default App;
