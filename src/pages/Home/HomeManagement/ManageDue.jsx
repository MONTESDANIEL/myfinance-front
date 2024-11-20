import React, { useState } from 'react';
import { dueData, debtTypes } from '@data/dueData.js'
import InputCash from "@components/inputCash";
import FloatWindow from '@components/FloatWindow';

const ManageDue = () => {
    const [amount, setAmount] = useState('');
    const [type, setType] = useState('');
    const [customAmountType, setCustomAmountType] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [totalInstallments, setTotalInstallments] = useState('');
    const [currentInstallment, setCurrentInstallment] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [currentOpenDebt, setCurrentOpenDebt] = useState(null);

    // Abrir el modal para detalles específicos
    const handleOpen = (id) => {
        setIsOpen(true);
        setCurrentOpenDebt(id);
    };

    // Cerrar el modal
    const handleClose = () => {
        setIsOpen(false);
        setCurrentOpenDebt(null);
    };

    return (
        <>
            <div className="text-center">
                <h1>Control de deudas</h1>
                <p className="text-muted text-center">Gestiona tus deudas y pagos pendientes de manera eficiente</p>
            </div>

            <div className="bg-body-tertiary rounded px-2 py-3 mb-3">

                <div className="text-center">
                    <h3 className="mb-md-1">Agregar nueva deuda</h3>
                    <p className="text-muted d-none d-md-block">Ingresa los detalles de la deuda</p>
                    <hr />
                </div>

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
                        <InputCash
                            value={amount}
                            placeholder="Ingrese el monto"
                            onChange={(value) => setAmount(value)}
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

            <div className="bg-body-tertiary rounded px-2 py-3" >

                <div className="text-center">
                    <h3 className="mb-md-1">Lista de Deudas</h3>
                    <p className="text-muted d-none d-md-block">Deudas actuales con pagos pendientes</p>
                    <hr />
                </div>

                <ul className="card list-group" style={{ maxHeight: '400px', overflowY: 'auto' }}>
                    {dueData.map((debt) => (
                        <li key={debt.id} className="list-group-item">
                            <div
                                className="d-flex justify-content-between align-items-center"
                            >
                                <span className="my-1">{debt.title}</span>
                                <button
                                    className="btn btn-sm btn-secondary"
                                    onClick={() => handleOpen(debt.id)}
                                    style={{ backgroundColor: "transparent" }}>
                                    <i className="bi bi-three-dots"></i>
                                </button>
                            </div>
                            <FloatWindow
                                isOpen={isOpen && currentOpenDebt === debt.id}
                                onClose={handleClose}
                                title={debt.title}>
                                <p className="mb-1">
                                    <strong className='me-2'>Monto:</strong>
                                    ${debt.amount}
                                </p>
                                <p className="mb-1">
                                    <strong className='me-2'>Tipo de Deuda:</strong>
                                    {debt.type === 'custom' ? debt.customAmountType : debt.type}
                                </p>
                                <p className="mb-1">
                                    <strong className='me-2'>Fecha Límite:</strong>
                                    {debt.dueDate}
                                </p>
                                <p className="mb-1">
                                    <strong className='me-2'>Cuota Actual:</strong>
                                    {debt.currentInstallment} de {debt.totalInstallments}
                                </p>
                                <div className="d-flex justify-content-end align-items-center">
                                    <button className="btn btn-sm btn-outline-warning">
                                        <i className="bi bi-pencil-square"></i>
                                    </button>
                                    <button className="btn btn-sm btn-outline-danger ms-3">
                                        <i className="bi bi-trash-fill"></i>
                                    </button>
                                </div>
                            </FloatWindow>
                        </li>
                    ))}
                </ul>

            </div>
        </>
    );
};

export default ManageDue;