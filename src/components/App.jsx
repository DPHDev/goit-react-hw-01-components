import user from './tarea1/utils/user.json';
import statistics from './tarea2/utils/data.json';
import friends from './tarea3/utils/friends.json';
import transactions from './tarea4/utils/transactions.json';
import React, { useState } from 'react';
import { SelectTask } from './Select';
import { UserProfile } from './tarea1/components/UserProfile';
import { Statistics } from './tarea2/components/Statistics';
import { FriendList } from './tarea3/components/FriendList';
import { TransactionHistory } from './tarea4/components/TransactionHistory';

// --------------------------------------------------------------
// -------------- Lógica para seleccionar Task ------------------
// --------------------------------------------------------------

const componentes = {
    boton1: (props) => <UserProfile {...props} />,
    boton2: (props) => <Statistics {...props} />,
    boton3: (props) => <FriendList {...props} />,
    boton4: (props) => <TransactionHistory {...props} />,
};

const buttonOptions = [
  {
    key: 'boton1',
    label: 'Task 1',
    componente: 'boton1',
    props: {
      avatarUrl: user.avatar,
      userName: user.username,
      userTag: user.tag,
      userLocation: user.location,
      userFollowers: user.stats.followers,
      userViews: user.stats.views,
      userLikes: user.stats.likes,
    },
  },
  {
    key: 'boton2',
    label: 'Task 2',
    componente: 'boton2',
    props: {stats: statistics},
  },
  {
    key: 'boton3',
    label: 'Task 3',
    componente: 'boton3',
    props: {friends: friends},
  },
  {
    key: 'boton4',
    label: 'Task 4',
    componente: 'boton4',
    props: {transactions: transactions},
  },
];

// --------------------------------------------------------------

export const App = () => {
  const [componenteActual, setComponenteActual] = useState(null);

  const renderComponente = (componente, props) => {
    setComponenteActual({ componente, props });
  };

  const ComponenteSeleccionado = componentes[componenteActual?.componente];

  const handleSelection = (option) => {
    renderComponente(option.componente, option.props);
  };

  return (
    <>
    <SelectTask options={buttonOptions} onSelection={handleSelection} />
    <div className='app'>
      {ComponenteSeleccionado && (
        <ComponenteSeleccionado {...(componenteActual?.props || {})} />
        )}
    </div>
    </>
  );
};