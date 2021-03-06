// const sequelize = require('sequelize');
// const User = sequelize.define('user', {
//   id: {
//     type: sequelize.INTEGER,
//     autoIncrement: true,
//     primaryKey: true
//   },
//   taskId: {
//     type: sequelize.INTEGER,
//   },
//   name: {
//     type: sequelize.STRING,
//     allowNull: false,
//     validate: {
//       len: [1]
//     }
//   }
// });

module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define('user', {
    googleId: {
      type: DataTypes.STRING
    }
    // id: {
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   primaryKey: true
    // },
    // taskId: {
    //   type: DataTypes.INTEGER,
    // },
    // name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   validate: {
    //     len: [1]
    //   }
    // }
  });
  return User;

  // Class Method
  User.associate = function (models) {
    User.hasMany(models.Task);
  };
}

// module.exports = User;

