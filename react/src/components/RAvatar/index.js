import PropTypes from 'prop-types';

import { Main, Wrap, Image, Name } from 'components/RAvatar/styled';

const avatarSizes = {
  default: 50,
  xs: 30,
};
RAvatar.propTypes = {
  size: PropTypes.number,
  thumb: PropTypes.string,
  name: PropTypes.string,
  // isOnline: PropTypes.bool,
  children: PropTypes.element,
};

export function RAvatar({ size, thumb, name = 'Avatar', children }) {
  let formattedName;
  if (!thumb) {
    const splitName = name.split(' ');
    formattedName =
      splitName.length > 1
        ? splitName[0].charAt(0) + splitName[1].charAt(0)
        : splitName[0].substr(0, 1);
  }
  const avatarSize = avatarSizes[size] || avatarSizes.default;

  const avatar = thumb ? (
    <Image
      src={thumb}
      alt="avatar"
      width={avatarSize}
      height={avatarSize}
    />
  ) : (
    <Name size={size}>{formattedName}</Name>
  );

  return (
    <Main>
      <Wrap size={size}>
        {avatar}
        {children}
        {/* {isOnline && <div className={styles['status-circle']} />} */}
      </Wrap>
    </Main>
  );
}
