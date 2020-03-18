import React from 'react';
import PropTypes from 'prop-types';
import MuTable from '@material-ui/core/Table';
import MuTableHead from '@material-ui/core/TableHead';
import MUtableBody from '@material-ui/core/TableBody';
import MuTableRow from '@material-ui/core/TableRow';
import MuTableCell from '@material-ui/core/TableCell';
import MuPaper from '@material-ui/core/Paper';

const renderHead = columns => {
  return columns.map(({ title, dataIndex, renderHeader, key }) => (
    <MuTableCell key={key} align={key === 'actions' ? 'right' : 'left'}>
      {renderHeader ? renderHeader(title, dataIndex) : title}
    </MuTableCell>
  ));
};

const renderBody = (columns, dataSource) => {
  return dataSource.map(entry => <MuTableRow key={entry.id}>{renderData(columns, entry)}</MuTableRow>);
};

const renderData = (columns, entry) => {
  return columns.map(({ dataIndex, render, key }) => (
    <MuTableCell key={key} align={key === 'actions' ? 'right' : 'left'}>
      {render ? render(entry[dataIndex], entry) : entry[dataIndex]}
    </MuTableCell>
  ));
};

const Table = ({ columns, dataSource }) => (
  <MuPaper>
    <MuTable>
      <MuTableHead>
        <MuTableRow>{renderHead(columns, dataSource)}</MuTableRow>
      </MuTableHead>
      <MUtableBody>{renderBody(columns, dataSource)}</MUtableBody>
    </MuTable>
  </MuPaper>
);

Table.propTypes = {
  dataSource: PropTypes.array,
  columns: PropTypes.array
};

export default Table;
