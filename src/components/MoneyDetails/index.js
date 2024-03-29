import './index.css'

const MoneyDetails = props => {
  const money = 0
  return (
    <div className="money-details-container">
      <div className="balance-container">
        <img
          alt="balance"
          className="details-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div>
          <p className="details-text">Your Balance</p>
          <p className="details-money" data-testid="balanceAmount">
            Rs {}
          </p>
        </div>
      </div>
      <div className="income-container">
        <img
          className="details-img"
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />
        <div>
          <p className="details-text">Your Income</p>
          <p className="details-money" data-testid="incomeAmount">
            Rs {}
          </p>
        </div>
      </div>

      <div className="expenses-container">
        <img
          className="details-img"
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <div>
          <p className="details-text">Your Expenses</p>
          <p className="details-money" data-testid="expensesAmount">
            Rs {}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
