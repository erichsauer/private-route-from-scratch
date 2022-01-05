import { listenerCount } from 'process';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const EntryList = ({ entries }) => {
  const { user } = useAuth();
  return (
    <ul>
      {entries.map((entry) => (
        <li key={entry + Date.now()}>
          "{entry}" - {user}
        </li>
      ))}
    </ul>
  );
};

export default EntryList;
