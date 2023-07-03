import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
const UserSchema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, required: true },
    password: { type: String, required: true },
    contributions: { type: Number },
    username: { type: String, required: true },
    // problem_solved : {type : string},
    role: { type: String, enum: ["User", "Admin", "Owner"] },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.generateJWTtoken = function () {
  return Jwt.sign({ user: this._id.toString() }, "OJ");
};

UserSchema.statics.finduserNameEmailAndPassword = async ({
  username,
  email,
  password,
}) => {
  if (email) {
    const user = await userModel.findOne({ email });
    if (!user) throw new Error("User does not exists");

    // Compare password
    const doesPasswordMatch = await bcrypt.compare(password, user.password);

    if (!doesPasswordMatch) throw new Error("Invalid Password !!!");

    return user;
  } else {
    const user = await userModel.findOne({ username });
    if (!user) throw new Error("User does not exists");
    // Compare password
    const doesPasswordMatch = await bcrypt.compare(password, user.password);

    if (!doesPasswordMatch) throw new Error("Invalid Password !!!");

    return user;
  }
};

UserSchema.statics.findUserNameAndEmail = async ({ email, username }) => {
  const userbyemail = await userModel.findOne({ email });
  const userbyusername = await userModel.findOne({ username });

  if (userbyemail) {
    throw new Error("User with this email already exist");
  }
  if (userbyusername) {
    throw new Error("User with this username already exist");
  }

  return false;
};

UserSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  // Generate bcrypt salt
  bcrypt.genSalt(8, (error, salt) => {
    if (error) return next(error);

    // Hash the password
    bcrypt.hash(user.password, salt, (error, hash) => {
      if (error) return next(error);

      // Assign hashed password
      user.password = hash;
      return next();
    });
  });
});

export const userModel = mongoose.model("Profile", UserSchema);
