const goalsData = [
    {
        "id": 1,
        "title": "No gastar tanto en entretenimiento",
        "targetAmount": 500000,
        "currentSpending": 300000,
        "lastExpense": {
            "description": "Cena en restaurante",
            "amount": 50000
        },
        "remainingBudget": 200000,
        "progress": 80,
        "type": "Reductivo",
        "recentExpenses": [
            { "description": "Cine", "amount": 15000 },
            { "description": "Salidas a comer", "amount": 100000 },
            { "description": "Suscripción a plataforma de streaming", "amount": 15000 }
        ]
    },
    {
        "id": 2,
        "title": "Ahorro para vacaciones",
        "targetAmount": 1000000,
        "currentSpending": 450000,
        "lastDeposit": {
            "description": "Depósito inicial",
            "amount": 150000
        },
        "remainingBudget": 550000,
        "progress": 60,
        "type": "Incremental",
        "depositHistory": [
            { "description": "Depósito de cumpleaños", "amount": 10000 },
            { "description": "Depósito mensual", "amount": 200000 },
            { "description": "Regalo familiar", "amount": 5000 },
            { "description": "Intereses ganados", "amount": 1500 },
            { "description": "Depósito de sueldo", "amount": 7500 },
            { "description": "Depósito extra", "amount": 3000 },
            { "description": "Intereses", "amount": 1000 },
            { "description": "Depósito de bonificación", "amount": 400000 },
            { "description": "Venta de artículos", "amount": 5000 },
            { "description": "Reembolso de gastos", "amount": 1000 }
        ]
    },
    {
        "id": 3,
        "title": "Compra de un nuevo coche",
        "endDate": "2025-01-15",
        "progress": 0,
        "type": "Fijo"
    },
    {
        "id": 4,
        "title": "Viaje a Europa",
        "endDate": "2024-11-30",
        "progress": 0,
        "type": "Fijo"
    },
    {
        "id": 5,
        "title": "Fondo para emergencias",
        "endDate": "2025-01-01",
        "progress": 0,
        "type": "Fijo"
    },
    {
        "id": 6,
        "title": "Comprar una computadora nueva",
        "endDate": "2024-09-10",
        "progress": 0,
        "type": "Fijo"
    },
    {
        "id": 7,
        "title": "Ahorro para una bicicleta",
        "endDate": "2024-12-20",
        "progress": 0,
        "type": "Fijo"
    },
    {
        "id": 19,
        "title": "Pago de deudas",
        "targetAmount": 300000,
        "currentSpending": 200000,
        "lastExpense": {
            "description": "Pago de tarjeta de crédito",
            "amount": 30000
        },
        "remainingBudget": 100000,
        "progress": 66,
        "type": "Reductivo",
        "recentExpenses": [
            { "description": "Pago de préstamo", "amount": 50000 },
            { "description": "Pago de servicios", "amount": 20000 }
        ]
    },
    {
        "id": 20,
        "title": "Ahorro para la universidad",
        "targetAmount": 500000,
        "currentSpending": 100000,
        "lastDeposit": {
            "description": "Ahorro mensual",
            "amount": 20000
        },
        "remainingBudget": 400000,
        "progress": 20,
        "type": "Incremental",
        "depositHistory": [
            { "description": "Ahorro de verano", "amount": 30000 },
            { "description": "Intereses ganados", "amount": 5000 }
        ]
    },
    {
        "id": 21,
        "title": "Compra de una lavadora",
        "endDate": "2025-02-01",
        "progress": 0,
        "type": "Fijo"
    },
    {
        "id": 22,
        "title": "Gastos de salud mensuales",
        "targetAmount": 150000,
        "currentSpending": 80000,
        "lastExpense": {
            "description": "Visita al médico",
            "amount": 30000
        },
        "remainingBudget": 70000,
        "progress": 53,
        "type": "Reductivo",
        "recentExpenses": [
            { "description": "Medicamentos", "amount": 15000 },
            { "description": "Exámenes", "amount": 20000 }
        ]
    },
    {
        "id": 23,
        "title": "Ahorro para un nuevo televisor",
        "targetAmount": 400000,
        "currentSpending": 60000,
        "lastDeposit": {
            "description": "Depósito inicial",
            "amount": 20000
        },
        "remainingBudget": 340000,
        "progress": 15,
        "type": "Incremental",
        "depositHistory": [
            { "description": "Ahorro mensual", "amount": 10000 },
            { "description": "Regalo de cumpleaños", "amount": 5000 }
        ]
    },
    {
        "id": 24,
        "title": "Pago de impuestos",
        "targetAmount": 200000,
        "currentSpending": 120000,
        "lastExpense": {
            "description": "Impuesto de propiedad",
            "amount": 50000
        },
        "remainingBudget": 80000,
        "progress": 60,
        "type": "Reductivo",
        "recentExpenses": [
            { "description": "Impuesto sobre la renta", "amount": 70000 }
        ]
    },
    {
        "id": 25,
        "title": "Compra de entradas para el teatro",
        "endDate": "2024-12-15",
        "progress": 0,
        "type": "Fijo"
    },
    {
        "id": 26,
        "title": "Ahorro para comprar un coche usado",
        "targetAmount": 1200000,
        "currentSpending": 200000,
        "lastDeposit": {
            "description": "Ahorro mensual",
            "amount": 50000
        },
        "remainingBudget": 1000000,
        "progress": 17,
        "type": "Incremental",
        "depositHistory": [
            { "description": "Depósito extra", "amount": 100000 },
            { "description": "Intereses ganados", "amount": 2000 }
        ]
    },
    {
        "id": 27,
        "title": "Ahorro para el seguro del coche",
        "targetAmount": 500000,
        "currentSpending": 300000,
        "lastDeposit": {
            "description": "Depósito mensual",
            "amount": 50000
        },
        "remainingBudget": 200000,
        "progress": 60,
        "type": "Incremental",
        "depositHistory": [
            { "description": "Pago de una póliza", "amount": 10000 },
            { "description": "Depósito adicional", "amount": 20000 }
        ]
    }
];

export default goalsData;