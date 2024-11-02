import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { dueData, debtTypes } from '@data/dueData.js'


const ManageDue = () => {
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('');
    const [customAmountType, setCustomAmountType] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [totalInstallments, setTotalInstallments] = useState('');
    const [currentInstallment, setCurrentInstallment] = useState('');

    const [openDebtIds, setOpenDebtIds] = useState([]);

    const toggleDetails = (id) => {
        if (openDebtIds.includes(id)) {
            setOpenDebtIds(openDebtIds.filter((debtId) => debtId !== id));
        } else {
            setOpenDebtIds([...openDebtIds, id]);
        }
    };

    return (
        <>
            <div className="text-center text-ligth d-lg-none">
                <h1>Control de deudas</h1>
                <hr />
            </div>

            <div className="container-fluid rounded p-4 mb-3 bg-body-tertiary">
                <h2 className="text-center">Agregar nueva deuda</h2>
                <p className="text-muted text-center">Ingresa los detalles de la deuda.</p>
                <form className="row g-3">
                    <div className="col-md-12">
                        <label className="form-label">Título de la deuda</label>
                        <input
                            type="text"
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Monto de la deuda</label>
                        <input
                            type="number"
                            className="form-control"
                            min="0"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Fecha límite</label>
                        <input
                            type="date"
                            className="form-control"
                            value={dueDate}
                            onFocus={(e) => (e.target.type = 'date')}
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">Cuotas diferidas</label>
                        <input
                            type="number"
                            className="form-control"
                            min="0"
                            value={totalInstallments}
                            onChange={(e) => setTotalInstallments(e.target.value)}
                        />
                    </div>
                    <div className="col-md-3">
                        <label className="form-label">Cuota actual</label>
                        <input
                            type="number"
                            className="form-control"
                            min="0"
                            value={currentInstallment}
                            onChange={(e) => setCurrentInstallment(e.target.value)}
                        />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Tipo de deuda</label>
                        <select className="form-control" value={type} onChange={(e) => setType(e.target.value)}>
                            {debtTypes.map((debtType) => (
                                <option key={debtType.value} value={debtType.value}>
                                    {debtType.label}
                                </option>
                            ))}
                        </select>
                    </div>
                    {type === 'custom' && (
                        <div className="col-md-12">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Especificar otro tipo de deuda"
                                value={customAmountType}
                                onChange={(e) => setCustomAmountType(e.target.value)}
                            />
                        </div>
                    )}
                    <div className="col-12">
                        <button type="button" className="btn btn-primary">
                            <span>Agregar deuda</span>
                            <i className="bi bi-plus-circle-dotted ms-2"></i>
                        </button>
                    </div>
                </form>
            </div>

            <div className="container-fluid rounded py-4 px-2 bg-body-tertiary" >
                <h2 className="text-center">Lista de Deudas</h2>
                <p className="text-muted text-center">Deudas actuales con pagos pendientes</p>
                <ul className="card list-group" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    {dueData.map((debt) => (
                        <li key={debt.id} className="list-group-item" onClick={() => toggleDetails(debt.id)}>
                            <div className="d-flex justify-content-between align-items-center">
                                <span className="my-1">{debt.title}</span>
                                <i className={`ms-4 bi ${openDebtIds.includes(debt.id) ? 'bi-chevron-up' : 'bi-chevron-down'}`}></i>
                            </div>

                            {openDebtIds.includes(debt.id) && (
                                <>
                                    <hr />
                                    <p className="mb-1">
                                        <strong>Monto:</strong> ${debt.amount}
                                    </p>
                                    <p className="mb-1">
                                        <strong>Tipo de Deuda:</strong> {debt.type === 'custom' ? debt.customAmountType : debt.type}
                                    </p>
                                    <p className="mb-1">
                                        <strong>Fecha Límite:</strong> {debt.dueDate}
                                    </p>
                                    <p className="mb-1">
                                        <strong>Cuota Actual:</strong> {debt.currentInstallment} de {debt.totalInstallments}
                                    </p>
                                    <div className="d-flex justify-content-end align-items-center">
                                        <button className="btn btn-sm btn-danger">
                                            <i className="bi bi-trash-fill"></i>
                                        </button>
                                    </div>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ManageDue;
