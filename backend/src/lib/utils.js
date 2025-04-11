import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000,
    httpOnly: true,
    sameSite: "None",       // ✅ allow cross-origin cookies
    secure: true,           // ✅ required when sameSite is "None" and on HTTPS (Render is HTTPS)
  });
  

  return token;
};
