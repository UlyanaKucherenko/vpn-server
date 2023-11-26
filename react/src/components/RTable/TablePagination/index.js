import React from 'react';
import PropTypes from 'prop-types';

import { RPagination } from 'components/RPagination';
// import { RRowsOnPage } from 'components/RRowsOnPage';
import { Main, PaginationControl } from './styled';

TablePagination.propTypes = {
  pageSize: PropTypes.number.isRequired,
  // rowsPerPageOption: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     value: PropTypes.number,
  //     label: PropTypes.number,
  //   })
  // ),
  // setPageSize: PropTypes.func.isRequired,
  pageIndex: PropTypes.number.isRequired,
  pageCount: PropTypes.number.isRequired,
  gotoPage: PropTypes.func.isRequired,
};

// TablePagination.defaultProps = {
//   rowsPerPageOption: [
//     { value: 15, label: 15 },
//     { value: 20, label: 20 },
//     { value: 25, label: 25 },
//     { value: 50, label: 50 },
//   ],
// };

export function TablePagination({
  pageSize,
  // rowsPerPageOption,
  // setPageSize,
  pageIndex,
  gotoPage,
  pageCount,
}) {
  const currentPage = pageIndex + 1;
  const totalRows = pageSize * pageCount;

  const updateStepPage = (p) => {
    gotoPage(p - 1);
  };

  // const onSetPageSize = ({ value }) => {
  //   setPageSize(value);
  // };

  return (
    <Main>
      <PaginationControl>
        {/* <RRowsOnPage */}
        {/*   fromPage={currentPage} */}
        {/*   toPage={currentPage} */}
        {/*   value={{ value: pageSize, label: pageSize }} */}
        {/*   rowsPerPageOption={rowsPerPageOption} */}
        {/*   setPageSize={onSetPageSize} */}
        {/*   totalItems={pageCount} */}
        {/* /> */}
        <RPagination
          current={currentPage}
          total={totalRows}
          perPage={pageSize}
          onChange={updateStepPage}
        />
      </PaginationControl>
    </Main>
  );
}
