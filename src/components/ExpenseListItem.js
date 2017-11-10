import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

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
    <p>{amount} - {createdAt}</p>
  </div>
);

ExpenseListItem.propTypes = {
  description: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  createdAt: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default ExpenseListItem;
