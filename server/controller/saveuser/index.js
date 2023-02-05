const { User } = require("../../model/user");

const controllSavingUser = (req, res) => {
    const username = req.body.username;
    const phoneNumber = req.body.phoneNumber;
    const email = req.body.email;
    const website = req.body.website;
    const address = req.body.address;
    const picture = req.body.picture;
    const color = req.body.color;

    const user = new User({
        username,
        phoneNumber,
        email,
        website,
        address,
        picture,
        color
    });
    user.save().then(() => console.log("user saved!"));

    return res.status(201).json({ message: "New information saved!" });
};

module.exports = { controllSavingUser };
