import React, { useState, useEffect } from 'react';

const FoxImageComponent = () => {
  const [FoxImageUrl, setFoxImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFoxImage = async () => {
      try {
        const response = await fetch('https://randomfox.ca/floof');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setFoxImageUrl(data.image);
        setIsLoading(false);
      } catch (error) {
        setError(error.image);
        setIsLoading(false);
        console.error('Error fetching Fox image:', error);
      }
    };

    fetchFoxImage();
  }, []);

  if (isLoading) {
    return <div>Loading Fox Image...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
        <br/>
      <h2>Random Fox Image</h2>
      <img src={FoxImageUrl} alt="Random Fox" style={{ maxWidth: '300px' }} />
    </div>
  );
};

export default FoxImageComponent;