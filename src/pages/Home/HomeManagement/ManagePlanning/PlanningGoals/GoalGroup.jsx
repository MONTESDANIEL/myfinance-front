import React from 'react';

const GoalGroup = ({ type, goals, getProgressColor, handleShowDetails }) => {
    const title =
        type === 'Incremental' ? 'Ahorro Progresivo'
            : type === 'Reductivo' ? 'Reducción de Gastos'
                : 'Objetivo a Plazo Fijo';

    const description = type === 'Incremental'
        ? 'Ahorra cuota a cuota para alcanzar un objetivo específico.'
        : type === 'Reductivo'
            ? 'Disminuir el gasto estableciendo límites o presupuestos.'
            : 'Objetivo de fecha única: debe completarse en una fecha específica, sin progreso intermedio.';

    return (
        <div>
            <div className="col-lg-12 p-3 my-2 card">
                <div className="text-center">
                    <h4 className="text-center">{title}</h4>
                    <p className="text-muted mb-0">{description}</p>
                </div>
                <hr />
                <div className="row justify-content-center" style={{ maxHeight: '500px', overflowY: 'auto' }}>
                    {goals.map((goal) => (
                        goal.type !== 'Fijo' ? (
                            <div className="col-lg-4 col-md-6 p-2 d-flex" key={goal.id}>
                                <div className="card bg-dark-subtle flex-fill">
                                    <div className="card-body d-flex flex-column">
                                        <div className="text-center d-flex align-items-center justify-content-center flex-grow-1 mb-3">
                                            <h5 className="my-1">{goal.title}</h5>
                                        </div>
                                        <div className="progress mb-2">
                                            <div className="progress-bar text-black" style={{ width: `${goal.progress}%`, backgroundColor: getProgressColor(goal) }}>
                                                {goal.progress}%
                                            </div>
                                        </div>
                                        <button className="btn btn-outline-secondary border-0" onClick={() => handleShowDetails(goal)}>Ver Detalles</button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div key={goal.id}>
                                <div className="list-group-item d-flex justify-content-between align-items-center p-2 border">
                                    <div>
                                        <h6>{goal.title}</h6>
                                        <span className="ms-1">{goal.endDate}</span>
                                    </div>
                                    <div className="w-25 d-flex justify-content-end">
                                        <button className="btn btn-outline-danger btn-sm">
                                            <i className="bi bi-trash"></i>
                                        </button>
                                        <button className="btn btn-outline-success btn-sm ms-2">
                                            <i className="bi bi-check-circle"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>

                        )
                    ))}
                </div>

            </div>
        </div>
    );
};

export default GoalGroup;
