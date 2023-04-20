import React from 'react'
import css from './Contacts.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contactSlice';
import { deleteContact } from 'redux/contactsOperations';

export default function Contacts() {
    const contacts = useSelector(selectContacts);
    const filtering = useSelector(selectFilter);
    const dispatch = useDispatch()

    const filtered = React.useMemo(
        () => contacts.filter(contact => contact.name.toLowerCase().includes(filtering.trim().toLowerCase())),
        [contacts, filtering]
    );

    return (
        <ul className={css.contactList}>
            {filtered.length > 0 && filtered.map(contact =>
                <li key={contact.id} className={css.contactItem}>
                    <p
                        className={css.contactName}> {contact.name}: {contact.phone}</p>
                    <button
                        type='button'
                        onClick={() => dispatch(deleteContact(contact.id))}
                        className={css.contactBtn}>Delete</button>
                </li>
            )}
        </ul>
    )
}
