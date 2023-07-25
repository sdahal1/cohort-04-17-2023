async function list(req, res, next) {
  res.json({
    data: [
      { category_name: "category 1" },
      { category_name: "category 2" },
      { category_name: "category 3" },
    ],
  });
}

module.exports = {
  list: [list],
};
