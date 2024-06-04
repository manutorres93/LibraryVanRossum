import { SetMetadata } from '@nestjs/common';

export const NO_SALES_HOURS = 'noSalesHours';

export const NoSalesDuringHours = () => SetMetadata(NO_SALES_HOURS, true);