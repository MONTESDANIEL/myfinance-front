import React, { useState } from 'react';

const SettingsFinancial = () => {
    const [incomeType, setIncomeType] = useState(""); // Estado para manejar el tipo de ingreso
    const [incomeFrequency, setIncomeFrequency] = useState(""); // Estado para manejar la frecuencia de ingreso
    const [selectedDay, setSelectedDay] = useState(""); // Estado para manejar el día seleccionado

    // Función para manejar el cambio en el tipo de ingreso
    const handleIncomeTypeChange = (e) => {
        setIncomeType(e.target.value);
        // Restablecer la frecuencia y el día cuando el tipo de ingreso cambia
        setIncomeFrequency("");
        setSelectedDay("");
    };

    // Función para manejar el cambio en la frecuencia de ingreso
    const handleIncomeFrequencyChange = (e) => {
        setIncomeFrequency(e.target.value);
        // Si la frecuencia es diaria, restablecemos el día
        if (e.target.value === "diario") {
            setSelectedDay("");
        }
    };

    const [expenseCategory, setExpenseCategory] = useState("");
    const [fixedExpense, setFixedExpense] = useState("");
    const [variableExpense, setVariableExpense] = useState("");
    const [expenseDate, setExpenseDate] = useState("");
    const [expenseList, setExpenseList] = useState([]);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (expenseCategory && (fixedExpense || variableExpense) && expenseDate) {
            setExpenseList([
                ...expenseList,
                { category: expenseCategory, fixedExpense, variableExpense, expenseDate }
            ]);
            setFixedExpense("");
            setVariableExpense("");
            setExpenseDate("");
            setExpenseCategory("");
        }
    };

    return (
        <div className="bg-dark-subtle rounded p-4">

            <div className="text-center mb-4">
                <h1>Financiero</h1>
                <p className="text-secondary">Gestiona tus ingresos, gastos y ajustes financieros de forma sencilla</p>
            </div>

            {/* Sección de Ajustes de Ingresos */}
            <div className="bg-body-tertiary  rounded p-3 shadow-sm mb-4">
                <h3 className="text-center mb-3">Ajustes de Ingresos</h3>
                <p className="text-center text-muted mb-4">Registra tus ingresos, establece la frecuencia y fecha de ingreso.</p>

                <form>
                    <div className="mb-3">
                        {/* Selección de tipo de ingreso */}
                        <label htmlFor="incomeType" className="form-label">Tipo de Ingreso</label>
                        <select
                            className="form-select"
                            id="incomeType"
                            value={incomeType}
                            onChange={handleIncomeTypeChange}
                        >
                            <option value="" disabled>Selecciona</option>
                            <option value="fijo">Ingreso Fijo</option>
                            <option value="variable">Ingreso Variable</option>
                        </select>
                    </div>

                    {incomeType && (
                        <>

                            <div className="row">
                                <div className="col-6 mb-3">
                                    {/* Ingreso Aproximado */}
                                    <label htmlFor="incomeAmount" className="form-label">Ingreso Aproximado</label>
                                    <input type="number" className="form-control" id="incomeAmount" placeholder="Ingresa un aproximado de tu ingreso" />
                                </div>
                                <div className="col-6 mb-3">
                                    {/* Frecuencia de Ingreso */}
                                    <label htmlFor="incomeFrequency" className="form-label">Frecuencia de Ingreso</label>
                                    <select
                                        className="form-select"
                                        id="incomeFrequency"
                                        value={incomeFrequency}
                                        onChange={handleIncomeFrequencyChange}
                                    >
                                        <option value="" disabled>Selecciona</option>
                                        <option value="mensual">Mensual</option>
                                        <option value="semanal">Semanal</option>
                                        <option value="quincenal">Quincenal</option>
                                        <option value="diario">Diario</option>
                                    </select>
                                </div>
                            </div>
                            {/* Dependiendo de la frecuencia, mostrar los campos correspondientes */}
                            {incomeFrequency && (
                                <>
                                    {incomeFrequency === "mensual" && (
                                        <div className="mb-3">
                                            {/* Fecha de Ingreso (Mensual) */}
                                            <label htmlFor="monthlyIncomeDate" className="form-label">Fecha de Ingreso</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="monthlyIncomeDate"
                                                placeholder="Indica el día del mes en que recibes tu ingreso" />
                                        </div>
                                    )}

                                    {incomeFrequency === "quincenal" && (
                                        <div className="mb-3">
                                            {/* Fecha de Ingreso (Quincenal) */}
                                            <label htmlFor="biweeklyIncomeDate" className="form-label">Fecha de Ingreso</label>
                                            <div className="row">
                                                <div className="col-12 col-md-6 mb-3">
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="firstBiweeklyIncomeDate"
                                                        placeholder="Indica el día en que recibes el primer ingreso"
                                                        min="1"
                                                        max="31"
                                                        required
                                                    />
                                                </div>
                                                <div className="col-12 col-md-6 mb-3">
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="secondBiweeklyIncomeDate"
                                                        placeholder="Indica el día en que recibes el segundo ingreso"
                                                        min="1"
                                                        max="31"
                                                        required
                                                    />
                                                </div>
                                            </div>

                                        </div>
                                    )}

                                    {incomeFrequency === "semanal" && (
                                        <div className="mb-3">
                                            {/* Día de Ingreso (Semanal) */}
                                            <label htmlFor="weeklyIncomeDay" className="form-label">Día de la Semana</label>
                                            <select
                                                className="form-select"
                                                id="weeklyIncomeDay"
                                                value={selectedDay}
                                                onChange={(e) => setSelectedDay(e.target.value)}
                                            >
                                                <option value="" disabled>Selecciona un día</option>
                                                <option value="lunes">Lunes</option>
                                                <option value="martes">Martes</option>
                                                <option value="miercoles">Miércoles</option>
                                                <option value="jueves">Jueves</option>
                                                <option value="viernes">Viernes</option>
                                                <option value="sabado">Sábado</option>
                                                <option value="domingo">Domingo</option>
                                            </select>
                                        </div>
                                    )}
                                </>
                            )}
                        </>
                    )}
                </form>
                <button type="submit" className="btn btn-primary w-100">
                    <span>Guardar</span>
                    <i className="bi bi-save ms-2"></i>
                </button>
            </div>

            {/* Sección de Gestión de Gastos */}
            <div className="bg-body-tertiary rounded p-3 shadow-sm">
                <h3 className="text-center mb-3">Gestión de Gastos</h3>
                <p className="text-center text-muted mb-4">
                    Clasifica tus gastos y define los fijos y variables, como arriendos o gastos de mercado.
                </p>

                <form onSubmit={handleFormSubmit}>
                    <div className="mb-3">
                        {/* Clasificación de Gastos */}
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

                    <div className="mb-3">
                        {/* Gasto Fijo */}
                        <label htmlFor="fixedExpense" className="form-label">Monto del gasto</label>
                        <input
                            type="number"
                            className="form-control"
                            id="fixedExpense"
                            value={fixedExpense}
                            onChange={(e) => setFixedExpense(e.target.value)}
                            placeholder="Ej. 200"
                            min="0"
                        />
                    </div>

                    <div className="mb-3">
                        {/* Fecha del Gasto */}
                        <label htmlFor="expenseDate" className="form-label">Dia del Gasto</label>
                        <input
                            type="number"
                            className="form-control"
                            id="expenseDate"
                            value={expenseDate}
                            onChange={(e) => setExpenseDate(e.target.value)}
                            placeholder="Indica el día del mes en que realizas el gasto."
                            min="1"
                            max="31"
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Agregar Gasto</button>
                </form>

                {/* Lista de Gastos */}
                {expenseList.length > 0 && (
                    <div className="mt-4">
                        <h4 className="text-center">Lista de Gastos</h4>
                        <ul className="list-group">
                            {expenseList.map((expense, index) => (
                                <li key={index} className="list-group-item">
                                    <strong>{expense.category.charAt(0).toUpperCase() + expense.category.slice(1).toLowerCase()}</strong><br />
                                    Monto: ${expense.fixedExpense}<br />
                                    Fecha: {expense.expenseDate}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

        </div >
    );
};

export default SettingsFinancial;
