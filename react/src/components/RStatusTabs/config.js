import { courierStatusTabs, orderStatusTabs } from 'utils/const';

const orderStatusOptions = orderStatusTabs.map(({ value }) => value);

const courierStatusOptions = courierStatusTabs.map(({ value }) => value);

export { orderStatusOptions, courierStatusOptions };
