import moment from 'moment';

const expenses = [{
  id: '1',
  description: 'Car',
  note: '',
  amount: 300000,
  createdAt: moment(0).valueOf(),
}, {
  id: '2',
  description: 'Vacation',
  note: '',
  amount: 50000,
  createdAt: moment(0).add(4, 'days').valueOf(),
}, {
  id: '3',
  description: 'Dog',
  note: '',
  amount: 2500,
  createdAt: moment(0).subtract(4, 'days').valueOf(),
}];

export default expenses;
