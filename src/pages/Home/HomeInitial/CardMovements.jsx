import { React, useState, useEffect } from 'react';
import { realMovementsData as movementsData } from '@data/movementsData.js';
import FloatWindow from '@components/FloatWindow';
import { useMovementPalette } from '@context/ColorContext';

const ListItem = ({ date, description, amount, type, tag }) => {
    const { colors } = useMovementPalette();

    const [isOpen, setIsOpen] = useState(false);

    const toggleDetails = () => {
        setIsOpen(!isOpen);
    };

    const typeTranslation = {
        income: 'Ingreso',
        savings: 'Ahorro',
        expenses: 'Egreso'
    };

    return (
        <div className="border p-3" style={{ cursor: 'pointer' }} onClick={toggleDetails} key={amount.id}>
            <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold">{description}</span>
                <div className="d-flex align-items-center">
                    <span
                        className={`d-none d-md-block`}
                        style={{ color: colors[typeMovement[type]][1] }}>
                        {amount.toLocaleString('es-ES', { style: 'currency', currency: 'COP' })}
                    </span>
                    <span><i className={`d-none d-md-block ${isOpen ? "bi bi-chevron-compact-up ms-3" : "bi bi-chevron-compact-down ms-3"}`}></i></span>
                    <span>
                        <i
                            className={`d-block d-md-none ${isOpen ? "bi bi-chevron-compact-up ms-3" : "bi bi-chevron-compact-down ms-3"}`}
                            style={{ color: colors[typeMovement[type]][2] }}>
                        </i>
                    </span>
                </div>
            </div>
            {
                isOpen && (
                    <div className="m-2">
                        <span
                            className={`d-block d-md-none`}
                            style={{ color: colors[typeMovement[type]][1] }}>
                            <strong>Monto:</strong> {amount.toLocaleString('es-ES', { style: 'currency', currency: 'COP' })}
                        </span>
                        <div><strong>Fecha:</strong> {new Date(date).toLocaleDateString('es-ES')}</div>
                        <div><strong>Tipo:</strong> {typeTranslation[type]}</div>
                        <div><strong>Etiqueta:</strong> {tag}</div>
                    </div>
                )
            }
        </div >
    );
};

export const CardMovements = ({ title, isOpen, onClose, month, year, showAll }) => {

    const [allUserMovements, setAllUserMovements] = useState(null);

    useEffect(() => {
        const fetchMovements = async () => {
            try {
                const data = await getUserData();  // Llama a la función para obtener los datos
                if (data) {
                    setAllUserMovements(data);  // Establece los movimientos en el estado
                } else {
                }
            } catch (error) {
            }
        };

        fetchMovements();  // Llama a la función cuando el componente se monta
    }, []);

    // Traducción del título a tipo en inglés
    const typeTranslation = {
        'Disponible': 'income',
        'Ingresos': 'income',
        'Ahorro': 'saving',
        'Egresos': 'egress'
    };

    // Traducir el título a tipo en inglés
    const typeInEnglish = typeTranslation[title];

    // Filtrar los movimientos de acuerdo al tipo si no se solicita "ver todos"
    let filteredMovements = movementsData;

    if (!showAll) {
        // Filtrar solo los movimientos del tipo especificado si no es 'showAll'
        filteredMovements = movementsData.filter(movement => movement.type === typeInEnglish);
    }

    // Si se pasa el mes, filtrar los movimientos de ese mes
    if (month) {
        const startDate = new Date(month); // Fecha inicial (primer día del mes)
        const startMonth = startDate.getMonth(); // Mes del mes pasado
        const startYear = startDate.getFullYear(); // Año del mes pasado

        filteredMovements = filteredMovements.filter(movement => {
            const movementDate = new Date(movement.date); // Fecha del movimiento
            const movementMonth = movementDate.getMonth(); // Mes del movimiento
            const movementYear = movementDate.getFullYear(); // Año del movimiento

            // Comparar solo mes y año
            return movementMonth === startMonth && movementYear === startYear;
        });
    }

    // Si se pasa el año, filtrar los movimientos de ese año
    if (year) {
        const yearToCompare = new Date(year).getFullYear(); // Extraer el año de la variable year

        filteredMovements = filteredMovements.filter(movement => {
            const movementDate = new Date(movement.date); // Fecha del movimiento
            const movementYear = movementDate.getFullYear(); // Año del movimiento

            return movementYear === yearToCompare; // Comparar el año extraído de year con el del movimiento
        });
    }

    return (
        <FloatWindow isOpen={isOpen} onClose={() => onClose()} title={title} size='lg'>
            <div className="card-body p-0" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                <div className="list-responsive">
                    {filteredMovements.length > 0 ? (
                        filteredMovements.map((row, index) => (
                            <ListItem key={index} {...row} />
                        ))
                    ) : (
                        <div className='container p-3 text-center'>
                            <span>No existe ningún movimiento</span>
                        </div>
                    )}
                </div>
            </div>
        </FloatWindow>
    );
};
