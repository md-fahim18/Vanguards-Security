"use server"

export async function sendEmail(formData) {
  try {
    // Using Resend API to send email
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev", // Default Resend sender for testing
        to: "fahimzarif678@gmail.com", // Must match your Resend account email in testing mode
        subject: `নতুন যোগাযোগ বার্তা - ${formData.name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0A1F44;">নতুন যোগাযোগ বার্তা</h2>
            <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>নাম:</strong> ${formData.name}</p>
              <p><strong>ইমেইল:</strong> ${formData.email}</p>
              <p><strong>বার্তা:</strong></p>
              <p style="white-space: pre-wrap;">${formData.message}</p>
            </div>
            <p style="color: #666; font-size: 12px;">এই বার্তাটি Vanguards Security ওয়েবসাইটের যোগাযোগ ফর্ম থেকে পাঠানো হয়েছে।</p>
          </div>
        `,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error("[v0] Email send error:", error)
      throw new Error("Failed to send email")
    }

    return { success: true }
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return { success: false, error: "Failed to send email" }
  }
}
