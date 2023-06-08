import PropTypes from "prop-types";

export const UserProfile = ({
  avatarUrl = "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  userName,
  userTag,
  userLocation = "",
  userFollowers = 0,
  userViews = 0,
  userLikes = 0 }) => {
  
  return (
    <div className="profile">
      <div className="description">
        <img src={avatarUrl} alt="User avatar" className="avatar" />
        <p className="name">{userName}</p>
        <p className="tag">@{userTag}</p>
        <p className="location">{userLocation}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{userFollowers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity ">{userViews}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{userLikes}</span>
        </li>
      </ul>
    </div>
  );
};

// -------------------------------------------------------
//------------- Component Prop Types----------------------
// -------------------------------------------------------

UserProfile.propTypes = {
  avatarUrl: PropTypes.string,
  userName: PropTypes.string.isRequired, 
  userTag: PropTypes.string.isRequired, 
  userLocation: PropTypes.string, 
  userFollowers: PropTypes.number.isRequired, 
  userViews: PropTypes.number, 
  userLikes: PropTypes.number
}

//---------------------------------------------------------