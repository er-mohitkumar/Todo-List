const router = require("express").Router();
const { findOne } = require("../models/list");
const User = require("../models/user");
const bcrypt = require("bcryptjs");

//SIGN IN

router.post("/register", async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists" });
        }
        const hashpassword = bcrypt.hashSync(password);
        const user = new User({ email, username, password: hashpassword });
        await user.save().then(() => res.status(200).json({ message: "Sign Up Successful" }));
    } catch (error) {
        res.status(200).json({ message: "Ineternal server error" });
    }
});

//SIGN IN
router.post("/signin", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.status(401).json({ message: "Please Sign Up First" });
        }
        const isPasswordCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isPasswordCorrect) {
            res.status(200).json({ message: "Invalid Password!" });
        }
        const { password, ...others } = user._doc;
        res.status(200).json({ others });
    } catch (error) {
        res.status(200).json({ message: "User Already Exists" });
    }
});


module.exports = router;