// import express from "express";
// import * as NotesController from "../controllers/notes";

// const router = express.Router();

// router.get("https://try-notes-backend.onrender.com/", NotesController.getNotes);

// router.get(
//   "https://try-notes-backend.onrender.com/:noteId",
//   NotesController.getNote
// );

// router.post("/", NotesController.createNote);

// router.patch("/:noteId", NotesController.updateNote);

// router.delete("/:noteId", NotesController.deleteNote);

// export default router;

import express from "express";
import * as NotesController from "../controllers/notes";

const router = express.Router();

router.get("/", NotesController.getNotes);

router.get("/:noteId", NotesController.getNote);

router.post("/", NotesController.createNote);

router.patch("/:noteId", NotesController.updateNote);

router.delete("/:noteId", NotesController.deleteNote);

export default router;
