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
  <Link className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
    </div>
    <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
  </Link>
);

ExpenseListItem.propTypes = {
  description: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  createdAt: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default ExpenseListItem;
