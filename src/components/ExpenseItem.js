import "./ExpenseItem.css"

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div>2022-08-29</div>
            <div className="expense-item__description">
                <h2>Car Insurance</h2>
                <div className="expense-item__price">USD 56.34</div>
            </div>
        </div >
    );
}

export default ExpenseItem;