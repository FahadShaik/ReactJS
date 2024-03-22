import React from "react";

const ContactList = ({ contacts, selectContact }) => {
  //   console.log(contacts);
  //   console.log(selectContact);
  //   to take only one object from array list of contacts
  let contactDetails = (contact) => {
    selectContact(contact);
  };
  return (
    <div>
      {/* <pre>{JSON.stringify(contacts)}</pre> */}
      <div className="row">
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <>
                {contacts.map((contact) => {
                  return (
                    <tr
                      key={contact.login.uuid}
                      onClick={contactDetails.bind(null, contact)}
                    >
                      <td>{contact.login.uuid.slice(-4)}</td>
                      <td>{contact.name.first + " " + contact.name.last}</td>
                      <td>{contact.email}</td>
                    </tr>
                  );
                })}
              </>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
