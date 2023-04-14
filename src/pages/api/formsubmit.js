const formSubmit = async (req, res) => {
  try {
    console.log(process.env.EMAIL_ENDPOINT);
    console.log(req.body);
    await fetch(process.env.EMAIL_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: "FormSubmit",
        message: "I'm from Devro LABS",
      }),
    });
  } catch (error) {
    console.error(error);
    return res.status(error.statusCode || 500).json({ error: error.message });
  }

  return res.status(200).json({ error: "" });
};

export default formSubmit;
