// DatabaseInfo.tsx 

import React, { useState, useEffect } from 'react';

interface DatabaseInfoProps {
  databaseName: string;
  mongoURL: string;
}

const DatabaseInfo: React.FC<DatabaseInfoProps> = ({ databaseName, mongoURL }) => {
  const [documentCount, setDocumentCount] = useState<number | null>(null);

  useEffect(() => {
    // Fetch information about the selected database
    const fetchDatabaseInfo = async () => {
      try {
        const response = await fetch(`http://localhost:4000/query/${databaseName}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'mongoURL': mongoURL,
          },
        });
        const data = await response.json();
        // You can access the document count or other information from the response and update the state accordingly
        // For example, if you have a property 'documentCount' in the response, you can set it like this:
        setDocumentCount(data.documentCount);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDatabaseInfo();
  }, [databaseName, mongoURL]);

  return (
    <div>
      <h2>Database: {databaseName}</h2>
      {/* Display the document count or other information here */}
      {/* For example: <p>Document Count: {documentCount}</p> */}
    </div>
  );
};

export default DatabaseInfo;
