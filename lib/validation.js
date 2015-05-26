Joi = require('joi');
regex = require('./regex.js');
Hoek = require('hoek');

var basicImageSchema = {

    // content type provided by hapi must be an image
    file: Joi.object({
        hapi: {
            headers: {
                'content-type': Joi.string()
                    .regex(regex.imageContentType)
                    .required()
            }
        }
        // don't specify other values
    }).options({allowUnknown: true}).required()
};

var validCoord = Joi.number().integer().required();

// extend basic Schema
basicImageSchema.width = validCoord;
basicImageSchema.height = validCoord;
basicImageSchema.xCoord = validCoord;
basicImageSchema.yCoord = validCoord;

// export the image schema
exports.basicImageSchema = basicImageSchema;