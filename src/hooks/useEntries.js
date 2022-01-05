import { useContext } from 'react';
import { EntryContext } from '../context/EntryContext/EntryContext';

const useEntries = () => {
  const context = useContext(EntryContext);

  if (context) return context;
  throw new Error("yikes, entry context ain't set up right");
};

export default useEntries;
