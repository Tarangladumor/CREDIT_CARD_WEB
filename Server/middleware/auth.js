import dotenv from 'dotenv';
dotenv.config()

export const authMiddleware = (req, res, next) => {
    const token = req.headers['x-access-token'] || req.query.token;
    const secretToken = process.env.SECRET_TOKEN; // Environment variable

    if (token === secretToken) {
        next();
    } else {
        res.status(403).send('Forbidden');
    }
};
