const {
   Category,
   City,
   Claim,
   Claimmer,
   Country,
   Institution,
   Picture
} = require(".")

const initModels = () => {
   //1.- Country 1 <=> N City
   Country.hasMany(City)
   City.belongsTo(Country)

   //2.- City 1 <=> N Claimmer
   City.hasMany(Claimmer)
   Claimmer.belongsTo(City)

   //3.- City 1 <=> N Institution
   City.hasMany(Institution)
   Institution.belongsTo(City)

   //4.- Institution N <=> M Category
   Institution.belongsToMany(Category, { through: "institution_categories" }, { as: "Categories" })
   Category.belongsToMany(Institution, { through: "institution_categories" }, { as: "Institutions" })

   //5.- Claimmer N <=> M Category
   Claimmer.belongsToMany(Category, { through: Claim })
   Category.belongsToMany(Claimmer, { through: Claim })

   //6.- Claimmer N <=> M Claim
   Claimmer.belongsToMany(Claim, { through: "favours" })
   Claim.belongsToMany(Claimmer, { through: "favours" })

   //7.- Claim 1 <=> N Picture
   Claim.hasMany(Picture)
   Picture.belongsTo(Claim)

   //8.- Claimmer 1 <=> 1 Picture
   Claimmer.hasOne(Picture)
   Picture.belongsTo(Claimmer)

   //9.- Institution 1 <=> 1 Picture
   Institution.hasOne(Picture)
   Picture.belongsTo(Institution)

   //10.- Category 1 <=> 1 Picture
   Category.hasOne(Picture)
   Picture.belongsTo(Category)
};

module.exports = { initModels };
