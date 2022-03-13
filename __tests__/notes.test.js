const fs = require("fs");
const {
    findById,
    createNewNote,
    validateNote
} = require("../lib/notes.js");
const { notes } = require("../db/notes");

jest.mock('fs');

test("creates a note object", () => {
    const note = createNewNote(
        { title: 'Shopping', text: 'eggs, milk, bread', id: '03'},
        notes
    );

    expect(note.title).toBe('Shopping');
    expect(note.text).toBe('eggs, milk, bread');
    expect(note.id).toBe('03');
});

test("finds by id", () => {
    const startingNotes = [
        {
            title: "Test Title",
            text: "Test text",
            id: "01"
        }
    ];

    const result = findById("01", startingNotes);

    expect(result.title).toBe("Test Title");
});

test("validates note text", () => {
    const note = {
        title: "Test Title",
        text: "Test text",
        id: "01"
    };

    const invalidNote = {
        title: "Test Title",
        text: "",
        id: "01"
    };

    const result = validateNote(note);
    const result2 = validateNote(invalidNote);

    expect(result).toBe(true);
    expect(result2).toBe(false);
});