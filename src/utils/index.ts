import dayjs from 'dayjs';
interface SaleRatio {
  installment: number;
  originalPrice: number;
  salePrice: number;
}

export default class Utillity {
  static getSaleRatio = (
    installment: number,
    originalPrice: number,
    salePrice: number
  ) => {
    const saleRatio = 100 - Math.round((salePrice / originalPrice) * 100);
    const monthPrice = Math.round(salePrice / installment).toLocaleString();

    return {
      saleRatio,
      monthPrice,
    };
  };

  static getGoalRatio = (goal: number, score: number) => {
    return Math.round((score / goal) * 100);
  };

  static getTimeDiff = (startDate: any, endDate: any) => {
    return dayjs(endDate).diff(startDate, 'day');
  };
}
