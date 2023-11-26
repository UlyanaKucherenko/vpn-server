import PropTypes from 'prop-types';

import { Tabs, Tab, TabTitle } from './styled';

RTabs.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string,
      title: PropTypes.string,
    })
  ),
  activeTab: PropTypes.string,
  setTab: PropTypes.func,
};

export function RTabs({ options, activeTab, setTab = () => {} }) {
  const renderTabs = () => {
    return options.map((tab) => {
      return (
        <Tab
          key={tab.slug}
          onClick={() => setTab(tab.slug)}
        >
          <TabTitle active={tab.slug === activeTab}>{tab.title}</TabTitle>
        </Tab>
      );
    });
  };

  return <Tabs>{renderTabs()}</Tabs>;
}
