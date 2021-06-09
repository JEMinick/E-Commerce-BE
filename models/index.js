// import models
const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// The association can also be created from the Product side
Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

// Products belongToMany Tags (through ProductTag)
// Tags belongToMany Products (through ProductTag)
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  // as: 'planned_trips'
});
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  // as: 'location_travellers'
});

module.exports = {
  Category,
  Product,
  ProductTag,
  Tag
};
