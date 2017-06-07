const {mapping} = require('./database');

/**
 *
 * resolves a key with given arguments in the selected language
 *
 * @param language ISO (2 char) language code
 * @param key key to be resolved
 * @param args arguments to be resolved in key
 */
function resolveKey(language, key, args) {

}

/**
 *
 * get a list of every key with it's value in the form of:
 *
 * <code>
 *     {
 *      'key1': 'value1',
 *      'key2': 'value2 {0]'
 *     }
 * </code>
 *
 * @param language ISO (2 char) language code
 * @param bundle (OPTIONAL) bundle code for filtering
 */
function getAllKeys(language, bundle) {

}

module.exports = {
    'resolveKey': resolveKey,
    'getAllKeys': getAllKeys
};