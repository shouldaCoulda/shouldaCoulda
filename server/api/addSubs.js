const router = require('express').Router();
const Subscription = require('../db/models/Subscriptions')

router.post('/', async (req, res, next) => {
  try {
    const { name, price, imageUrl, websiteUrl } = req.body;
    const newSubscription = await Subscription.create({
      name,
      price,
      imageUrl,
      websiteUrl
    });
    res.json(newSubscription);
  } catch (error) {
    next(error)
  }
})

module.exports = router
