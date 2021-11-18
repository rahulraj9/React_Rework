import React from 'react'
import './Expenses.css'
import ExpenseItem from './ExpenseItem'

function Expenses(props) {
    return (
        <div className = 'expenses'>
            <ExpenseItem expense_date={props.expense_data[0].date}
                expense_item_price={props.expense_data[0].expense_item_price}
                expense_item_description={props.expense_data[0].expense_item_description} />
            <ExpenseItem expense_date={props.expense_data[1].date}
                expense_item_price={props.expense_data[1].expense_item_price}
                expense_item_description={props.expense_data[1].expense_item_description} />
        </div>
    )
}
export default Expenses
