import dotenv from 'dotenv';
dotenv.config()

export const authMiddleware = (req, res, next) => {
    const token =
    req.headers['x-access-token'] ||
    req.query.token ||
    req.headers['authorization']?.split(' ')[1]; 
    const secretToken = process.env.SECRET_TOKEN; // Environment variable

    console.log(req.query.token);
    console.log(req.headers)
    console.log(secretToken)
    console.log("token", token )

    if (token === secretToken) {
        next();
    } else {
        res.status(403).send('Forbidden');
    }
};

// import dotenv from 'dotenv';
// dotenv.config();

// export const authMiddleware = (req, res, next) => {
//     // Retrieve token from various possible sources
//     // const token =
//     //     req.headers['x-access-token'] ||               // Custom header
//     //     req.query.token ||                            // Query parameter
//         const token = req.headers['authorization']; // Authorization header

//     const secretToken = process.env.SECRET_TOKEN; // Environment variable

//     // Debugging logs
//     console.log('Query Token:', req.query.token);
//     console.log('Headers:', req.headers);
//     console.log('Secret Token:', secretToken);
//     console.log('Extracted Token:', token);

//     // Token validation
//     if (token === secretToken) {
//         next(); // Proceed to the next middleware or route handler
//     } else {
//         res.status(403).send('Forbidden'); // Send a Forbidden response
//     }
// };
