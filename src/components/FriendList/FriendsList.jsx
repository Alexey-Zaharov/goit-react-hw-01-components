import PropTypes from 'prop-types';
import css from '../FriendList/FriendsList.module.css';

function bgColor(isOnline) {
  if (isOnline) {
    return 'green';
  }
  return 'red';
}

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        const status = {
          backgroundColor: bgColor(isOnline),
        };
        return (
          <li key={id} className={css.item}>
            <span className={css.status} style={status}>
              {isOnline}
            </span>
            <img
              src={avatar}
              alt="User avatar"
              className={css.avatar}
              width="48"
            />
            <p className={css.name}>{name}</p>
          </li>
        );
      })}
    </ul>
  );
};

FriendsList.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};
