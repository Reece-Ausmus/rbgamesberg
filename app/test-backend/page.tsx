'use client';

import { useEffect, useState } from 'react';

const Home = () => {
  const [data, setData] = useState<{ message: string } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data`);
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Next.js with Flask Backend</h1>
      <p>{data ? data.message : 'Loading...'}</p>
    </div>
  );
};

export default Home;
