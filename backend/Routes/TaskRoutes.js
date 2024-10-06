const router=require('express').Router();
const TaskController=require('../Controllers/TaskController');

router.get('/',TaskController.getAllTasks);
router.get('/:id',TaskController.getTaskbyId);
router.post('/add',TaskController.createTask);
router.put('/update/:id',TaskController.updateTask);
router.delete('/delete/:id',TaskController.deleteTask);

module.exports=router;