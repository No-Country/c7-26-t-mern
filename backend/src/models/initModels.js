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
   Institution.belongsToMany(Category, { through: "institution_categories" })
   Category.belongsToMany(Institution, { through: "institution_categories" })

   //5.- Claimmer 1 <=> N Claim
   Claimmer.hasMany(Claim)
   Claim.belongsTo(Claimmer)

   //6.- Category 1 <=> M Claim
   Category.hasMany(Claim)
   Claim.belongsTo(Category)

   //7.- Claimmer N <=> M Claim
   Claimmer.belongsToMany(Claim, { through: "favours", as: "Favorite" })
   Claim.belongsToMany(Claimmer, { through: "favours", as: "Favorite" })

   //8.- Claim 1 <=> N Picture
   Claim.hasMany(Picture)
   Picture.belongsTo(Claim)

   //9.- Claimmer 1 <=> 1 Picture
   Claimmer.hasOne(Picture)
   Picture.belongsTo(Claimmer)

   //10.- Institution 1 <=> 1 Picture
   Institution.hasOne(Picture)
   Picture.belongsTo(Institution)

   //11.- Category 1 <=> 1 Picture
   Category.hasOne(Picture)
   Picture.belongsTo(Category)
};

module.exports = { initModels };
