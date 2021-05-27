import React, { useState, useEffect } from 'react';
import firebase from '../../fiebase';
import Note from '../../components/note/note'
import './loggedpage.css';

const LoggedPage = ({ userId, userEmail }) => {
    const [loading, setLoading] = useState(false);
    const [rerender, setRerender] = useState(0);
    const [usersNotes, setUsersNotes] = useState([]);

    const handleSignOut = () => {
        firebase.auth().signOut()
            .catch(err => console.log(err));
    }

    const getUsersNotes = async () => {
        setLoading(true);
        let notes = [];
        const db = firebase.firestore();
        await db.collection('notes').where('userId', '==', `${userId}`).get()
                .then(doc => doc.docs.map(doc => notes.push(doc.data())));
        setUsersNotes(notes);
        setLoading(false);
    }
    
    const createNewNote = async (e) => {
        e.preventDefault();
        //check if there's an empty note on the board
        //get all notes from database first
        let notes = [];
        const db = firebase.firestore();
        await db.collection('notes').where('userId', '==', `${userId}`).get()
                .then(doc => doc.docs.map(doc => notes.push(doc.data())));

        let empty = false;
        notes.forEach(note => {
            if(note.tasks.length < 1) {
                empty = true;
            }
        })
        if(empty){
            alert("You already created an empty note.");
        } else {
            const randNoteId = Math.floor(Math.random() * 3000);
            let notes = [...usersNotes];
            let noteDate = Date.now();
            const today = new Date(noteDate);
            notes[notes.length] = {
                noteDate: today.toDateString(),
                userId: userId,
                noteId: randNoteId,
                tasks: []
            }
            setUsersNotes(notes);
        }
    }

    const deleteNote = async (toBeDeleted) => {
        const db = firebase.firestore();
        await db.collection("notes").doc(`${toBeDeleted}`).delete().then(() => {
            setRerender(rerender => rerender + 1);
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    useEffect(() => {
        getUsersNotes();
    }, [rerender])

    if(loading) {
        return <h1 className="loading">Loading...</h1>
    } else {
        return(
            <div className="logged-page-container">
                <div className="header">
                    <h1 className="greeting">Welcome, { userEmail } </h1>
                    <h2 className="signOutBtn" onClick={ handleSignOut } >SIGN OUT</h2>
                    <h1 className="greetingPhone">Welcome, { userEmail }</h1>
                </div>
                
                <div className="notes-number">
                    <h1>You currently have {usersNotes.length} notes </h1>
                    <button onClick={ createNewNote } >Create note</button>
                </div>

                <div className="notes-container">
                    {
                        usersNotes.map(note => 
                            <Note 
                                key={ note.noteId }
                                noteId={ note.noteId } 
                                userId={ note.userId }
                                noteDate={ note.noteDate }
                                tasks={ note.tasks }
                                deleteNote={ deleteNote }
                            />)
                    }
                </div>
            </div>
        )
    }
}

export default LoggedPage;