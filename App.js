const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memorynode :');
const db = new Sequelize('foos', 'root', 'vaish19', {
  host: 'localhost',
  dialect: 'mysql'
});
// const User = db.define('User', {
//   // Model attributes are defined here
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: DataTypes.STRING
//     // allowNull defaults to true
//     },
//   employeeId: {
//     type: DataTypes.INTEGER            
//     // allowNull defaults to true
//     },
//   employeePlace: {
//     type: DataTypes.STRING            
//     // allowNull defaults to true
//     },
//   employeeQualification: {
//     type: DataTypes.STRING            
//     // allowNull defaults to true
//   }
// },
//   {
//   // Other model options go here
//   });

// // `sequelize.define` also returns the model
// const jane = await User.create({ firstName: "Jane" });
// // Jane exists in the database now!
// console.log(jane instanceof User); // true
// console.log(jane.firstName); // "Jane"
db.sync({
    force: true
 })//.then(() => {
//   const vaishu = User.create(
//     {
//       firstName: "vaishu",
//       lastName: "jasper",
//       employeeId: "356",
//       employeePlace: "Udumalpet",
//       employeeQualification: "B.Tech",

//     })
//   })
  .catch((err) => console.log(err))

// db.authenticate()
//   .then(() => {
//     console.log('connection success')
//   })
module.exports - {
  db
}
const Foo=Foo;

Foo.hasOne(Bar, {
  foreignKey: 'myFooId'
});
/*global foo*/
Bar.belongsTo(Foo);

// Option 2
Foo.hasOne(Bar, {
  foreignKey: {
    name: 'myFooId'
  }
});
Bar.belongsTo(Foo);

// Option 3
Foo.hasOne(Bar);
Bar.belongsTo(Foo, {
  foreignKey: 'myFooId'
});

// Option 4
Foo.hasOne(Bar);
Bar.belongsTo(Foo, {
  foreignKey: {
    name: 'myFooId'
  }
});
