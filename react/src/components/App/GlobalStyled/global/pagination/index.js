import { css } from 'styled-components';

const Pagination = css`
  .rc-pagination {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    font-size: 16px;
    color: ${({ theme }) => theme.pagination.color};
  }

  .rc-pagination-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 32px;
    list-style: none;
    cursor: pointer;
  }

  .rc-pagination-item-active {
    background-color: ${({ theme }) => theme.pagination.bgActive};
    color: ${({ theme }) => theme.pagination.colorActive};
  }

  .rc-pagination-prev,
  .rc-pagination-next,
  .rc-pagination-options,
  .rc-pagination-jump-prev,
  .rc-pagination-jump-next {
    list-style-type: none;
  }
`;

export { Pagination };
