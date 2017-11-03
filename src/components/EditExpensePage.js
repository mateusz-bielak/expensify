import React from 'react';

const EditExpensePage = (props) => (
  <div>
    Editing the expense with if of {props.match.params.id}
  </div>
);

export default EditExpensePage;