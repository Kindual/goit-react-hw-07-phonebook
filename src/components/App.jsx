import React, { useEffect } from 'react'
import ContactForm from './ContactForm/ContactForm'
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import Section from './Section/Section'
import { useDispatch } from 'react-redux';
import { fetchContacts} from 'redux/contactsOperations';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);

  return (
    <div>
      <Section>
        <h1>Phonebook</h1>
        <ContactForm/>
      </Section>

      <Section>
        <h2>Contacts</h2>
        <Filter />
        <Contacts/>
      </Section>
    </div>
  )
}
