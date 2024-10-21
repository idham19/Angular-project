
// module.exports=  router;
const express = require('express');
const { Cart } = require("../models/index");
const router = express.Router();

// GET /carts
router.get("/", async (req, res, next) => {
  try {
    const carts = await Cart.findAll();
    res.send(carts);
  } catch (error) {
    next(error);
  }
});

// GET /carts/:deviceId
router.get("/:id", async (req, res, next) => {
  try {
    const cart = await Cart.findByPk(req.params['id']);

    if (!cart) {
      res.status(404);
      next();
    } else {
      res.send(cart);
    }
  } catch (error) {
    next(error);
  }
});

// POST /carts
router.post("/", async (req, res, next) => {
  try {
    // Create a new cart entry using the device data from the request body
    const cartItem = await Cart.create(req.body);
    res.status(201).send(cartItem); // Respond with the created cart item
  } catch (error) {
    next(error);
  }
});
router.delete("/:id",async(req,res,next)=>{
  try {
		const deviceId = req.params.id
		const findDevice = await Cart.findByPk(deviceId)
		const destroyedDevice = await findDevice.destroy()
		res.json(destroyedDevice)
	} catch (error) {
		console.error(error)
		next(error)
	}
})

module.exports = router;
