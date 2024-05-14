import { Resend } from "resend";
import { EmailTemplate } from "@/components/emailTemplate/emailTemplate";

const resend = new Resend("re_goWsPrrX_LgwTARcPMMt9rVdkpvWm55Cn");

export async function POST(req: Request, res: Response) {
  try {
    const body = await req.json();

    const data = await resend.emails.send({
      from: "MMA <onboarding@resend.dev>",
      to: ["mirasdee@gmail.com"],
      subject: "Order",
      react: EmailTemplate(body),
    });

    return Response.json({ message: data });
  } catch (error) {
    return Response.json({ error });
  }
}
