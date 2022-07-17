const _ = require('lodash');
const { StatusCodes } = require('http-status-codes');

// eslint-disable-next-line no-unused-vars
const errorDecorator = (fn) => async (req, res, next) => {
    try {
        return await fn(req, res, next);
    } catch (error) {
        console.log(error)
        if (error.isBoom && error.output.statusCode !== 500) {
            return res.status(error.output.statusCode).send({
                error: { message: error.message, ..._.get(error, 'data', {}) },
                is_success: false,
            });
        }

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            error: {
                message: "issue",
                ..._.get(error, 'data', {}),
            },
            is_success: false,
        });
    }
};

module.exports = errorDecorator;
