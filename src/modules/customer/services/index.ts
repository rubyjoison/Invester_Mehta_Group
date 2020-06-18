import { CountryService } from './country.service';
import { TablesService } from './customer.service';

export const services = [TablesService, CountryService];

export * from './customer.service';
export * from './country.service';
