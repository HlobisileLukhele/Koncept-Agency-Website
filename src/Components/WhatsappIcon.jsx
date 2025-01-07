import WhatsappIcon from "../assets/svg/WhatsAppIcon.png";

const WhatsAppIcon = () => {
  const whatsappNumber = "27603418550";
  const message = "Hi there! I have a question.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 hover:opacity-90 transition-opacity duration-300 z-50"
      aria-label="Chat on WhatsApp"
    >
      <img 
        src={WhatsappIcon}
        alt="Chat on WhatsApp"
        className="w-14 h-14 object-contain"
      />
    </a>
  );
};

export default WhatsAppIcon;