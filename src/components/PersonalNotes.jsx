import React from 'react'
import { getInitialData } from "../utils/index";
import CardNotes from './CardNotes';
import InputNotes from './InputNotes';

class PersonalNotes extends React.Component {
  constructor(props) {
    super(props);

    const notes = getInitialData();

    this.state = {
      notes: notes,
      querySearch: '',
    }

    this.onAddNoteEventHandler = this.onAddNoteEventHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
    this.onActiveHandler = this.onActiveHandler.bind(this);
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
  }

  onAddNoteEventHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          }
        ]
      }
    });
  }

  onDeleteHandler(id) {
    this.setState({ notes: this.state.notes.filter((note) => note.id !== id) });
  }

  onArchiveHandler(id) {
    this.setState({ notes: this.state.notes.map((note) => note.id === id ? { ...note, archived: true } : note) });
  }

  onActiveHandler(id) {
    this.setState({ notes: this.state.notes.map((note) => note.id === id ? { ...note, archived: false } : note) });
  }

  onSearchEventHandler({ query }) {
    this.setState(() => {
      return { querySearch: query }
    });
  }

  render() {
    return (
      <>
      <div className="container">
        <h1 className='title'>PERSONAL NOTES</h1>
        <InputNotes addNote={this.onAddNoteEventHandler}/>
        <CardNotes searchNote={this.onSearchEventHandler}  notes={this.state.notes} querySearch={this.state.querySearch} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} onActive={this.onActiveHandler} />
    </div>
      </>
    );
  }
}

export default PersonalNotes