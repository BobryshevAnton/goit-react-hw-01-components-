import PropTypes from 'prop-types';
import css from './friendslist.module.css';

export const FriendListItem = ({ data: { avatar, name, isOnline } }) => {
  return (
    <>
      <span
        className={
          isOnline ? `${css.status} ${css.on}` : `${css.status} ${css.off}`
        }
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};
FriendListItem.prototype = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
