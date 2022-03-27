const router = require("express").Router();
// const request = require("./MontlyData");
module.exports = router;
// router.use("/data", request);

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
