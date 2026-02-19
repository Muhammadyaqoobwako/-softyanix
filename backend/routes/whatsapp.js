import express from "express";

const router = express.Router();

router.get("/redirect", (req, res) => {
  const phone = "923402573560";
  const message = "Hello Softyanix, I want to discuss a project.";

  // You can log clicks here
  console.log("WhatsApp clicked at:", new Date());

  const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
    message
  )}`;

  res.redirect(whatsappUrl);
});

export default router;
