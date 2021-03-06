import { Injectable } from '@nestjs/common';

@Injectable()
export class NotesService {

    notes = [{
        id: 1,
        name: 'Some shit'
    },
    {
        id: 2,
        name: 'More shit'
    }];

    getNotes() {
        return this.notes;
    }

    createNote(note) {
        this.notes = [...this.notes, { ...note }];
    }

    updateNote(note) {
        this.notes = this.notes.map(n => {
            if (n.id == note.id) return { ...note };
            return n;
        });
    }

    deleteNote(id) {
        this.notes = this.notes.filter(n => n.id != id);
    }
}
