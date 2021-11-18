import React from 'react'
import './ExpenseDate.css'

function ExpenseDate(props) {
    const month = props.expense_date.toLocaleString('en-US',{month:'long'})
    const day =  props.expense_date.toLocaleString('en-US',{day:'2-digit'})
    const year =  props.expense_date.getFullYear()
    return (
        <div className='expense_date' >
            <div className='expense_date_month'>{month}</div>
            <div className='expense_date_year'>{day}</div>
            <div className='expense_date_day'>{year}</div>
        </div>
    )
}
export default  ExpenseDate
