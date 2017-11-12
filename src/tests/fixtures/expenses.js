import moment from 'moment';

const expenses = [{
  id: '1',
  description: 'Car',
  note: '',
  amount: 300000,
  createdAt: moment(0),
}, {
  id: '2',
  description: 'Vacation',
  note: '',
  amount: 50000,
  createdAt: moment(0).add(4, 'days'),
}, {
  id: '3',
  description: 'Dog',
  note: '',
  amount: 2500,
  createdAt: moment(0).subtract(4, 'days'),
}];

export default expenses;
