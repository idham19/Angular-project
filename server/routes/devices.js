const express  =require ('express');
const  {Devices}=require ("../models/index");
const router = express.Router();

// GET /devices
router.get("/", async (req, res, next) => {
  try {
    const devices = await Devices.findAll();
    res.send(devices);
  } catch (error) {
    next(error);
  }
});

// GET /devices/:deviceId
router.get("/:deviceId", async (req, res, next) => {
  try {
    const device = await Devices.findByPk(req.params['deviceId']);

    if (!device) {
      res.status(404);
      next();
    } else {
      res.send(device);
    }
  } catch (error) {
    next(error);
  }
});

module.exports=  router;
