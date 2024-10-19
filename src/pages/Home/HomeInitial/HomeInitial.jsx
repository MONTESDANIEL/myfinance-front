import PerformanceMonthly from './InitialMonthly';
import PerformanceType from './InitialType';
import InitialSummary from './InitialSummary';

const HomeInitial = () => {

    return (
        <div className="container-fluid">
            <div className="container-fluid bg-dark-subtle p-3 rounded">
                <h2 className="text-center p-3">Desempeño Financiero</h2>
                <div className="row gx-4"> {/* Margen horizontal entre columnas */}
                    {/* Contenedor Mensual */}
                    <div className="col-xl-6 col-lg-12 mb-4">
                        <PerformanceMonthly />
                    </div>
                    {/* Contenedor temporalidad */}
                    <div className="col-xl-6 col-lg-12 mb-4">
                        <PerformanceType />
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-dark-subtle p-3 mt-3 rounded">
                <h2 className="text-center p-3">Resumen de ahorro anual</h2>
                <InitialSummary />
            </div>
        </div >
    );
};

export default HomeInitial