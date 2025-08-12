import { useState, useEffect } from 'react';

import './App.css';
import ContactList from './components/ContactList/ContactList';
import SearchBox from './components/SearchBox/SearchBox';
import ContactForm from './components/ContactForm/ContactForm';
const phonesBook = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const deleteContact = id => {
    setPhones(prev => prev.filter(contact => contact.id !== id));
  };

  const savedContacts = localStorage.getItem('contacts');

  console.log(JSON.parse(savedContacts));
  const [phones, setPhones] = useState(JSON.parse(savedContacts) || phonesBook);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(phones));
    console.log('phones added');
  }, [phones]);

  const visiblePhones = phones.filter(phone =>
    phone.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <>
      <h1>PhoneBook </h1>
      <ContactForm phones={phones} setPhones={setPhones} />
      <SearchBox value={filter} setFilter={setFilter} />
      <ContactList phones={visiblePhones} deleteContact={deleteContact} />
    </>
  );
}

export default App;
