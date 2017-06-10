const {mapping} = require('./database');
const resolver = require('javascript-javastyle-i18n');

/**
 *
 * resolves a key with given arguments in the selected language
 *
 * @param language {string} ISO (2 char) language code
 * @param key {string} key to be resolved
 * @param args {Array} arguments to be resolved in key
 */
function resolveKey(language, key, args) {
	let message = ""; //FIXME resolve key

	return resolver(message, args);
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
 * @param language {string} ISO (2 char) language code
 * @param bundle {string} (OPTIONAL) bundle code for filtering
 */
function getAllKeys(language, bundle) {

}

module.exports = {
    'resolveKey': resolveKey,
    'getAllKeys': getAllKeys
};