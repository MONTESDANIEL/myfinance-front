import React from 'react';

import FinancialExpense from './FinancialExpense';
import FinancialIncome from './FinancialIncome';

const SettingsFinancial = () => {
    return (
        <>
            <div className="text-center">
                <h1>Financiero</h1>
                <p className="text-muted">Configure sus gastos e ingresos</p>
            </div>

            <FinancialIncome />

            <FinancialExpense />
        </>
    );
};

export default SettingsFinancial;
