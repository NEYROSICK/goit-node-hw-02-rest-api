const errorHandler = (err) => {
  if (err.message.includes("ENOENT")) {
    return { status: 500, message: "Internal Server Error" };
  }
  return err;
};

module.exports = errorHandler;
