 const express = require("express");
 const router= express.Router();
const {getAllInformation,
  getOneInformationById,
 createInformation,
   updateInformation,
   deleteInformation} = require ("../controller/apiController")

 router.get("/",getAllInformation );


router.get("/:id",getOneInformationById)


router.post("/", createInformation)


router.put("/:id", updateInformation)

router.delete("/",deleteInformation)



 module.exports =router;
