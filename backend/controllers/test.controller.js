exports.test = (req, res) => {
  res.json({
    message: "Backend is working",
    time: new Date().toISOString()
  });
};
