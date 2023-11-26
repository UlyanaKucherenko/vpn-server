import styled from 'styled-components';

import UploadIcon from 'assets/img/global/img/icon-upload-image.svg';
import { css } from 'styled-components';

const Wrap = styled.div``;

const FieldInput = styled.input`
  display: none;
`;

const FieldWrap = styled.div``;

const Label = styled.label`
  position: relative;
  width: 100%;
  min-height: 200px;
  border: 1px solid #e0e0e0;
  border-radius: 5px;

  cursor: pointer;
  ${({ imgPreview }) =>
    imgPreview
      ? css`
          background: center / cover url(${imgPreview}) no-repeat;
        `
      : css`
          background: center url(${UploadIcon}) no-repeat;
        `}
`;

const DocName = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #e0e0e0;
  color: var(--base-font-color);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  padding-block: 3px;
  text-align: center;

  ${({ success }) =>
    success &&
    css`
      color: var(--base-body-color);
      background-color: #48e18f;
    `}

  ${({ error }) =>
    error &&
    css`
      color: var(--base-body-color);
      background-color: #fd7f7f;
    `}
`;

export { Wrap, FieldInput, FieldWrap, Label, DocName };
