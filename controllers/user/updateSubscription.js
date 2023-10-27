const User = require("../../models/user");

const updateSubscription = async (req, res, next) => {
  const { id } = req.user;

  const result = await User.findByIdAndUpdate(id, req.body, {
    new: true,
    select: "-password -token -_id -createdAt -updatedAt",
  });

  console.log(result);

  res.status(200).json(result);
};

module.exports = updateSubscription;
