'use strict';
const Utils = require('./utils.js');
const Sequelize = require('sequelize');
const Config = require('./config.js');

var connection = new Sequelize(Config.get("JAWSDB_URL"), {
    dialect: Config.get('JAWSDB_DIALECT'),

    pool: {
        max: Config.get('JAWSDB_POOL_MAX'),
        min: Config.get('JAWSDB_POOL_MIN'),
        idle: Config.get('JAWSDB_POOL_IDLE')
    },

    define: {
        // don't use camelcase for automatically added attributes but underscore style
        // so updatedAt will be updated_at
        underscored: true,

        // disable the modification of tablenames; By default, sequelize will automatically
        // transform all passed model names (first parameter of define) into plural.
        // if you don't want that, set the following
        freezeTableName: true
    }
});
connection.authenticate().complete(function (err) {
    if (err) {
        console.error('Unable to connect to the database:', err);
    } else {
        console.debug('Connection has been established successfully.');
    }
});

let mapping = {};

mapping.Language = connection.define('LANGUAGE', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    languageCode: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        field: 'LANGUAGE_CODE'
    },
    engName: {
        type: Sequelize.STRING,
        allowNull: false,
        field: 'ENG_NAME'
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

mapping.ResourceBundle = connection.define('RESOURCE_BUNDLE', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    applicationCode: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        field: 'APPLICATION_CODE'
    }
});

mapping.Resource = connection.define('RESOURCE', {

});

connection.sync();

module.exports = {
    'mapping': mapping,
    'connection': connection
};