import user from './tarea1/utils/user.json';
import { UserProfile } from './tarea1/components/UserProfile';

// import { CompoTest } from './CompoTest';
// --------------------------------------------------------------
// -------- Lógica para procesar los datos del Json -------------
// --------------------------------------------------------------

// Task 1:

const userData = {
  name: user.username,
  tag: user.tag,
  location: user.location,
  avatar: user.avatar,
  followers: user.stats.followers,
  views: user.stats.views,
  likes: user.stats.likes,
};

// Task 2:

// --------------------------------------------------------------

export const App = () => {
    return (
        <div>
            <UserProfile
                avatarUrl={userData.avatar}
                userName={userData.name}
                userTag={userData.tag}
                userLocation={userData.location}
                userFollowers={userData.followers}
                userViews={userData.views}
                userLikes={userData.likes}
            />
        </div>
    );
};