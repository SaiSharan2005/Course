import { Request, Response } from 'express';
import Profile, { IProfile } from '../models/userProfileSchema';

const addProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const profile: IProfile = await Profile.create(req.body);
    await profile.save();
    res.send(profile);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

const getProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const transaction: IProfile | null = await Profile.findOne(req.body);
    res.send(transaction);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

const getFewProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const transactions: IProfile[] = await Profile.find(req.body);
    res.json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).send();
  }
};

// const removeTransaction = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const result = await Profile.deleteOne(req.body);
//     res.json({ success: result});
//   } catch (error) {
//     console.log(error);
//     res.status(500).send();
//   }
// };

// const removeAllTransaction = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const result = await Profile.deleteMany(req.body);
//     res.json({ success: result});
//   } catch (error) {
//     console.log(error);
//     res.status(500).send();
//   }
// };

export { addProfile, getProfile, getFewProfile };
