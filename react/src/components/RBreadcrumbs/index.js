import PropTypes from 'prop-types';
import { useCallback } from 'react';

import { ReactComponent as IconChevronSvg } from 'assets/img/global/breadcrumbs/icon-chevron.svg';
import { Breadcrumbs, BLink } from './styled';

RBreadcrumbs.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      route: PropTypes.string,
      title: PropTypes.string,
    })
  ),
};

function RBreadcrumbs({ options }) {
  const renderBreadcrumbs = useCallback(() => {
    return options.map((link) => {
      return (
        <BLink
          key={link.id}
          to={link.route}
        >
          {link.title}
          <IconChevronSvg />
        </BLink>
      );
    });
  }, []);

  return <Breadcrumbs>{renderBreadcrumbs()}</Breadcrumbs>;
}

export { RBreadcrumbs };
