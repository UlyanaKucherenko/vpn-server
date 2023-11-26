import PropTypes from 'prop-types';

import { IconExport } from 'components/Icons';
import { Label, Icon } from './styled';

RButtonExport.propTypes = {
  accept: PropTypes.string,
  multiple: PropTypes.bool,
  height: PropTypes.number,
  disabled: PropTypes.bool,
};

function RButtonExport({
  accept = 'image/*',
  multiple = false,
  height = 28,
  disabled = false,
}) {
  const onChange = (e) => {
    console.log('=> File', e.target.files[0]);
  };

  return (
    <Label
      height={height}
      disabled={disabled}
    >
      <input
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={onChange}
        hidden
        disabled={disabled}
      />
      <Icon>
        <IconExport />
      </Icon>
      <div>Export</div>
    </Label>
  );
}

export default RButtonExport;
