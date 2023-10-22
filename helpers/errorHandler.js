const errorHandler = (err) => {
  if (err.message.includes("ENOENT")) {
    return { status: 500, message: "Internal Server Error" };
  } else if (err.kind === "ObjectId") {
    return { status: 404, message: "Not Found" };
  }
  return err;
};

module.exports = errorHandler;
