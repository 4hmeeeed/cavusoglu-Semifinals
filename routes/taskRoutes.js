const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskControllers");

router.get("/", getAllTasks);            
router.get("/:id", getTaskById);         
router.post("/", addTask);                
router.put("/:id", updateTask);           
router.delete("/:id", deleteTask);        

module.exports = router;
