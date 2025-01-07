import WhatsappIcon from "../assets/svg/WhatsAppIcon.png"

const WhatsAppIcon = () => {
  const whatsappLink = "https://wa.me/27603418550?text=Hi%20there!%20I%20have%20a%20question.";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-icon"
    >
      <img
        src={WhatsappIcon}
        alt="Chat on WhatsApp"
      />
    </a>
  );
};

export default WhatsAppIcon;
