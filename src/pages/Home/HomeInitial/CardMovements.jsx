import React, { useState } from 'react';
import { realMovementsData as movementsData } from '@data/movementsData.js';
import FloatWindow from '@components/FloatWindow';
import { useMovementPalette } from '@context/ColorContext';
import classNames from 'classnames';

// Traducciones
const TYPE_TRANSLATION = {
    income: 'Ingreso',
    savings: 'Ahorro',
    expense: 'Egreso'
};

const TITLE_TRANSLATION = {
    'Disponible': 'income',
    'Ingresos': 'income',
    'Ahorro': 'savings',
    'Egresos': 'expense'
};

// Filtrar movimientos
const filterMovements = (data, { showAll, typeInEnglish, month, year }) => {
    return data
        .filter(movement => showAll || movement.movementType === typeInEnglish)
        .filter(movement => {
            if (month) {
                const movementDate = new Date(movement.date);
                const targetDate = new Date(month);
                return (
                    movementDate.getMonth() === targetDate.getMonth() &&
                    movementDate.getFullYear() === targetDate.getFullYear()
                );
            }
            return true;
        })
        .filter(movement => year ? new Date(movement.date).getFullYear() === new Date(year).getFullYear() : true);
};

// Componente ListItem
const ListItem = ({ date, description, amount, movementType, tag }) => {
    const { colors } = useMovementPalette();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDetails = () => setIsOpen(!isOpen);

    return (
        <div className="border p-3" style={{ cursor: 'pointer' }} onClick={toggleDetails}>
            <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold">{description}</span>
                <div className="d-flex align-items-center">
                    <span style={{ color: colors[movementType][1] }} className="d-none d-md-block">
                        {amount.toLocaleString('es-ES', { style: 'currency', currency: 'COP' })}
                    </span>
                    <span>
                        <i
                            className={classNames('ms-3 d-none d-md-block', {
                                'bi bi-chevron-compact-up': isOpen,
                                'bi bi-chevron-compact-down': !isOpen
                            })}
                        ></i>
                    </span>
                    <span>
                        <i
                            className={classNames('d-block d-md-none ms-3', {
                                'bi bi-chevron-compact-up': isOpen,
                                'bi bi-chevron-compact-down': !isOpen
                            })}
                            style={{ color: colors[movementType][2] }}
                        ></i>
                    </span>
                </div>
            </div>
            {isOpen && (
                <div className="m-2">
                    <span className="d-block d-md-none" style={{ color: colors[movementType][1] }}>
                        <strong>Monto:</strong> {amount.toLocaleString('es-ES', { style: 'currency', currency: 'COP' })}
                    </span>
                    <div><strong>Fecha:</strong> {new Date(date).toLocaleDateString('es-ES')}</div>
                    <div><strong>Tipo:</strong> {TYPE_TRANSLATION[movementType]}</div>
                    <div><strong>Etiqueta:</strong> {tag == null ? 'No tiene una etiqueta' : tag.name}</div>
                </div>
            )}
        </div>
    );
};

// Componente principal CardMovements
export const CardMovements = ({ title, isOpen, onClose, month, year, showAll }) => {
    const typeInEnglish = TITLE_TRANSLATION[title] || null;
    const filteredMovements = filterMovements(movementsData, { showAll, typeInEnglish, month, year });

    return (
        <FloatWindow isOpen={isOpen} onClose={onClose} title={title} size="lg">
            <div className="card-body p-0" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                <div className="list-responsive">
                    {filteredMovements.length > 0 ? (
                        filteredMovements.map((row) => <ListItem key={row.id} {...row} />)
                    ) : (
                        <div className="container p-3 text-center">
                            <span>No existe ningún movimiento</span>
                        </div>
                    )}
                </div>
            </div>
        </FloatWindow>
    );
};