import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';

import { auth } from 'store/auth';
import { themeApp } from 'store/themeApp';
import { appTheme } from 'utils/const';
import { RButton } from 'components/Form/RButton';
import { ReactComponent as IconPlans } from 'assets/img/sidebar/plans.svg';
import { ReactComponent as IconUsers } from 'assets/img/sidebar/users.svg';
import { ReactComponent as IconServers } from 'assets/img/sidebar/servers.svg';
import { ReactComponent as LogoIcon } from 'assets/img/logo/logoW.svg';
import { ReactComponent as IconThemeLight } from 'assets/img/sidebar/themeLight.svg';
import { ReactComponent as IconThemeDark } from 'assets/img/sidebar/themeDark.svg';

import {
  Sidebar,
  Header,
  ItemLink,
  ItemIcon,
  ItemText,
  Footer,
  LogoutIcon,
} from './styled';

const links = [
  {
    route: '/admin/plans',
    icon: <IconPlans />,
    title: 'Plans',
  },
  { route: '/admin/users', icon: <IconUsers />, title: 'Users' },
  { route: '/admin/servers', icon: <IconServers />, title: 'Servers' },
];

export function RSidebar() {
  const dispatch = useDispatch();

  const renderLinks = useCallback(() => {
    return links.map(({ route, icon, title }) => {
      return (
        <ItemLink
          to={route}
          key={route}
        >
          <ItemIcon>{icon}</ItemIcon>
          <ItemText>{title}</ItemText>
        </ItemLink>
      );
    });
  }, []);

  const onLogout = () => dispatch(auth.thunks.authLogout());
  const theme = useSelector(themeApp.selectors.themeApp);
  const onChangeTheme = () => {
    dispatch(
      themeApp.actions.SET_THEME(
        theme === appTheme.light ? appTheme.dark : appTheme.light
      )
    );
  };

  return (
    <Sidebar>
      <div>
        <Header>
          <LogoIcon />
        </Header>
        {renderLinks()}
      </div>
      <Footer>
        <RButton
          onClick={onLogout}
          variant="alternative"
        >
          <LogoutIcon />
          <ItemText>Log out</ItemText>
        </RButton>
        <RButton
          onClick={onChangeTheme}
          variant="alternative"
          css={{ 'margin-left': '4px', padding: '8px' }}
        >
          {theme === appTheme.light ? <IconThemeLight /> : <IconThemeDark />}
        </RButton>
      </Footer>
    </Sidebar>
  );
}
