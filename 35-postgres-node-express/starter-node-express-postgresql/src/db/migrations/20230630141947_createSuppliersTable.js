/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("suppliers", (table) => {
    // sets supplier_id as the primary key
    table.increments("supplier_id").primary();
    table.string("supplier_name");
    table.string("supplier_address_line_1");
    table.string("supplier_address_line_2");
    table.string("supplier_city");
    table.string("supplier_state");
    table.string("supplier_zip");
    table.string("supplier_phone");
    table.string("supplier_email");
    table.text("supplier_notes");
    table.string("supplier_type_of_goods");

    // adds created_at and updated_at columns; 
    // true as 1st arg sets columns to timestamp type
    // true as 2nd arg sets columns to non-nullable and default current time    
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("suppliers");
};
