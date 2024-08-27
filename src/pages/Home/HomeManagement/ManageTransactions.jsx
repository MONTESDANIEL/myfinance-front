import { useState } from 'react';

// Datos de prueba
const testData = [
    {
        date: '2024-08-22',
        description: 'Pago de Mercado',
        amount: -500,
        type: 'Gasto',
        tag: 'Mercado'
    },
    {
        date: '2024-08-23',
        description: 'Pago de Moto',
        amount: 1000,
        type: 'Gasto',
        tag: 'AhorroMoto'
    },
    {
        date: '2024-09-12',
        description: 'Cuota casa',
        amount: 350,
        type: 'Ingreso',
        tag: 'Arriendo'
    },
    // Agrega más filas según sea necesario
];

const TableRow = ({ date, description, amount, type, tag }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <tr onClick={() => setIsOpen(!isOpen)}>
                <td>{date}</td>
                <td>{description}</td>
                <td className={amount < 0 ? 'text-danger' : 'text-success'}>
                    ${amount}
                </td>
            </tr>
            {isOpen && (
                <tr>
                    <td colSpan="3">
                        <div>
                            <strong>Tipo:</strong> {type}<br />
                            <strong>Etiqueta:</strong> {tag}
                        </div>
                    </td>
                </tr>
            )}
        </>
    );
};

export const ManageTransactions = () => {
    return (
        <div className="container p-3">
            <div className="p-3 bg-body-tertiary">
                <div className="text-center mb-3 text-ligth">
                    <h2>Transacciones</h2>
                </div>
                <hr />
                <div className="col-md-12">
                    <div className="card mb-3">
                        <div className="card-header">
                            Registrar Ingreso/Gasto
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
                                <button type="submit" className="btn btn-primary"><i className="bi bi-plus-circle"> Registrar</i></button>
                            </form>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="card mb-3">
                    <div className="card-header d-flex flex-column flex-md-row justify-content-between align-items-center">
                        <span className="mb-md-0 p-2">Ver Transacciones</span>
                        <form className="d-flex p-2" role="search">
                            <input className="form-control form-control-sm mx-2" type="search" placeholder="Buscar" aria-label="Search" />
                            <button className="btn btn-outline-success btn-sm" type="submit"><i className="bi bi-search"></i></button>
                        </form>
                    </div>

                    <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-hover">
                                <thead className="thead-dark">
                                    <tr>
                                        <th>Fecha</th>
                                        <th>Descripción</th>
                                        <th>Monto</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {testData.map((row, index) => (
                                        <TableRow key={index} {...row} />
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
