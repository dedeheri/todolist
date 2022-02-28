const handleError = (req, res, next, error) => {
  res.status(402).json({ error });
};

module.exports = handleError;
