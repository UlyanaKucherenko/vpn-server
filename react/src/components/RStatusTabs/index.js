import { useCallback, useState } from 'react';
import PropTypes from 'prop-types';

import { orderStatusOptions } from 'components/RStatusTabs/config';
import { orderStatusTabs } from 'utils/const';
import { Tabs, Tab } from './styled';

RStatusTabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.object),
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
};

export function RStatusTabs({
  options = orderStatusOptions,
  tabs = orderStatusTabs,
  onChange = () => {},
}) {
  const [activeTab, setActiveTab] = useState(options[0]);

  const onSelectTab = (value) => () => {
    setActiveTab(value);
    onChange(value);
  };

  const renderTabs = useCallback(() => {
    return options.map((option) => {
      return tabs.map(({ value, label, icon, id }) => {
        if (value === option)
          return (
            <Tab
              key={id}
              onClick={onSelectTab(value)}
              active={activeTab === value}
            >
              {icon}
              {label}
            </Tab>
          );

        return null;
      });
    });
  }, [options, activeTab]);

  return <Tabs>{renderTabs()}</Tabs>;
}
