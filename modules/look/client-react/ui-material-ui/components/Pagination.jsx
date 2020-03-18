import React from 'react';
import PropTypes from 'prop-types';
import MuPagination from '@material-ui/lab/Pagination';

import Button from './Button';

const Pagination = ({
  itemsPerPage,
  handlePageChange,
  hasNextPage,
  pagination,
  total,
  loadMoreText,
  defaultPageSize,
  page
}) => {
  const maxPage = Math.ceil(total / defaultPageSize);
  if (pagination === 'relay') {
    return hasNextPage ? (
      <div>
        <div>
          <small>
            ({itemsPerPage} / {total})
          </small>
        </div>
        <Button color="primary" onClick={() => handlePageChange(pagination)}>
          {loadMoreText}
        </Button>
      </div>
    ) : null;
  } else {
    return (
      <div style={{ float: 'right' }}>
        <MuPagination
          page={page}
          count={maxPage}
          onChange={(e, pageNumber) => handlePageChange(pagination, pageNumber)}
        />
      </div>
    );
  }
};

Pagination.propTypes = {
  itemsPerPage: PropTypes.number,
  handlePageChange: PropTypes.func,
  hasNextPage: PropTypes.bool,
  pagination: PropTypes.string,
  total: PropTypes.number,
  loadMoreText: PropTypes.string,
  defaultPageSize: PropTypes.number
};

export default Pagination;
