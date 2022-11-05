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
