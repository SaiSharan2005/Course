// middleware/check-auth.ts

import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

// Extend the Request interface with a custom interface
interface AuthenticatedRequest extends Request {
    userData?: { userId: string; email: string };
}

const secretKey = 'your-secret-key';

export default (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    try {
        const authorizationHeader = req.headers.authorization;

        if (!authorizationHeader) {
            throw new Error('Authorization header not provided');
        }

        const token = authorizationHeader.split(' ')[1];
        const decodedToken = jwt.verify(token, secretKey) as { userId: string; email: string };
        req.userData = { userId: decodedToken.userId, email: decodedToken.email };
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Authentication failed' });
    }
};
