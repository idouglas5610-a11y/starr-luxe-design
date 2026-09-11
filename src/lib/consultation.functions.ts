import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const consultationSchema = z.object({
  fullName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  date: z.string().optional(),
  projectType: z.string().min(1),
  budget: z.string().min(1),
  message: z.string().optional(),
});

async function submitToWeb3Forms(
  accessKey: string,
  data: z.infer<typeof consultationSchema>,
  withCc: boolean,
) {
  const payload: Record<string, string> = {
    access_key: accessKey,
    subject: "New Starr Decor Luxe Consultation Request",
    from_name: "Starr Decor Luxe",
    name: data.fullName,
    email: data.email,
    phone: data.phone ?? "",
    "Preferred Consultation Date": data.date ?? "",
    "Project Type": data.projectType,
    "Budget Range": data.budget,
    message: data.message ?? "",
  };
  // ccemail is only available on supported Web3Forms plans; include when possible.
  if (withCc) {
    payload.ccemail = "idouglas5610@gmail.com";
  }
  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(payload),
  });
  const body = (await res.json().catch(() => null)) as { success?: boolean } | null;
  return res.ok && body?.success === true;
}

export const submitConsultation = createServerFn({ method: "POST" })
  .inputValidator((data) => consultationSchema.parse(data))
  .handler(async ({ data }) => {
    const accessKey = process.env["WEB3FORMS_ACCESS_KEY"];
    if (!accessKey) {
      return { success: false as const };
    }
    // Try with the CC copy first; if the plan doesn't support ccemail, retry without it.
    if (await submitToWeb3Forms(accessKey, data, true)) {
      return { success: true as const };
    }
    const ok = await submitToWeb3Forms(accessKey, data, false);
    return { success: ok as boolean };
  });
