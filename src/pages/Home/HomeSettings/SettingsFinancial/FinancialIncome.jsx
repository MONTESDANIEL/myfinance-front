import React, { useState } from 'react';
import InputCash from "@components/inputCash";

const FinancialIncome = () => {

    const [income, setIncome] = useState("");
    const [incomeType, setIncomeType] = useState("");
    const [incomeFrequency, setIncomeFrequency] = useState("");
    const [firstBiweeklyIncomeDate, setFirstBiweeklyIncomeDate] = useState("");
    const [secondBiweeklyIncomeDate, setSecondBiweeklyIncomeDate] = useState("");
    const [monthlyIncomeDate, setMonthlyIncomeDate] = useState("");
    const [weeklyIncomeDay, setWeeklyIncomeDay] = useState("");

    const handleIncomeDayChange = (e, type) => {
        const value = parseInt(e.target.value, 10);

        if (value < 1 || value > 31) {
            alert("Por favor ingresa un día entre 1 y 31");
        } else {
            if (type === "monthly") {
                setMonthlyIncomeDate(value); // Para fecha mensual
            } else if (type === "biweekly") {
                setFirstBiweeklyIncomeDate(value); // Para el primer día quincenal
            }
        }
    };

    const handleIncomeTypeChange = (e) => {
        setIncomeType(e.target.value);
    };

    const handleIncomeFrequencyChange = (e) => {
        setIncomeFrequency(e.target.value);
    };

    return (
        <div className="bg-body-tertiary rounded px-2 py-3 shadow-sm mb-4">
            <div className="text-center">
                <h3 className="mb-1">Ajustes de Ingresos</h3>
                <p className="text-muted d-none d-md-block">Registra tus ingresos, establece la frecuencia y fecha de ingreso.</p>
                <hr />
            </div>

            <form>
                <div className="mb-3">
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
                            <div className="col-mb-6 mb-3">
                                <label htmlFor="incomeAmount" className="form-label">Ingreso Aproximado</label>
                                <InputCash
                                    value={income}
                                    placeholder="Ingresa un aproximado de tu ingreso"
                                    onChange={(value) => setIncome(value)}
                                />
                            </div>
                            <div className="col-mb-6 mb-3">
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
                                        <label htmlFor="monthlyIncomeDate" className="form-label">Fecha de Ingreso</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="monthlyIncomeDate"
                                            min="1" max="31"
                                            value={monthlyIncomeDate}
                                            onChange={(e) => {
                                                setMonthlyIncomeDate(e.target.value);
                                                handleIncomeDayChange;
                                            }}
                                            required
                                        />
                                        <small className='ms-1'>Indica el día del mes en que recibes tu ingreso</small>
                                    </div>
                                )}

                                {incomeFrequency === "quincenal" && (
                                    <div className="mb-3">
                                        <label htmlFor="biweeklyIncomeDate" className="form-label">Fecha de Ingreso</label>
                                        <div className="row">
                                            <div className="col-12 col-md-6 mb-3">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="firstBiweeklyIncomeDate"
                                                    min="1" max="31"
                                                    value={firstBiweeklyIncomeDate}
                                                    onChange={(e) => {
                                                        setFirstBiweeklyIncomeDate(e.target.value);
                                                        handleIncomeDayChange;
                                                    }}
                                                    required
                                                />
                                                <small className='ms-1'>Indica el día en que recibes el primer ingreso</small>
                                            </div>
                                            <div className="col-12 col-md-6 mb-3">
                                                <input
                                                    type="number"
                                                    className="form-control"
                                                    id="secondBiweeklyIncomeDate"
                                                    min="1" max="31"
                                                    value={secondBiweeklyIncomeDate}
                                                    onChange={(e) => {
                                                        setSecondBiweeklyIncomeDate(e.target.value);
                                                        handleIncomeDayChange;
                                                    }}
                                                    required
                                                />
                                                <small className='ms-1'>Indica el día en que recibes el segundo ingreso</small>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {incomeFrequency === "semanal" && (
                                    <div className="mb-3">
                                        <label htmlFor="weeklyIncomeDay" className="form-label">Día de la Semana</label>
                                        <select
                                            className="form-select"
                                            id="weeklyIncomeDay"
                                            value={weeklyIncomeDay}
                                            onChange={(e) => setWeeklyIncomeDay(e.target.value)}
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
                <span>Agregar Ingresos</span>
                <i className="bi bi-currency-dollar ms-2"></i>
            </button>
        </div>
    );
};

export default FinancialIncome;