import express from "express";
import * as NotesController from "../controllers/notes";

const router = express.Router();

router.get("https://try-notes-backend.onrender.com/", NotesController.getNotes);

router.get(
  "https://try-notes-backend.onrender.com/:noteId",
  NotesController.getNote
);

router.post(
  "https://try-notes-backend.onrender.com/",
  NotesController.createNote
);

router.patch(
  "https://try-notes-backend.onrender.com/:noteId",
  NotesController.updateNote
);

router.delete(
  "https://try-notes-backend.onrender.com/:noteId",
  NotesController.deleteNote
);

export default router;
