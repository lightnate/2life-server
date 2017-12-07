module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    'code',
    {
      'user_account': {
        'type': DataTypes.STRING(20),
        'allowNull': false
      },
      'timestamp': {
        'type': DataTypes.STRING(135),
        'allowNull': false
      },
      'used': {
        'type': DataTypes.BOOLEAN,
        'allowNull': false
      },
      'code': {
        'type': DataTypes.STRING(20),
        'allowNull': false
      }
    }
  )
}
