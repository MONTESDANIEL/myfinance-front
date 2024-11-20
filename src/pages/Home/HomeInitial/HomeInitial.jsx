import PerformanceMonthly from './InitialMonthly';
import PerformanceType from './InitialType';
import InitialSummary from './InitialSummary';

const HomeInitial = () => {

    return (
        <div className="container-fluid">
            <div className="container-fluid bg-dark-subtle p-3 rounded">
                <h1 className='text-center'>Desempeño Financiero</h1>
                <hr />
                <div className="row gx-4">
                    <div className="col-xl-6 col-lg-12 mb-4">
                        <PerformanceMonthly />
                    </div>
                    <div className="col-xl-6 col-lg-12 mb-4">
                        <PerformanceType />
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-dark-subtle p-3 mt-3 rounded">
                <h1 className='text-center'>Resumen de ahorro anual</h1>
                <hr />
                <InitialSummary />
            </div>
        </div >
    );
};

export default HomeInitial