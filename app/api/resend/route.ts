export async function POST(request: Request) {
  const res = await request.json();
  const email = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.RESEND_API}`,
    },
    body: JSON.stringify({
      to: res.email,
      from:
        res.from || `"${process.env.EMAIL_NAME}" ${process.env.EMAIL_ADDRESS}`,
      subject: res.subject,
      text: res.content,
      html: res.content,
    }),
  });
  const data = await email.json();

  return new Response(
    JSON.stringify({
      message: "Email sent successfully",
      success: "success",
      data,
    }),
    {
      status: 200,
      headers: {
        "content-type": "application/json",
      },
    },
  );
}
