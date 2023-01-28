import { FriendListItem } from './friendListItem';
import css from './friendslist.module.css';
import PropTypes from 'prop-types';

//

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friend__list}>
      {friends.map(item => (
        <li className={css.item} key={item.id}>
          <FriendListItem data={item} />
        </li>
      ))}
    </ul>
  );
};
FriendsList.prototype = {
  data: PropTypes.object,
};
