import './user-profile.css';

export const UserProfile = ({avatarUrl, userName, userTag, userLocation, userFollowers, userViews, userLikes}) => {
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
