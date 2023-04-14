// export default async function formSubmit(req, res) {
//   try {
//     await fetch(process.env.EMAIL_ENDPOINT, req);
//   } catch (error) {
//     console.error(error);
//     return res.status(error.statusCode || 500).json({ error: error.message });
//   }

//   return res.status(200).json({ error: "" });
// }
