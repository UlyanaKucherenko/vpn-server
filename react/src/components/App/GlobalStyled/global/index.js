import { createGlobalStyle } from 'styled-components';
import { Reset } from './reset';
import { Base } from './base';
import { Pagination } from './pagination';

export const GlobalStyles = createGlobalStyle`
  ${Reset}
  ${Base}
  ${Pagination}
`;
