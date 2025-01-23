import React, { useEffect, useState } from 'react';

const NoteCount = () => {
    const [noteCount, setNoteCount] = useState(0);

    const fetchNoteCount = async () => {
        try {
            const response = await fetch('https://backend-slidestonotes.onrender.com/get-note-count');
            const data = await response.text();
            setNoteCount(Number(data));
        } catch (error) {
            console.error('Error fetching note count:', error);
        }
    };

    const formatNumber = (num) => {
        return num.toLocaleString();
    };

    useEffect(() => {
        fetchNoteCount();
    }, []);

    return (
        <div>
            <h2 className='notes-generated'>
                We have generated notes for <span className="counter">{formatNumber(noteCount)}</span> files so far!
            </h2>
        </div>
    );
};

export default NoteCount;