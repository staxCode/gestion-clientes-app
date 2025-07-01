const { z, number } = require('zod');
const { updateUser } = require('../controllers/userController');

module.exports = {
    createUserSchema: (req, res, next) => {
        const schema = z.object({
            // id: z.number().optional(),
            lastname: z.string().min(1, "Last name is required"),
            phone: z.string().min(1, "Phone number is required"),
            email: z.string().email("Invalid email format"),
            company: z.string().min(1, "Company name is required")
        });
        const result = schema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({
                message: "Validation error",
                errors: result.error.errors
            });
        }
        next();
    },
    updateUserSchema: (req, res, next) => {
        const schema = z.object({
            id: z.number().int().positive("ID must be a positive integer"),
            lastname: z.string().min(1, "Last name is required").optional(),
            phone: z.string().min(1, "Phone number is required").optional(),
            email: z.string().email("Invalid email format").optional(),
            company: z.string().min(1, "Company name is required").optional()
        });
        const result = schema.safeParse(req.body);
        if (!result.success) {
            return res.status(400).json({
                message: "Validation error",
                errors: result.error.errors
            });
        }
        next();
    },
    deleteUserSchema: (req, res, next) => {
        const schema = z.object({
            id: z.number().int().positive("ID must be a positive integer")
        });
        const result = schema.safeParse(req.params);
        if (!result.success) {
            return res.status(400).json({
                message: "Validation error",
                errors: result.error.errors
            });
        }
        next();
    }
};