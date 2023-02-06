const { User } = require("../../model/user");

const controllSavingUser = (req, res) => {
    const id = req.body._id;
    const username = req.body.username;
    const phoneNumber = req.body.phoneNumber;
    const email = req.body.email;
    const website = req.body.website;
    const address = req.body.address;
    const picture = req.body.picture;
    const color = req.body.color;

    User.findOne({}, async (err, res) => {
        const prevUsername = res.username;
        const prevPhoneNumber = res.phoneNumber;
        const prevEmail = res.email;
        const prevWebsite = res.website;
        const prevAddress = res.address;
        const prevPic = res.picture;
        const prevColor = res.color;

        if (res) {
            return await User.updateOne(
                {},
                {
                    username: username || prevUsername,
                    phoneNumber: phoneNumber || prevPhoneNumber,
                    email: email || prevEmail,
                    website: website || prevWebsite,
                    address: address || prevAddress,
                    picture: picture || prevPic,
                    color: color || prevColor
                }
            );
        }
        await user.save();
    });
    res.status(200).json({ message: "New information saved!" });
};

module.exports = { controllSavingUser };
