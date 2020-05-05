'use strict';

module.exports = {

    title: 'Zoo',

    components: {
        'db': {
            settings: {
                'database': process.env.MONGO_NAME || 'evado-zoo',
            }
        },
        'cookie': {
            secret: 'zoo.evado'
        },
        'session': {
            secret: 'zoo.evado'
        },
        'i18n': {
            // language: 'ru'
        },
        'router': {
            // defaultModule: 'front'
        },
        'fileStorage': {
        }
    },
    metaModels: {
        'base': {
            Class: require('evado-meta-base/base/BaseMeta'),
            DataHistoryModel: {
                Class: require('evado-module-office/model/DataHistory')
            },
            UserModel: {
                Class: require('evado-module-office/model/User')
            }
        },
        'navigation': {
            Class: require('evado-meta-navigation/base/NavMeta')
        }
    },
    modules: {
        'api': {
            config: {
                modules: {
                    'base': {
                        Class: require('evado-api-base/Module')
                    },
                    'navigation': {
                        Class: require('evado-api-navigation/Module')
                    }
                }
            }
        },
        'studio': {
            Class: require('evado-module-studio/Module')
        },
        'office': {
            Class: require('../module/office/Module')
        },
        'account': {
            Class: require('evado-module-account/Module')
        },
        'admin': {
            Class: require('evado-module-admin/Module'),
            params: {
                separateNextCommonMenuItem: true
            }
        }
    },
    users: require('./default-users'),
    security: require('./default-security'),
    tasks: require('./default-tasks'),
    utilities: require('./default-utilities'),
    params: {
    },
    widgets: {
        'commonMenu': {
        }
    }
};