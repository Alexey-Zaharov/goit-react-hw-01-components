import PropTypes from 'prop-types';
import css from '../FriendList/FriendsList.module.css';

function bgColor(isOnline) {
  if (isOnline) {
    return 'green';
  }
  return 'red';
}

export const FriendListItem = ({ avatar, name, isOnline }) => {
  {
    const status = {
      backgroundColor: bgColor(isOnline),
    };
    return (
      <li className={css.item}>
        <span className={css.status} style={status}>
          {isOnline}
        </span>
        <img src={avatar} alt="User avatar" className={css.avatar} width="48" />
        <p className={css.name}>{name}</p>
      </li>
    );
  }
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
