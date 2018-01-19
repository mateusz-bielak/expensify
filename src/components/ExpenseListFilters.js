import PropTypes from 'prop-types';
import { DateRangePicker } from 'react-dates';
import React from 'react';
import { connect } from 'react-redux';
import { setEndDate, setStartDate, setTextFilter, sortByAmount, sortByDate } from '../actions/filters';

export class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null,
  }
  onDatesChange = ({ startDate, endDate }) => {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }
  onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  }
  onSetTextFilterChange = (e) => {
    this.props.setTextFilter(e.target.value);
  }
  onSortChange = (e) => {
    if (e.target.value === 'date') {
      return this.props.sortByDate();
    }
    return this.props.sortByAmount();
  }
  render() {
    return (
      <div className="content-container">
        <div className="input-group">
          <div className="input-group__item">
            <input
              type="text"
              className="text-input"
              value={this.props.filters.text}
              placeholder="Search expenses"
              onChange={this.onSetTextFilterChange}
            />
          </div>
          <div className="input-group__item">
            <select
              className="select"
              value={this.props.filters.sortBy}
              onChange={this.onSortChange}
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
          </div>
          <div className="input-group__item">
            <DateRangePicker
              startDate={this.props.filters.startDate}
              endDate={this.props.filters.endDate}
              onDatesChange={this.onDatesChange}
              focusedInput={this.state.calendarFocused}
              onFocusChange={this.onFocusChange}
              numberOfMonths={1}
              isOutsideRange={() => false}
              showClearDates
            />
          </div>
        </div>

      </div>
    );
  }
}

ExpenseListFilters.propTypes = {
  filters: PropTypes.object.isRequired,
  setStartDate: PropTypes.func.isRequired,
  setEndDate: PropTypes.func.isRequired,
  setTextFilter: PropTypes.func.isRequired,
  sortByDate: PropTypes.func.isRequired,
  sortByAmount: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate)),
  setTextFilter: value => dispatch(setTextFilter(value)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
