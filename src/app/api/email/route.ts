import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.GOOGLE_APP_PASSWORD,
      },
    });

    const body = await req.json();
    transporter.sendMail({
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Message from ${body.name} ${body.email}`,
      text: body.message,
    });
    return Response.json({ message: "ok" });
  } catch {
    return Response.json({ message: "error" });
  }
}
