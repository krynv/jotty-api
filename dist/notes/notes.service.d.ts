export declare class NotesService {
    notes: {
        id: number;
        name: string;
    }[];
    getNotes(): {
        id: number;
        name: string;
    }[];
    createNote(note: any): void;
    updateNote(note: any): void;
    deleteNote(id: any): void;
}
