import {Component} from 'react'
import {v4} from 'uuid'
import TransactionItem from '../TransactionItem'
import MoneyDetails from '../MoneyDetails'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {transactionsList: [], titleInput: '', amountInput: ''}

  render() {
    const {transactionsList} = this.state
    return (
      <div>
        <div className="header-container">
          <h1 className="heading">Hi, Richard</h1>
          <p className="header-content">
            Welcome back to your
            <span className="money-manager-text">Money Manager</span>
          </p>
        </div>
        <MoneyDetails />
        <div className="transaction-details">
          <form className="transaction-form" onSubmit={this.onAddTransaction}>
            <h1 className="transaction-header">Add Transaction</h1>
            <label className="input-label" htmlFor="title">
              TITLE
            </label>
            <input
              type="text"
              id="title"
              className="input"
              placeholder="TITLE"
            />
            <label className="input-label" htmlFor="amount">
              AMOUNT
            </label>
            <input
              type="text"
              id="amount"
              className="input"
              placeholder="AMOUNT"
            />
            <label className="input-label" htmlFor="select">
              TYPE
            </label>
            <select id="select" className="input">
              {transactionTypeOptions.map(eachOption => (
                <option value={eachOption.optionId} key={eachOption.optionId}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="button">
              Add
            </button>
          </form>
          <div className="history-transaction">
            <h1 className="transaction-header">History</h1>
            <div className="transactions-table-container">
              <ul className="transactions-table">
                <li className="table-header">
                  <p className="table-header-cell">Title</p>
                  <p className="table-header-cell">Amount</p>
                  <p className="table-header-cell">Type</p>
                </li>
                {transactionsList.map(eachTransaction => (
                  <TransactionItem
                    key={eachTransaction.id}
                    transactionsDetails={eachTransaction}
                    deleteTransaction={this.deleteTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
