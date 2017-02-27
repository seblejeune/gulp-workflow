/**
 * Created by sebastienlejeune on 27/02/2017.
 */
const _path = require('path');

module.exports = function fromRoot(p) {
    return _path.join(__dirname, '../..', p);
};