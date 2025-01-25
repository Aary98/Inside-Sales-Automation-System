import React from 'react';

const LeadList = ({ leads }) => {
  return (
    <div>
      <h2>Lead List</h2>
      <ul>
        {leads.map((lead) => (
          <li key={lead._id}>
            {lead.name} - {lead.email} - {lead.phone}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeadList;
