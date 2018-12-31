import React from 'react';
import PropTypes from 'prop-types';

function PageFlipper({ previous, next, page, pageSize, totalItems }) {
  const totalPages = Math.ceil(totalItems / pageSize);
  const hasPreviousPage = page > 1;
  const hasNextPage = page < totalPages;

  return (
    <div className="btn-group">
      <button type="button" className="btn btn-secondary" onClick={previous} disabled={!hasPreviousPage}>&lt;</button>
      <button type="button" className="btn btn-secondary" onClick={next} disabled={!hasNextPage}>&gt;</button>
    </div>
  );
}

PageFlipper.propsTypes = {
  totalItems: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired
};

export default PageFlipper;