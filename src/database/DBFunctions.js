import DBHelper from "./DBHelper";
import * as DBConstants from './DBConstants';
import * as Utility from '../util/Utility';
let dbHelper = undefined;

export default class DBFunctions {
    constructor() {
        if (DBFunctions._instance) {
            //Utility.log('Singleton classes can not be instantiated more than once.')
            return DBFunctions._instance
        }
        //Utility.log('Singleton classes can not be instantiated')
        DBFunctions._instance = this;
        return DBFunctions._instance
    }

    getDbHelper() {
        if (!dbHelper) {
            //Utility.log('Singleton classes can not be instantiated 2')
            dbHelper = new DBHelper();
        }
        return dbHelper;
    }

    closeDatabase(db) {
        if (db) {
            Utility.log("Closing DB");
            db.close()
                .then(status => {
                    Utility.log("Database CLOSED");
                })
                .catch(error => {
                    Utility.log('closeDatabaseErr==>', error);
                });
        } else {
            Utility.log("Database was not OPENED");
        }
    }

    updateTableByQuery(query) {
        return new Promise((resolve) => {
            this.getDbHelper().initDB().then((db) => {
                db.transaction((tx) => {
                    tx.executeSql(query, []).then(([tx, results]) => {
                        resolve(results);
                    });
                }).then((result) => {
                    //this.closeDatabase(db);
                }).catch((err) => {
                    Utility.log(err);
                });
            }).catch((err) => {
                Utility.log(err);
            });
        });
    }

    insertCountryAndLanguage(data) {
        let countryCount = 0, langCount = 0;
        return new Promise((resolve) => {
            this.getDbHelper().initDB().then((db) => {
                db.transaction((tx) => {
                    data.forEach((country) => {
                        let query = "(?,?,?,?,?,?)";
                        tx.executeSql('INSERT INTO ' + DBConstants.COUNTRY_TABLE + ' (' + DBConstants.COUNTRY_ID + ', ' + DBConstants.COUNTRY_CODE + ', ' + DBConstants.COUNTRY + ', ' + DBConstants.COUNTRY_FLAG + ', ' + DBConstants.COUNTRY_CURRENCY + ', ' + DBConstants.COUNTRY_BASE_URL + ')' + ' VALUES ' + query + ";", [country[DBConstants.COUNTRY_ID], country[DBConstants.COUNTRY_CODE], country[DBConstants.COUNTRY], country[DBConstants.COUNTRY_FLAG], country[DBConstants.COUNTRY_CURRENCY], country[DBConstants.COUNTRY_BASE_URL]]).then(([tx, results]) => {
                            countryCount = countryCount++;
                        });
                        if (country.language && country.language.length > 0) {
                            country.language.forEach((language) => {
                                let query = "(?,?,?,?,?,?,?)";
                                tx.executeSql('INSERT INTO ' + DBConstants.LANGUAGE_TABLE + ' (' + DBConstants.UNIQUE_ID + ', ' + DBConstants.LANGUAGE_ID + ', ' + DBConstants.LANGUAGE_CODE + ', ' + DBConstants.LANGUAGE + ', ' + DBConstants.DATE_FORMAT + ', ' + DBConstants.DATE_FORMAT_FULL + ', ' + DBConstants.COUNTRY_ID + ')' + ' VALUES ' + query + ";", [(country[DBConstants.COUNTRY_ID] + '_' + language[DBConstants.LANGUAGE_ID]), language[DBConstants.LANGUAGE_ID], language[DBConstants.LANGUAGE_CODE], language[DBConstants.LANGUAGE], language[DBConstants.DATE_FORMAT], language[DBConstants.DATE_FORMAT_FULL], country[DBConstants.COUNTRY_ID]]).then(([tx, results]) => {
                                    langCount = langCount++;
                                });
                            })
                        }
                    });
                }).then((result) => {
                    Utility.log('Country Inserted', countryCount);
                    Utility.log('Language Inserted', langCount);

                    resolve(countryCount, langCount);
                    //this.closeDatabase(db);
                }).catch((err) => {
                    Utility.log(err);
                });
            }).catch((err) => {
                Utility.log(err);
            });
        });
    }

    getLanguagesByCountryId(countryId) {
        return new Promise((resolve) => {
            const products = [];
            this.getDbHelper().initDB().then((db) => {
                db.transaction((tx) => {
                    tx.executeSql("SELECT * FROM " + DBConstants.LANGUAGE_TABLE + " WHERE " + DBConstants.COUNTRY_ID + " = '" + countryId + "'", []).then(([tx, results]) => {
                        var len = results.rows.length;
                        for (let i = 0; i < len; i++) {
                            let row = results.rows.item(i);
                            products.push(row);
                        }

                        resolve(products);
                        //this.closeDatabase(db);
                    });
                }).then((result) => {
                    //this.closeDatabase(db);
                }).catch((err) => {
                    Utility.log(err);
                });
            }).catch((err) => {
                Utility.log(err);
            });
        });
    }

    getCountries() {
        return new Promise((resolve) => {
            const products = [];
            this.getDbHelper().initDB().then((db) => {
                db.transaction((tx) => {
                    tx.executeSql("SELECT * FROM " + DBConstants.COUNTRY_TABLE, []).then(([tx, results]) => {
                        var len = results.rows.length;
                        for (let i = 0; i < len; i++) {
                            let row = results.rows.item(i);
                            products.push(row);
                        }

                        resolve(products);
                        //this.closeDatabase(db);
                    });
                }).then((result) => {
                    //this.closeDatabase(db);
                }).catch((err) => {
                    Utility.log(err);
                });
            }).catch((err) => {
                Utility.log(err);
            });
        });
    }

    getCountriesCount() {
        return new Promise((resolve) => {
            this.getDbHelper().initDB().then((db) => {
                db.transaction((tx) => {
                    tx.executeSql('SELECT COUNT(*) as count FROM ' + DBConstants.COUNTRY_TABLE + ';', []).then(([tx, results]) => {
                        let count = 0;
                        if (results.rows.length > 0) {
                            count = results.rows.item(0).count
                        }

                        resolve(count);
                        //this.closeDatabase(db);
                    });
                }).then((result) => {
                    //this.closeDatabase(db);
                }).catch((err) => {
                    Utility.log(err);
                });
            }).catch((err) => {
                Utility.log(err);
            });
        });
    }
}
