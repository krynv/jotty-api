import { NotesService } from './notes.service';
interface NoteDto {
    id: string;
    name: string;
}
export declare class NotesController {
    private notesService;
    constructor(notesService: NotesService);
    getNotes(): {
        id: number;
        name: string;
    }[];
    getNote(params: any): {
        id: number;
        name: string;
    }[];
    createNote(note: NoteDto): void;
    updateNote(note: NoteDto): void;
    deleteNote(note: NoteDto): void;
}
export {};
