
import { IUser, User } from "../../models/old/userModel";
import { Response, Request } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Result } from "express-validator";
const jwtSecret = "1234567890!@#$%^&*()";

type TError= null|Error|{message:string};

interface SignUpResponse {
  success: boolean;
  message: string;
}

export const SignUp = async (req: Request, res: Response): Promise<void> => {
  if (!req.body) {
    const response: SignUpResponse = {
      success: false,
      message: "Content can not be empty!"
    };
    res.status(400).json(response);
    return;
  }

  User.UserExist(req.body.userName, req.body.email, async (err: TError, result) => {
    console.log("checking user exist or not ")
    if (result === null) {
      const response: SignUpResponse = {
        success: false,
        message: err?.message || "User does not exist."
      };
      return res.status(500).json(response);
    } else {
      const salt = await bcrypt.genSalt(10);
      const newUser: User = new User({
        username: req.body.userName,
        passwordHash: await bcrypt.hash(req.body.passwordHash, salt),
        email: req.body.email
      });

      console.log("enter into creating user ")
      newUser.createUser((err: TError, result: any) => {
        if (err) {
          const response: SignUpResponse = {
            success: false,
            message: err.message || "Some error occurred while creating the User."
          };
          return res.status(500).json(response);
        } else {
          const response: SignUpResponse = {
            success: true,
            message: "User Created Successfully"
          };
          return res.status(200).json(response);
        }
      });
    }
  });
};


export const getUserById = (req: Request, res: Response): void => {
  const userId: number = req.body.userId // Assuming you're passing the user ID as a parameter

  if (isNaN(userId)) {
    res.status(400).json({
      message: "Invalid user ID format"
    });
  }

  User.findUserById(userId, (err, result) => {
    if (err) {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving the user."
      });
    } else {
      return res.json(result);
    }
  });
};


export const Login = (req: Request, res: Response): void => {
  const userName: string = req.body.username// Assuming you're passing the user ID as a parameter
  const password: string = req.body.password


  User.findUserByName(userName, async (err: Error | null | { message: string }, result: any) => {
    if (err) {
      return res.status(500).json({
        message: err?.message || "Some error occurred while retrieving the user.", succes: false
      });
    } else {
      const isPasswordMatch: boolean = await bcrypt.compare(
        password,
        result.passwordHash
      );


      if (!isPasswordMatch) {
        return res
          .status(400)
          .json({ message: 'Enter correct password', success: false });
      }
      const data = {
        user: {
          id: result.userId
        }
      }
      const authToken = jwt.sign(data, jwtSecret);
      return res.json({ success: true, authToken: authToken });
    }
  });
}

export const getUserIdWithAuthToken = (req: Request, res: Response): void => {
  try {
    const authToken: string = req.body.authToken;
    if (!authToken) {
      res.status(400).json({ error: 'Missing authentication token' });
      return;
    }

    // Use a more specific type for decoded, assuming your JWT payload structure
    interface DecodedToken {
      user: {
        id: string;
        // Add other properties if present in your payload
      };
      // Add other properties if present in your payload
    }

    const decoded: DecodedToken = jwt.verify(authToken, jwtSecret) as DecodedToken;

    if (!decoded || !decoded.user) {
      res.status(401).json({ error: 'Invalid authentication token' });
      return;
    }

    const userId: string = decoded.user.id;

    res.status(200).json({ userId });
  } catch (error) {
    const typedError = error as { message: string };
    console.error('Error decoding token:', typedError.message);
    res.status(500).json({ error: 'Internal server error' });
  }
};
