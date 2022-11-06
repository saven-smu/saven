export type Bill = {
    id: string;
    electricityUsed: number;
    waterUsed: number;
    gasUsed: number;
    electricityCost: number;
    waterCost: number;
    gasCost: number;
    totalCost: number;
    storedDateTime: string;
    user: string;
};

export type BillChartData = {
    bills: Bill[];
    totalElectricityCost: number;
    totalWaterCost: number;
    totalGasCost: number;
    totalElectricityUsed: number;
    totalWaterUsed: number;
    totalGasUsed: number;
};
