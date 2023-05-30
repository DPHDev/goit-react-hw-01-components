import React from 'react';
import ReactDOM from 'react-dom/client';
import user from './tarea1/utils/user.json';
import { UserProfile } from './tarea1/components/UserProfile';
import './index.css';

// --------------------------------------------------------------
// -------- Lógica para procesar los datos del Json -------------
// --------------------------------------------------------------
const userData = {
  name: user.username,
  tag: user.tag,
  location: user.location,
  avatar: user.avatar,
  followers: user.stats.followers,
  views: user.stats.views,
  likes: user.stats.likes,
};
// --------------------------------------------------------------

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProfile avatarUrl={userData.avatar} userName={userData.username} userTag={userData.tag} userLocation={userData.location} userFollowers={userData.followers} userViews={userData.views} userLikes={userData.likes}/>
  </React.StrictMode>
);
