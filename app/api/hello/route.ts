import { Resend } from "resend";
import { EmailTemplate } from "@/components/emailTemplate/emailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();

    const data = await resend.emails.send({
      from: "MMA <onboarding@resend.dev>",
      to: ["doctorr01@yandex.ru"],
      subject: "Order",
      react: EmailTemplate(body),
    });

    return Response.json({ message: data });
  } catch (error) {
    return Response.json({ error });
  }
}
