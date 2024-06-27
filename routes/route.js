const express = require("express");
const router = express.Router();

// auth routes
const { register, login } = require("../controllers/auth");
const { checkAuthorizationHeaders, authorizeUser } = require("../middlewares/authenticate");


router.post("/register", register);
router.post("/login", checkAuthorizationHeaders, login);

    
// dockerschema routes
const { createDockerschema, updateDockerschema, deleteDockerschema, getDockerschema, getAllDockerschema } = require('../controllers/dockerschema');
// 
router.post("/dockerschema/create", checkAuthorizationHeaders,authorizeUser("createdockerschema") ,createDockerschema);
router.put("/dockerschema/update/:id", checkAuthorizationHeaders,authorizeUser("updatedockerschema"), updateDockerschema);
router.delete("/dockerschema/delete/:id", checkAuthorizationHeaders, authorizeUser("deletedockerschema"), deleteDockerschema);
router.get("/dockerschema/get/:id", checkAuthorizationHeaders, authorizeUser("readdockerschema"), getDockerschema);
router.get("/dockerschema/getAll", checkAuthorizationHeaders, authorizeUser("readdockerschema"), getAllDockerschema);

  
module.exports = router;
