const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const htmlRoutes = require("./html");
const isAuthenticated = require("../config/middleware/isAuthenticated");

// API Routes
router.use("/api", apiRoutes);
router.use("/bugpie", htmlRoutes);
router.use('/page', htmlRoutes);

//testing...
router.use('/home', isAuthenticated, (req, res) => {
  res.json({
    email: req.user.email,
    id: req.user._id
  })
})

// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});




module.exports = router;
