import { createContext } from 'react';

const EntryContext = createContext();

const EntryProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);

  return (
    <EntryContext.Provider value={{ entries, setEntries }}>
      {children}
    </EntryContext.Provider>
  );
};

export { EntryContext, EntryProvider };
