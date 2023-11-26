import PropTypes from 'prop-types';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

// import { config } from './config';

RRangeSlider.propTypes = {
  value: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  startPoint: PropTypes.number.isRequired,
  endPoint: PropTypes.number.isRequired,
};

function RRangeSlider({
  value,
  onChange = () => {},
  startPoint,
  endPoint,
  ...rest
}) {
  // const marks = {
  //   [startPoint]: {
  //     value: startPoint,
  //     style: config.marksStyles,
  //     label: <div className="text-nowrap">{startPoint}</div>,
  //   },
  //   [endPoint]: {
  //     value: endPoint,
  //     style: config.marksStyles,
  //     label: <div className="text-nowrap">{endPoint}</div>,
  //   },
  // };

  // { value, dragging, index, ...restProps }
  // const handleRender = (props) => {
  //   console.log('handleRender', props);
  //   return (
  //     <div>45</div>
  //     /* <SliderTooltip
  //       prefixCls="rc-slider-tooltip"
  //       overlay={`${value} km`}
  //       visible={dragging}
  //       placement="top"
  //       key={index}
  //     >
  //       <Handle
  //         value={value}
  //         {...restProps}
  //       />
  //     </SliderTooltip> */
  //   );
  // };

  return (
    <div className="pt-2 px-1">
      <Slider
        range
        allowCross={false}
        min={startPoint}
        max={endPoint}
        step={1}
        // defaultValue={[startPoint, endPoint]}
        value={value}
        onChange={onChange}
        // tipFormatter={(value) => `${value} km`}
        // handleRender={handleRender}

        // marks={marks}
        // dotStyle={config.dotStyle}
        // activeDotStyle={config.activeDotStyle}
        // trackStyle={[config.trackStyles]}
        // handleStyle={[config.handleStyles, config.handleStyles]}
        // railStyle={config.railStyles}
        {...rest}
      />
    </div>
  );
}

export { RRangeSlider };
