import React, { useState } from 'react';

import InputCash from "@components/inputCash";

const FinancialExpense = () => {

    const [expenseCategory, setExpenseCategory] = useState("");
    const [fixedExpense, setFixedExpense] = useState("");
    const [expenseDate, setExpenseDate] = useState("");
    const [expenseList, setExpenseList] = useState([]);

    const handleExpenseDateChange = (e) => {
        const value = parseInt(e.target.value, 10);
        if (value < 1 || value > 31) {
            alert("Por favor ingresa un día entre 1 y 31");
        } else {
            setExpenseDate(value);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const expense = {
            category: expenseCategory,
            fixedExpense,
            expenseDate
        };
        setExpenseList([...expenseList, expense]);
    };

    return (
        <div className="bg-body-tertiary rounded px-2 py-3 shadow-sm">
            <div className="text-center">
                <h3 className="mb-1">Gestión de Gastos Frecuentes</h3>
                <p className="text-muted d-none d-md-block">Clasifica tus gastos y define los fijos y variables, como arriendos o gastos de mercado.</p>
                <hr />
            </div>

            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="expenseCategory" className="form-label">Clasificación de Gastos</label>
                    <select
                        className="form-select"
                        id="expenseCategory"
                        value={expenseCategory}
                        onChange={(e) => setExpenseCategory(e.target.value)}
                        required
                    >
                        <option value="" disabled>Selecciona una categoría</option>
                        <option value="vivienda">Vivienda</option>
                        <option value="alimentacion">Alimentación</option>
                        <option value="transporte">Transporte</option>
                        <option value="otros">Otros</option>
                    </select>
                </div>

                <div className="row mb-3">
                    <div className="col-md-6 mb-3">
                        <label htmlFor="fixedExpense" className="form-label">Monto del gasto</label>
                        <InputCash
                            value={fixedExpense}
                            onChange={(value) => setFixedExpense(value)}
                        />
                        <small className="ms-1">Indica el monto aproximado del gasto.</small>
                    </div>

                    <div className="col-md-6 mb-3">
                        <label htmlFor="expenseDate" className="form-label">Día del Gasto</label>
                        <input
                            type="number"
                            className="form-control"
                            id="expenseDate"
                            value={expenseDate}
                            onChange={handleExpenseDateChange}
                            min="1"
                            max="31"
                            required
                        />
                        <small className="ms-1">Indica el día del mes en que realizas el gasto.</small>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                    <span>Agregar Gasto</span>
                    <i className="bi bi-cash-coin ms-2"></i>
                </button>
            </form>

            {expenseList.length > 0 && (
                <div className="mt-4">
                    <h4 className="text-center">Lista de Gastos</h4>
                    <ul className="list-group">
                        {expenseList.map((expense, index) => (
                            <li key={index} className="list-group-item">
                                <strong>{expense.category.charAt(0).toUpperCase() + expense.category.slice(1).toLowerCase()}</strong><br />
                                Gasto Fijo: {expense.fixedExpense} - Día: {expense.expenseDate}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};


export default FinancialExpense;