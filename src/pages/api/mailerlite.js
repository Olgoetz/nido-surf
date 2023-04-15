// For ECMAScript (ESM)
import MailerLite from "@mailerlite/mailerlite-nodejs";

const mailerlite = new MailerLite({
  api_key: process.env.MAILERLITE_TOKEN,
});

export default async function createSubscriber(req, res) {
  const dateNow = new Date()
    .toISOString()
    .replace(/T/, " ")
    .replace(/\..+/, "");

  const params = {
    email: req.body.email,
    groups: [process.env.MAILERLITE_GROUP_ID],
    status: "active", // possible statuses: active, unsubscribed, unconfirmed, bounced or junk.
    subscribed_at: dateNow,
  };
  try {
    mailerlite.subscribers.createOrUpdate(params);
  } catch (error) {
    console.error(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
}
