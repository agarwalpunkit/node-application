import Joi from "joi";


export const contactsValidation = (req, res, next) => {
    const { body } = req;
    const { name, email, phone } = body;

    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().required(),
        phone: Joi.string().required()
    })

    const { error, value } = schema.validate({
        name, email, phone
    });

    if(error) {
        res.status(400);
        res.json({
            message: "Required data is not present"
        })
    }
    
    // if(!name || !email || !phone) {
    //     res.status(400);
    //     res.json({
    //         message: "Required data is not present"
    //     })
    // }
    
    next();
}