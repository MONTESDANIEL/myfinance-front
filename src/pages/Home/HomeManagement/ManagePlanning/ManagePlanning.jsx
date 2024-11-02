import React from 'react';

import PlanningCalendar from './PlanningCalendar/PlanningCalendar';
import PlanningGoals from './PlanningGoals/PlanningGoals';


const ManagePlanning = () => {

    return (
        <>

            <div className="text-center text-ligth p-1 d-lg-none">
                <h1 className='mb-0'>Planificación financiera</h1>
                <hr />
            </div>

            <div className="container-fluid rounded p-2 mb-3 bg-body-tertiary">
                <h2 className='my-4 mt-3 text-center'>Calendario de planificación</h2>
                <PlanningCalendar />
            </div>

            <div className="container-fluid rounded p-2 bg-body-tertiary">
                <h2 className='mt-3 text-center'>Metas financieras</h2>
                <PlanningGoals />
            </div>

        </>
    );
};

export default ManagePlanning;