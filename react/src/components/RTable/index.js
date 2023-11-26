import { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  useBlockLayout,
  useTable,
  usePagination,
  useRowSelect,
  useExpanded,
} from 'react-table';

import { TablePagination } from 'components/RTable/TablePagination';
import { ReactComponent as IconCount } from 'assets/img/icons/count.svg';
import TableColHeader from './TableColHeader';
import {
  Main,
  Container,
  Header,
  Table,
  TBody,
  TCell,
  THeader,
  THeaderRow,
  THead,
  TRow,
  TableOverlay,
} from './styled';

RTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      Header: PropTypes.element,
      accessor: PropTypes.string,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchData: PropTypes.func,
  onRowClick: PropTypes.func,
  onChangeSort: PropTypes.func,
  loading: PropTypes.bool,
  disablePagination: PropTypes.bool,
  height: PropTypes.number,
  perPage: PropTypes.number,
  pageCount: PropTypes.number,
  topHeader: PropTypes.element,
  rowNumber: PropTypes.bool,
};

function getTableEntityProps(oldGetProps, newStyles) {
  return {
    ...oldGetProps,
    style: {
      ...oldGetProps.style,
      ...newStyles,
    },
  };
}

export function RTable({
  columns,
  data,
  perPage = 7,
  disablePagination = false,
  loading = false,
  onRowClick = () => {},
  fetchData = () => {},
  pageCount: controlledPageCount,
  topHeader,
  rowNumber = false,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    pageCount,
    gotoPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: perPage },
      pageCount: controlledPageCount,
      manualPagination: true,
      autoResetPage: false,
    },
    useBlockLayout,
    useExpanded,
    usePagination,
    useRowSelect
  );

  useEffect(() => {
    fetchData({ pageIndex, pageSize });
  }, [fetchData, pageIndex, pageSize]);
  return (
    <Main css={!disablePagination ? { height: '100%' } : null}>
      <Table
        {...getTableProps()}
        className="sticky"
      >
        <Header>
          <Container>
            <div>{topHeader}</div>
            <THead>
              {headerGroups.map((headerGroup) => (
                <THeaderRow
                  key={Math.random()}
                  {...headerGroup.getHeaderGroupProps()}
                  className="tr"
                >
                  {rowNumber ? (
                    <THeader
                      className="th"
                      css={{ width: '60px' }}
                    >
                      <TableColHeader icon={<IconCount />} />
                    </THeader>
                  ) : null}
                  {headerGroup.headers.map((column) => (
                    <THeader
                      key={column.id}
                      {...getTableEntityProps(
                        column.getHeaderProps(),
                        column.headStyle
                      )}
                      className="th"
                      isSorted={column.isSorted}
                    >
                      {column.render('Header')}
                    </THeader>
                  ))}
                </THeaderRow>
              ))}
            </THead>
          </Container>
        </Header>
        <Container>
          <TBody
            {...getTableBodyProps()}
            className="body"
          >
            {page.map((row) => {
              prepareRow(row);
              return (
                <TRow
                  key={row.id}
                  {...row.getRowProps()}
                  onClick={onRowClick(row)}
                  className="tr"
                >
                  {rowNumber ? (
                    <TCell
                      className="td"
                      css={{ width: '60px' }}
                    >
                      {pageSize * pageIndex + row.index + 1}
                    </TCell>
                  ) : null}
                  {row.cells.map((cell) => {
                    return (
                      <TCell
                        key={Math.random()}
                        {...getTableEntityProps(
                          cell.getCellProps(),
                          cell.column.bodyStyle
                        )}
                        className="td"
                      >
                        {cell.render('Cell')}
                      </TCell>
                    );
                  })}
                </TRow>
              );
            })}
            {!data.length ? (
              <TableOverlay>
                <span>Table data is empty</span>
              </TableOverlay>
            ) : null}
          </TBody>
        </Container>
      </Table>

      {!disablePagination && pageCount > 1 ? (
        <TablePagination
          perPage={perPage}
          pageSize={pageSize}
          setPageSize={setPageSize}
          pageIndex={pageIndex}
          gotoPage={gotoPage}
          pageCount={pageCount}
          loading={loading}
        />
      ) : null}
    </Main>
  );
}
