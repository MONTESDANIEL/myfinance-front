import { useState } from 'react';

// Datos de prueba
const testData = [
    {
        date: '2024-08-22',
        description: 'Pago de Mercado',
        amount: -500000,
        type: 'Gasto',
        tag: 'Mercado'
    },
    {
        date: '2024-08-23',
        description: 'Pago de Moto',
        amount: -1000000,
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
    {
        date: '2024-09-15',
        description: 'Venta de bicicleta',
        amount: 2000000,
        type: 'Ingreso',
        tag: 'Venta'
    },
    {
        date: '2024-09-20',
        description: 'Compra de comida',
        amount: -150000,
        type: 'Gasto',
        tag: 'Alimentación'
    },
    {
        date: '2024-09-25',
        description: 'Salario mensual',
        amount: 3000000,
        type: 'Ingreso',
        tag: 'Salario'
    },
    {
        date: '2024-10-01',
        description: 'Pago de servicios públicos',
        amount: -250000,
        type: 'Gasto',
        tag: 'Servicios'
    },
    {
        date: '2024-10-05',
        description: 'Café con amigos',
        amount: -50000,
        type: 'Gasto',
        tag: 'Entretenimiento'
    },
    {
        date: '2024-10-10',
        description: 'Inversión en acciones',
        amount: -1000000,
        type: 'Gasto',
        tag: 'Inversión'
    },
    {
        date: '2024-10-15',
        description: 'Reembolso de gastos',
        amount: 300000,
        type: 'Ingreso',
        tag: 'Reembolso'
    },
    {
        date: '2024-10-20',
        description: 'Compra de ropa',
        amount: -300000,
        type: 'Gasto',
        tag: 'Ropa'
    },
    {
        date: '2024-10-22',
        description: 'Intereses bancarios',
        amount: 100000,
        type: 'Ingreso',
        tag: 'Intereses'
    },
    {
        date: '2024-10-23',
        description: 'Cena en restaurante',
        amount: -200000,
        type: 'Gasto',
        tag: 'Alimentación'
    },
    {
        date: '2024-10-24',
        description: 'Pago de internet',
        amount: -80000,
        type: 'Gasto',
        tag: 'Servicios'
    },
    {
        date: '2024-10-25',
        description: 'Alquiler de oficina',
        amount: -1500000,
        type: 'Gasto',
        tag: 'Arriendo'
    },
    {
        date: '2024-10-26',
        description: 'Venta de muebles usados',
        amount: 500000,
        type: 'Ingreso',
        tag: 'Venta'
    },
    {
        date: '2024-10-27',
        description: 'Ahorros mensuales',
        amount: 600000,
        type: 'Ingreso',
        tag: 'Ahorro'
    },
    {
        date: '2024-10-28',
        description: 'Compra de libros',
        amount: -250000,
        type: 'Gasto',
        tag: 'Educación'
    },
    {
        date: '2024-10-29',
        description: 'Gastos de viaje',
        amount: -1200000,
        type: 'Gasto',
        tag: 'Viaje'
    },
    {
        date: '2024-10-30',
        description: 'Dividendos de inversión',
        amount: 400000,
        type: 'Ingreso',
        tag: 'Dividendos'
    }
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

                    <span className={`d-none d-md-block ${amount < 0 ? 'text-danger' : 'text-success'}`}>
                        {amount.toLocaleString('es-ES', { style: 'currency', currency: 'COP' })}
                    </span>
                    <span><i className={isOpen ? "bi bi-chevron-compact-up ms-3" : "bi bi-chevron-compact-down ms-3"}></i></span>
                </div>
            </div>
            {isOpen && (
                <div className="m-2">
                    <span className={`d-block d-md-none ${amount < 0 ? 'text-danger' : 'text-success'}`}>
                        <strong>Monto:</strong> {amount.toLocaleString('es-ES', { style: 'currency', currency: 'COP' })}
                    </span>
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

            <div className="container-fluid rounded p-2 mb-3 bg-body-tertiary">
                <h2 className='my-4 mt-3 text-center'>Nuevos Movimientos</h2>
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
                                <i className="bi bi-plus-circle"><span className='ms-2'>Agregar</span></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="container-fluid rounded p-2 bg-body-tertiary">
                <h2 className='my-4 mt-3 text-center'>Historial de Movimientos</h2>
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

                    <div className="card-body p-0" style={{ maxHeight: '300px', overflowY: 'auto' }}>
                        <div className="list-responsive">
                            {testData.length > 1 ? (
                                testData.map((row, index) => (
                                    <ListItem key={index} {...row} />
                                ))

                            ) : (
                                <div className='container p-3 text-center' >
                                    <span>No existe ningún movimiento</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

            </div >

        </>
    )
}

export default ManageMovements;