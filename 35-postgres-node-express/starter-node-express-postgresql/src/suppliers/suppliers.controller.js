async function create(req, res, next) {
  res.status(201).json({ data: { supplier_name: "new supplier" } });
}

async function update(req, res, next) {
  res.json({ data: { supplier_name: "updated supplier" } });
}

async function destroy(req, res, next) {
  res.sendStatus(204);
}

module.exports = {
  create,
  update,
  delete: destroy,
};
