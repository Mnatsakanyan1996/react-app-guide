import React from 'react';
import useGetData from 'utils/hooks/useGetData';

export default function LoginPage() {

  const res = useGetData('https://dog.ceo/api/breeds/image/random');

  if (!res.response) {
    return <div>Loading...</div>;
  }
 
  const imageUrl = res.response.message;
  return (
    <div>
      <img src={imageUrl} alt="avatar" width={400} height="auto" />
    </div>
  );
}