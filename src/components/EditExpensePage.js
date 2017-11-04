import React from 'react';
import PropTypes from 'prop-types';


const EditExpensePage = props => (
  <div>
    Editing the expense with if of {props.match.params.id}
  </div>
);

EditExpensePage.propTypes = {
  match: PropTypes.object.isRequired,
};

export default EditExpensePage;
