import React from 'react'
import css from './Contacts.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/contactSlice';
import { deleteContact } from 'redux/contactsOperations';

export default function Contacts() {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch()

    const filtered = React.useMemo(
        () => contacts.items.filter(contact => contact.name.toLowerCase().includes(filter.trim().toLowerCase())),
        [filter, contacts]
    );

    return (
        <ul className={css.contactList}>
            {filtered.map(contact =>
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
