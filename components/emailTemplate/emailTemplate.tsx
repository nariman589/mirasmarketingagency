import * as React from "react";

interface EmailTemplateProps {
  name: string;
  companyName: string;
  email: string;
  details: string;
  phone: string;
}

export const EmailTemplate = ({
  name,
  companyName,
  details,
  email,
  phone,
}: EmailTemplateProps) => (
  <div style={{ display: "flex", flexDirection: "column" }}>
    <h1>НОВЫЙ ЗАКАЗ !!!!</h1>
    <div>
      <span style={{ fontStyle: "italic" }}>Имя:</span>
      <br />
      <span>{name}</span>
    </div>
    <div>
      <span style={{ fontStyle: "italic" }}>Название компании:</span> <br />{" "}
      <span>{companyName}</span>
    </div>
    <div>
      <span style={{ fontStyle: "italic" }}>Детали:</span>
      <br />
      <span>{details}</span>
    </div>
    <div>
      <span style={{ fontStyle: "italic" }}>Почта:</span>
      <br />
      <span>{email}</span>
    </div>
    <div>
      <span style={{ fontStyle: "italic" }}>Телефон:</span>
      <br />
      <span>{phone}</span>
    </div>
  </div>
);
