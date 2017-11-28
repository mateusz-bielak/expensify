import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import numeral from 'numeral';

const ExpenseListItem = ({
  description,
  amount,
  createdAt,
  id,
}) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {numeral(amount / 100).format('$0,0.00')} - {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
);

ExpenseListItem.propTypes = {
  description: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  createdAt: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default ExpenseListItem;
