import PropTypes from "prop-types";
import './user-profile.css';

export const UserProfile = ({avatarUrl="https://cdn-icons-png.flaticon.com/512/2922/2922506.png", userName, userTag, userLocation="", userFollowers=0, userViews=0, userLikes=0}) => {
  return (
    <div class="profile">
      <div class="description">
        <img src={avatarUrl} alt="User avatar" class="avatar" />
        <p class="name">{userName}</p>
        <p class="tag">@{userTag}</p>
        <p class="location">{userLocation}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{userFollowers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity ">{userViews}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{userLikes}</span>
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