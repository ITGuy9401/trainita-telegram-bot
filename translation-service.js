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

	mapping.Resource.find();
	resolver(message, args);
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
	return new Promise((resolve, reject) => {
		let where = {
			language: {
				languageCode: language.toUpperCase();
	}
	};
		if (bundle) {
			where.bundle = {
				applicationCode: bundle
			}
		}

		return mapping.Resource.findAll({
			where: where,
			order: [['key', 'DESC']]
		}).then(() => {
			
		});
	});
}

module.exports = {
	'resolveKey': resolveKey,
	'getAllKeys': getAllKeys
};