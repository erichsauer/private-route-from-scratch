import { listenerCount } from 'process';
import { useState } from 'react';
import useAuth from '../../hooks/useAuth';

const EntryList = ({ entries }) => {
  return (
    <ul>
      {entries.length > 0 &&
        entries.map(({ entry, user, edit }, i) => (
          <li key={entry + Date.now() + i}>
            "{entry}" - {user}
          </li>
        ))}
    </ul>
  );
};

export default EntryList;
