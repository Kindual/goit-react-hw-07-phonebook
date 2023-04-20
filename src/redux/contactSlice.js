import { deleteContact, addContact, fetchContacts } from "./contactsOperations";

const { createSlice } = require("@reduxjs/toolkit");


export const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        contacts: {
            items: [],
            isLoading: false,
            error: null,
        },
        filter: '',
    },
    reducers: {
        updateFilter: (state, action) => {
            state.filter = action.payload
        },
    },
    extraReducers: {
        [fetchContacts.pending]: (state) => {
            state.contacts.isLoading = true;
        },
        [fetchContacts.fulfilled]: (state, action) => {
            state.contacts.items = action.payload;
            state.contacts.isLoading = false;
        },
        [fetchContacts.rejected]: (state, action) => {
            state.contacts.error = action.payload;
            state.contacts.isLoading = false;
        },

        [deleteContact.fulfilled]: (state, action) => {
            state.contacts.items = state.contacts.items.filter(item => item.id !== action.payload.id);
        },
        [deleteContact.rejected]: (state, action) => {
            state.contacts.error = action.payload;
        },

        [addContact.fulfilled]: (state, action) => {
            state.contacts.items.push(action.payload);
        },
        [addContact.rejected]: (state, action) => {
            state.contacts.error = action.payload;
        },
        
    }
})


export const { updateFilter } = contactSlice.actions

export const selectContacts = (state) => state.contact.contacts.items;
export const selectFilter = (state) => state.contact.filter;
export default contactSlice.reducer;