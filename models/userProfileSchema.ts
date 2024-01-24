import { Schema, model, Document } from 'mongoose';

export interface IProfile extends Document {
  userId: number;
  username: string;
  bio: string;
  image: string;
  perDay: number;
  streak: number;
}

const ProfileSchema = new Schema<IProfile>({
  userId: { type: Number, required: true },
  username: { type: String, required: true },
  bio: { type: String, required: true },
  image: { type: String, required: true, default:"" },
  perDay :{ type: Number, required: true},
  streak:{ type: Number, required: true,default:0}
});
const Profile = model<IProfile>('Profile', ProfileSchema);

export default Profile;
