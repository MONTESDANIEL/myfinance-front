import { InitialPerformance } from './InitialPerformance';
import { InitialSummary } from './InitialSummary';

export const Initial = () => {

    return (
        <div className="container-fluid">
            <div className="container-fluid bg-dark-subtle rounded">
                <h2 className="text-center p-4">Desempeño Financiero</h2>
                <InitialPerformance />
            </div>

            <div className="container-fluid bg-dark-subtle p-3 mt-3 rounded">
                <h2 className="text-center p-3">Resumen de ahorro anual</h2>
                <InitialSummary />
            </div>
        </div >
    );
};