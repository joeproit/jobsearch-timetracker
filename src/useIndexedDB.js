import { useEffect, useState } from 'react';
import { openDB } from 'idb';

function useIndexedDB() {
  const [db, setDb] = useState(null);

  useEffect(() => {
    const initDB = async () => {
      const db = await openDB('timeTrackerDB', 1, {
        upgrade(db) {
          db.createObjectStore('entries', { keyPath: 'id', autoIncrement: true });
        },
      });
      setDb(db);
    };
    initDB();
  }, []);

  const addEntry = async (entry) => {
    if (!db) return;
    const tx = db.transaction('entries', 'readwrite');
    const store = tx.objectStore('entries');
    await store.add(entry);
    return tx.done;
  };

  const getEntries = async () => {
    if (!db) return;
    return db.getAll('entries');
  };

  return { addEntry, getEntries };
}

export default useIndexedDB;
