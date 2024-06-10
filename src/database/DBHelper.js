import SQLite from 'react-native-sqlite-storage';
import * as DBConstants from './DBConstants';
import * as Utility from '../util/Utility';

export default class DBHelper {
    initDB() {
        let db;
        SQLite.DEBUG(false);
        // SQLite.DEBUG(APIConstant.CONSOLE_ENABLED);
        SQLite.enablePromise(true);
        return new Promise((resolve) => {
            /*Utility.log("Plugin integrity check ...");
            SQLite.echoTest()
                .then(() => {*/
            // Utility.log("Integrity check passed ...");
            // Utility.log("Opening database ...");
            SQLite.openDatabase(
                DBConstants.DATABASE_NAME,
                12,
                DBConstants.DATABASE_DISPLAY_NAME,
                DBConstants.DATABASE_SIZE
            ).then(DB => {
                db = DB;
                // Utility.log("Version", db);
                this.getDatabaseVersion(db).then(version => {
                    // Utility.log("Version", version);
                    db.transaction((tx) => {
                        if (version < DBConstants.DATABASE_VERSION) {
                            this.createTables(tx, true, version)
                        } else {
                            this.createTables(tx, false, version)
                        }
                    }).then(() => {
                        resolve(db);
                    }).catch(error => {
                        Utility.log('catchError==>', error);
                    });
                }).catch(error => {
                    Utility.log('catchError====>', error);
                });
                resolve(db);
                // Utility.log("Database OPEN");
            })
                .catch(error => {
                    Utility.log("database version problem:" + error);
                });
        });
    };

    getDatabaseVersion(database): Promise<number> {
        // Select the highest version number from the version table
        return database
            .executeSql('SELECT ' + DBConstants.KEY_DB_VERSION + ' FROM ' + DBConstants.DB_VERSION_TABLE + ' ORDER BY ' + DBConstants.KEY_DB_VERSION + ' DESC LIMIT 1')
            .then(([results]) => {
                if (results.rows && results.rows.length > 0) {
                    return results.rows.item(0).version;
                } else {
                    return 0;
                }
            })
            .catch(error => {
                Utility.log(`No version set. Returning 0. Details: ${error}`);
                return 0;
            });
    }

    // migration4To5(transaction) {
    //     transaction.executeSql('ALTER TABLE ' + DBConstants.DOCUMENT_IMAGE_TABLE + ' ADD COLUMN ' + DBConstants.DOCUMENT_PARENT_ID + ' TEXT');
    //     transaction.executeSql('ALTER TABLE ' + DBConstants.DOCUMENT_IMAGE_TABLE + ' ADD COLUMN ' + DBConstants.IS_CALCULATOR_IMAGE + ' TEXT');

    // }

    createTables(transaction, dropTables, version) {
        if (dropTables) {
            transaction.executeSql('DROP TABLE IF EXISTS ' + DBConstants.DB_VERSION_TABLE);
            transaction.executeSql('DROP TABLE IF EXISTS ' + DBConstants.COUNTRY_TABLE);
            //this.alterTable(transaction)
        }

        // version table
        transaction.executeSql('CREATE TABLE IF NOT EXISTS ' + DBConstants.DB_VERSION_TABLE + '('
            + DBConstants.KEY_DB_VERSION + ' INTEGER NOT NULL)');

        transaction.executeSql('CREATE TABLE IF NOT EXISTS ' + DBConstants.COUNTRY_TABLE + '('
            + DBConstants.COUNTRY_ID + ' TEXT NOT NULL PRIMARY KEY ON CONFLICT REPLACE, '
            + DBConstants.COUNTRY_CODE + ' TEXT, '
            + DBConstants.COUNTRY + ' TEXT, '
            + DBConstants.COUNTRY_FLAG + ' TEXT, '
            + DBConstants.COUNTRY_BASE_URL + ' TEXT, '
            + DBConstants.COUNTRY_CURRENCY + ' TEXT)');

        // transaction.executeSql("CREATE INDEX IF NOT EXISTS status_index ON " + DBConstants.STOCK_TABLE + " (" + DBConstants.STOCK_CAR_STATUS + ")")

        transaction.executeSql('INSERT INTO ' + DBConstants.DB_VERSION_TABLE + ' VALUES (?)', [DBConstants.DATABASE_VERSION]);
    }
}