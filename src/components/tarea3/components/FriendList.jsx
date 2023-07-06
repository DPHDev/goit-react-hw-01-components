import PropTypes from "prop-types";

export const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({id, isOnline, name, avatar}) => (
      <li className="friend-list_item" key={id}>
        <span className={ isOnline ? "status online" : "status offline"}></span>
        <img className="avatar" src={avatar} alt={name} width="48" />
        <p className="name">{name}</p>
      </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
      PropTypes.shape({
      id: PropTypes.number.isRequired,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired
    })  
  )
};