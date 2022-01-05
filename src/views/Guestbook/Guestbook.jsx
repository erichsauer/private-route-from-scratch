import { useState } from 'react';
import EntryList from '../../components/EntryList/EntryList';

const Guestbook = () => {
  const [entries, setEntries] = useState([]);
  const [entry, setEntry] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setEntries((prevState) => [entry, ...prevState]);
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
