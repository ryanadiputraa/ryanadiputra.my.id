import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ryannadiputraa@gmail.com",
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    const body = await req.json();
    transporter.sendMail({
      from: `"${body.name}" <${body.email}>`,
      to: "ryannadiputraa@gmail.com",
      subject: body.email,
      text: body.message,
    });
    return Response.json({ message: "ok" });
  } catch {
    return Response.json({ message: "error" });
  }
}
