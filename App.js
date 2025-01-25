import React, { useState, useEffect } from 'react';
import LeadForm from './components/LeadForm';
import LeadList from './components/LeadList';
import api from './services/api';

const App = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      const { data } = await api.get('/leads');
      setLeads(data);
    };
    fetchLeads();
  }, []);

  const addLead = async (lead) => {
    const { data } = await api.post('/leads', lead);
    setLeads([...leads, data]);
  };

  return (
    <div>
      <h1>Inside Sales Automation</h1>
      <LeadForm addLead={addLead} />
      <LeadList leads={leads} />
    </div>
  );
};

export default App;
