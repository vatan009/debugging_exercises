import { useState, useEffect } from 'react';

const ITEMS = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

export default function FilteredList() {
  const [filter, setFilter] = useState('');
  const [toast, setToast] = useState('');

  useEffect(() => {
    setToast('Filter applied');
  }, [filter]);

  const visible = ITEMS.filter(i => i.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <input value={filter} onChange={e => setFilter(e.target.value)} placeholder="Filter items" />
      <ul>{visible.map(i => <li key={i}>{i}</li>)}</ul>
      {filter && <p>{toast}</p>}
    </div>
  );
}
