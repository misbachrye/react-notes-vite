import React from 'react';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            charLimit: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const newTitle = event.target.value;
        if (newTitle.length <= this.state.charLimit) {
            this.setState({ title: newTitle });
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState({ body: event.target.value });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
        this.setState({ title: '', body: '' }); // Reset form
    }

    render() {
        return (
            <div className="note-input">
                <h2>Buat catatan</h2>
                <form onSubmit={this.onSubmitEventHandler}>
                    <p className="note-input__title__char-limit">
                        Sisa karakter: {this.state.charLimit - this.state.title.length}
                    </p>
                    <input
                        className="note-input__title"
                        type="text"
                        placeholder="Ini adalah judul..."
                        value={this.state.title}
                        onChange={this.onTitleChangeEventHandler}
                        required
                    />
                    <textarea
                        className="note-input__body"
                        type="text"
                        placeholder="Tuliskan catatanmu di sini..."
                        value={this.state.body}
                        onChange={this.onBodyChangeEventHandler}
                        required
                    ></textarea>
                    <button type="submit">Buat</button>
                </form>
            </div>
        )
    }
}

export default NoteInput;