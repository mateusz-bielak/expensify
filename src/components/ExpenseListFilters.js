import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

const ExpenseListFilters = props => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={e => props.dispatch(setTextFilter(e.target.value))}
    />
    <select
      value={props.filters.sortBy}
      onChange={(e) => {
        if (e.target.value === 'date') {
          return props.dispatch(sortByDate());
        }
        return props.dispatch(sortByAmount());
      }}
    >
      <option value="date">Date</option>
      <option value="amount">Amount</option>
    </select>
  </div>
);

ExpenseListFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filters: state.filters,
});

export default connect(mapStateToProps)(ExpenseListFilters);
