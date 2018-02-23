import React from 'react';

export default class TodosListHeader extends React.Component {
  render() {
    //task and action header names. simple component.
    return (
        <thead>
          <tr>
            <th className="Task">Task</th>
            <th className="Action">Action</th>
          </tr>
        </thead>
    );
  }
}
