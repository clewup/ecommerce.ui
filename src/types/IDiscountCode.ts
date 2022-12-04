export interface IDiscountCode {
  code: string;
  percentOff: number;
  description?: string;
  validFrom?: Date;
  validTo?: Date;
}
