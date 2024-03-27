import React from "react";

const ContactDetails = ({ contactInfo }) => {
  //   console.log("This is in detail", contactInfo);
  return (
    <div>
      <pre>{JSON.stringify(contactInfo)}</pre>
      <div>
        <div className="card">
          <div className="card-header">
            <img src={contactInfo.picture.large} alt="" />
          </div>
          <div className="card-body">
            <h3>{contactInfo.name.first}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
