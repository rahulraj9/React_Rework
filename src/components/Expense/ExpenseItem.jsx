import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate'
function ExpenseItem(props) {
 

   
    return (
    <div className="expense_item">
        <ExpenseDate expense_date = {props.expense_date}/>
        <div className = "expense_item_description">
            <h2>{props.expense_item_description}</h2>
            <div className = "expense_item_price">${props.expense_item_price}</div>
        </div>
    </div>
    )
}

export default ExpenseItem