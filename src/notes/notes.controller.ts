import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { NotesService } from './notes.service';

interface NoteDto {
    id: string;
    name: string;
}

@Controller('notes')
export class NotesController {
    constructor(private notesService: NotesService) { }

    @Get()
    getNotes() {
        return this.notesService.getNotes();
    }

    @Get(':id')
    getNote(@Param() params) {
        console.log('get a single note', params.id);
        return this.notesService.getNotes().filter(p => p.id == params.id);
    }

    @Post()
    createNote(@Body() note: NoteDto) {
        console.log('create note', note);
        this.notesService.createNote(note);
    }

    @Put()
    updateNote(@Body() note: NoteDto) {
        console.log('update note', note);
        this.notesService.updateNote(note);
    }

    @Delete()
    deleteNote(@Body() note: NoteDto) {
        console.log('delete note', note.id);
        this.notesService.deleteNote(note.id);
    }
}
