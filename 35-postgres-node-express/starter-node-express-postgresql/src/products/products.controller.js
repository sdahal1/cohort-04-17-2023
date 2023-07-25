function read(req, res, next) {
  res.json({ data: { product_title: "some product title" } });
}

function list(req, res, next) {
  res.json({
    data: [{ product_title: "product 1" }, { product_title: "product 2" }],
  });
}

module.exports = {
  read: [read],
  list: [list],
};
