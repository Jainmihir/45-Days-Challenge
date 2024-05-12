const express = require("express")
const {handleGetAllUsers , handleGetAllUsersById, handleUpdatUserById, handleDeleteUserById, handleCreateUserById} = require("../controllers/user")
const router = express.Router();


router.route("/")
.post(handleCreateUserById)
.get(handleGetAllUsers);


router.route("/:id")
    .get(handleGetAllUsersById)
    .patch(handleUpdatUserById)
    .delete(handleDeleteUserById);


module.exports =  router;

