import React, { useEffect, useState } from "react";
import Axios from "axios";
import ContactList from "./ContactList";
import ContactDetails from "./ContactDetails";

const ContactApp = () => {
  let [contacts, setContacts] = useState([]);
  let [showselectedContact, setShowSelectedContact] = useState({});

  useEffect(() => {
    Axios.get(
      "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist"
    )
      .then((response) => {
        // console.log(response.data);
        setContacts(response.data);
      })
      .catch();
  }, []);

  let selectContact = (contact) => {
    console.log("hey contact recieved in parent");
    console.log(contact, "this is in parent");
    setShowSelectedContact(contact);
  };

  return (
    <div>
      <pre>{JSON.stringify(contacts)}</pre>
      <div className="container mt-5">
        <div className="row">
          <div className="col-8">
            {/* this renders the contact list */}
            {contacts.length > 0 ? (
              <ContactList contacts={contacts} selectContact={selectContact} />
            ) : null}
          </div>
          <div className="col-4">
            <ContactDetails contactInfo={showselectedContact} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactApp;
