import React from "react";

function WhatsAppFloating() {
  const phone = "351920414513"; // TODO: troque pelo seu número com DDI (ex: Portugal 351)
  const url = `https://wa.me/${phone}`;

  return (
    <a
      className="whatsapp-float"
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      title="Falar no WhatsApp"
    >
      <i className="fab fa-whatsapp" aria-hidden="true" />
    </a>
  );
}

export default WhatsAppFloating;
