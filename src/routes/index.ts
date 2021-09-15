import { NextFunction, Request, Response } from "express";
import { deleteTask, getList, getSingleTodo, getTodoForm, postTodo, updateTodo } from "../controllers/todoController";
import { createUser, getLogin, getSignUp, logout, signInUser } from "../controllers/userController";
import { auth } from "../middleware/auth";

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req: Request, res: Response, next: NextFunction) {
  if(req.cookies.myCookie){
    res.redirect('/todos')
  }else{
    res.render('index', { title: 'Express' });
  }
});


router.get('/users/signup', getSignUp)
router.post('/users/signup', createUser)
router.get('/users/login', getLogin)
router.post('/users/login', signInUser)
router.get('/todos',auth, getList)
router.get('/todos/completed',auth, getList)
router.get('/create-todo',auth, getTodoForm)
router.post('/create-todo',auth, postTodo)
router.get('/todos/:todoID',auth, getSingleTodo)
router.post('/todos/:todoID',auth, updateTodo)
router.get('/todos/:todoID/complete',auth, updateTodo)
router.get('/todos/:todoID/delete',auth, deleteTask)
router.get('/logout',auth, logout)

module.exports = router;
