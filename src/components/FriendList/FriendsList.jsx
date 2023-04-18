import PropTypes, { arrayOf } from 'prop-types';
import { FriendListItem } from '../FriendList/FriendListItem';
import css from '../FriendList/FriendsList.module.css';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, name, avatar, isOnline }) => {
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
