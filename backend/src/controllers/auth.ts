import { Auth } from "../models/auth";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/user";

export const registerUser = async (data: any) => {
  try {
    const { password } = data;
    const plainToHash = await bcrypt.hash(password, 10);

    const newAuth = await Auth.create({
      ...data,
      password: plainToHash,
    });

    const newUser = await User.create({
      email: newAuth.email,
      authId: newAuth.id,
    });

    return {
      auth: newAuth,
      user: newUser,
    };
  } catch (error: any) {
    if (error.name === "SequelizeUniqueConstraintError") {
      const details = error.errors?.map((err: any) => ({
        field: err.path,
        message: err.message,
      }));
      throw new Error(
        `Validation error: ${details
          ?.map((detail: any) => `${detail.field}: ${detail.message}`)
          .join(", ")}`
      );
    }

    throw new Error(error.message || "An unknown error occurred");
  }
};

export const loginUser = async (data: any) => {
  try {
    const { email, password } = data;

    const findUser = await Auth.findOne({ where: { email } });
    if (!findUser) {
      throw new Error("User not found");
    }

    const checkPassword = await bcrypt.compare(password, findUser.password);
    if (!checkPassword) {
      throw new Error("Password incorrect");
    }

    const payload = {
      id: findUser.id,
      name: findUser.name,
    };

    const token = jwt.sign(
      payload,
      process.env.JWT_SECRET || "default_secret",
      {
        expiresIn: "20h",
      }
    );

    const dataObj = {
      user: {
        id: findUser.id,
        name: findUser.name,
        email: findUser.email,
      },
      token,
    };

    return dataObj;
  } catch (error: any) {
    console.error("Error during login:", error.message);
    throw new Error(error.message || "Internal Server Error");
  }
};
