import { useState } from 'react';
import EntryList from '../../components/EntryList/EntryList';
import useAuth from '../../hooks/useAuth';
import useEntries from '../../hooks/useEntries';

const Guestbook = () => {
  const { entries, setEntries } = useEntries();
  const [entry, setEntry] = useState('');
  const { user } = useAuth();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEntries((prevState) => [{ entry, user, edit: false }, ...prevState]);
    setEntry('');
  };

  return (
    <main>
      <form onSubmit={handleFormSubmit}>
        <fieldset>
          <legend>Guestbook Entries</legend>
          <input
            value={entry}
            onChange={(e) => setEntry(e.target.value)}
            type="text"
            placeholder="say something nice"
          />
          <button>new entry</button>
        </fieldset>
      </form>
      <EntryList {...{ entries }} />
    </main>
  );
};

export default Guestbook;
