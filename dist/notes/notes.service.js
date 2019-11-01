"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let NotesService = class NotesService {
    constructor() {
        this.notes = [{
                id: 1,
                name: 'Some shit'
            },
            {
                id: 2,
                name: 'More shit'
            }];
    }
    getNotes() {
        return this.notes;
    }
    createNote(note) {
        this.notes = [...this.notes, Object.assign({}, note)];
    }
    updateNote(note) {
        this.notes = this.notes.map(p => {
            if (p.id == note.id)
                return Object.assign({}, note);
            return p;
        });
    }
    deleteNote(id) {
        this.notes = this.notes.filter(p => p.id != id);
    }
};
NotesService = __decorate([
    common_1.Injectable()
], NotesService);
exports.NotesService = NotesService;
//# sourceMappingURL=notes.service.js.map