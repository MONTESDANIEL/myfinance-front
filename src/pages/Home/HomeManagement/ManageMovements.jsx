import { useState } from 'react';

// Datos de prueba
const testData = [
    {
        date: '2024-08-22',
        description: 'Pago de Mercado',
        amount: - 500000,
        type: 'Gasto',
        tag: 'Mercado'
    },
    {
        date: '2024-08-23',
        description: 'Pago de Moto',
        amount: 1000000,
        type: 'Gasto',
        tag: 'AhorroMoto'
    },
    {
        date: '2024-09-12',
        description: 'Cuota casa',
        amount: 350000,
        type: 'Ingreso',
        tag: 'Arriendo'
    },
    // Agrega más filas según sea necesario
];

const ListItem = ({ date, description, amount, type, tag }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDetails = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border p-3" style={{ cursor: 'pointer' }} onClick={toggleDetails}>
            <div className="d-flex justify-content-between align-items-center">
                <span className="fw-bold">{description}</span>
                <div className="d-flex align-items-center">
                    <span className={amount < 0 ? 'text-danger' : 'text-success'}>
                        {amount.toLocaleString('es-ES', { style: 'currency', currency: 'COP' })}
                    </span>
                    <span><i className={isOpen ? "bi bi-chevron-compact-up ms-3" : "bi bi-chevron-compact-down ms-3"}></i></span>
                </div>
            </div>
            {isOpen && (
                <div className="m-2">
                    <div><strong>Fecha:</strong> {new Date(date).toLocaleDateString('es-ES')}</div>
                    <div><strong>Tipo:</strong> {type}</div>
                    <div><strong>Etiqueta:</strong> {tag}</div>
                </div>
            )}
        </div>

    );
};

const ManageMovements = () => {
    return (
        <>

            <div className="text-center text-ligth d-lg-none">
                <h1>Movimientos</h1>
                <hr />
            </div>

            <div className="container rounded p-2 bg-body-tertiary mb-3">
                <div className="card">
                    <div className="card-header text-center text-md-start">
                        Registrar Movimiento
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="amount" className="form-label">Monto</label>
                                <input type="number" className="form-control" id="amount" placeholder="Ingrese el monto" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Descripción</label>
                                <input type="text" className="form-control" id="description" placeholder="Ingrese una descripción" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="type" className="form-label">Tipo</label>
                                <select className="form-select" id="type">
                                    <option value="income">Ingreso</option>
                                    <option value="expense">Gasto</option>
                                    <option value="expense">Ahorro</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tag" className="form-label">Etiquetas</label>
                                <select className="form-select" id="tag">
                                    <option value="GastoMoto">GastoMoto</option>
                                    <option value="Mercado">Mercado</option>
                                    <option value="Arriendo">Arriendo</option>
                                    <option value="Salario">Salario</option>
                                    <option value="Universidad">Universidad</option>
                                </select>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary">
                                <i className="bi bi-plus-circle"><span className='ms-2'>Registrar</span></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container rounded p-2 bg-body-tertiary">
                <div className="card">
                    <div className="card-header d-flex flex-column flex-md-row justify-content-between align-items-center">
                        <span className="mb-md-0 p-2">Ver Movimientos</span>
                        <form className="d-flex p-2" role="search">
                            <input
                                className="form-control form-control-sm mx-2"
                                type="search"
                                placeholder="Buscar"
                                aria-label="Search" />
                            <button
                                className="btn btn-outline-success btn-sm"
                                type="submit">
                                <i className="bi bi-search"></i>
                            </button>
                        </form>
                    </div>

                    <div className="card-body p-0">
                        <div className="list-responsive">
                            {testData.map((row, index) => (
                                <ListItem key={index} {...row} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ManageMovements;