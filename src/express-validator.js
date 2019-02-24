const { validationResult } = require('express-validator/check');

function handler(checks) {
    if (!Array.isArray(checks)) checks = [];
    checks.push((req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                type: 'Express Validator',
                errors: errors.array()
            });
        }
        next();
    });
    return checks;
}

module.exports = handler;