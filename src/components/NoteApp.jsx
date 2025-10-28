import React from 'react';
import { getInitialData } from '../utils';
import NoteHeader from './NoteHeader';
import NoteInput from './NoteInput';
import NotesList from './NotesList';

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            searchQuery: '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({ notes });
    }

    onArchiveHandler(id) {
        const notes = this.state.notes.map((note) =>
            note.id === id ? { ...note, archived: !note.archived } : note
        );
        this.setState({ notes });
    }

    onAddNoteHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: new Date().toISOString(),
                    }
                ]
            }
        });
    }

    onSearchHandler(event) {
        this.setState({ searchQuery: event.target.value });
    }

    render() {
        const activeNotes = this.state.notes.filter((note) => {
            return !note.archived && note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase());
        });
        const archivedNotes = this.state.notes.filter((note) => {
            return note.archived && note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase());
        });

        return (
            <div className="note-app">
                <NoteHeader onSearch={this.onSearchHandler} />
                <div className="note-app__body">
                    <NoteInput addNote={this.onAddNoteHandler} />
                    <h2>Catatan Aktif</h2>
                    <NotesList notes={activeNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                    <h2>Arsip</h2>
                    <NotesList notes={archivedNotes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} />
                </div>
            </div>
        );
    }
}

export default NoteApp;