import React from 'react';

const GoalGroup = ({ type, goals, getProgressColor, handleShowDetails }) => {
    const title = type === 'Incremental' ? 'Ahorro Progresivo' : type === 'Reductivo' ? 'Reducción de Gastos' : 'Meta Única';

    return (
        <div>
            <div className="col-lg-12 p-3 my-2 card">
                <div className="position-relative">
                    <h4 className="text-center">{title}</h4>
                </div>
                <hr />
                <div className="row justify-content-center">
                    {goals.map((goal) => (
                        <>
                            {goal.type !== 'Fijo' ? (
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
                                <div>
                                    <div className="list-group-item d-flex justify-content-between align-items-center p-2 border" key={goal.id}>
                                        <div>
                                            <h6 className="ms-1">{goal.title}</h6>
                                            <span className="ms-3">{goal.endDate}</span>
                                        </div>
                                        <button className="btn btn-outline-success btn-sm ms-4">
                                            <i className="bi bi-check-circle"></i>
                                        </button>
                                    </div>
                                </div>
                            )
                            }
                        </>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GoalGroup;
