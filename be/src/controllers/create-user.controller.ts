import { RequestHandler } from 'express';
import { userModel } from '../models/user.schema';
import bcrypt from 'bcrypt';

export const createUserController: RequestHandler = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log('req.body:', req.body);

    // Hash the password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    await userModel.create({
      name: name,
      email: email,
      password: hashedPassword, // Save the hashed password
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    return res.status(201).json({
      message: 'User created successfully',
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Internal server error',
    });
  }
};
