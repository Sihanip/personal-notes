import React from 'react'

class InputNotes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
            maxChar: 50,
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value.slice(0, this.state.maxChar),
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);

        this.setState(() => {
            return {
                title: '',
                body: '',
            }
        });
    }

    render() {
        return (

            <>
                <div className="title_form">
                    <h3>Buat Catatan Baru</h3>
                    <p>Sisa Karakter: {this.state.maxChar - this.state.title.length}</p>
                </div>

                <form onSubmit={this.onSubmitEventHandler} className='form_container'>
                    <input name='title' type="text" placeholder='Judul' className='input_judul' value={this.state.title} onChange={this.onTitleChangeEventHandler} required />
                    <textarea name="catatan" type="text" id="" placeholder='Isi Catatan' cols="30" rows="10" className='input_catatan' value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
                    <button type='submit' className='btn_addNotes'>Tambah +</button>
                </form>
            </>
        );
    }
}


export default InputNotes