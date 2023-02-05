const controllSavingUser = (req, res) => {
    const username = req.body.username;
    const phoneNumber = req.body.phoneNumber;
    const email = req.body.email;
    const website = req.body.website;
    const address = req.body.address;
    const picture = req.body.picture;
    const color = req.body.color;
    console.log(req.body);
};

module.exports = { controllSavingUser };
