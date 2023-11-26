import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { dataURLtoFile } from 'utils/prepare';
import { HelperText } from 'components/Form/_shared/styled';
import { Wrap, FieldInput, FieldWrap, Label, DocName } from './styled';

RFileUpload.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  fullWidth: PropTypes.bool,
  placeholder: PropTypes.string,
  onFileLoad: PropTypes.func,
  setDocsPicturesAmount: PropTypes.func,
  setFaceDocsAmount: PropTypes.func,
  disabled: PropTypes.bool,
};

const acceptedFileTypes = ['image/png', 'image/jpg', 'image/jpeg'];

export function RFileUpload({
  type,
  name,
  label,
  value, // base64 format
  fullWidth = false,
  placeholder,
  onFileLoad,
  setDocsPicturesAmount,
  setFaceDocsAmount,
  disabled = false,
}) {
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState(null);

  const validateFile = (file) => {
    if (typeof file !== 'undefined') {
      if (!acceptedFileTypes.includes(file.type)) {
        return onFileSelectError({
          error: 'Wrong file type',
        });
      }
      if (file.size > 2000000) {
        return onFileSelectError({ error: 'Too large file' });
      }
      return onFileSelectSuccess(file, name);
    }

    return onFileSelectError({
      error: 'File load error',
    });
  };

  const handleFileInput = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    validateFile(file);
  };

  const onFileSelectSuccess = async (file, name) => {
    let fileBase64;
    setError(null);
    const fileData = new FileReader();
    fileData.onloadend = () => {
      fileBase64 = fileData.result;
      setImagePreviewUrl(fileBase64);
      onFileLoad(file, fileBase64, name);
    };
    fileData.readAsDataURL(file);
    setSelectedFile(file);

    if (type) {
      if (type === 'doc') {
        setDocsPicturesAmount((prevState) =>
          prevState < 2 ? prevState + 1 : prevState
        );
      } else {
        setFaceDocsAmount((prevState) =>
          prevState < 2 ? prevState + 1 : prevState
        );
      }
    }
  };

  const onFileSelectError = ({ error }) => {
    setError(error);
  };

  useEffect(() => {
    if (value) {
      setImagePreviewUrl(value);
      setSelectedFile(dataURLtoFile(value, name));
    }
  }, [value]);

  return (
    <Wrap
      fullWidth={fullWidth}
      withLabel={label}
    >
      <FieldWrap>
        <FieldInput
          // disabled={!!selectedFile || value}
          id={name}
          name={name}
          type="file"
          accept="image/png, image/jpg, image/jpeg"
          error={error}
          placeholder={placeholder}
          onChange={!disabled ? handleFileInput : undefined}
          disabled={disabled}
        />
        <Label
          htmlFor={name}
          error={error}
          imgPreview={imagePreviewUrl}
        >
          <DocName
            success={selectedFile}
            error={error}
          >
            {label}
          </DocName>
        </Label>
      </FieldWrap>
      <HelperText>{error}</HelperText>
    </Wrap>
  );
}
