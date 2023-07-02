import React from 'react';
import { useState } from 'react';

import { useAuthContext } from '../../context/AuthContext';

export default function Profile() {
  const { user, isLoading, setUser } = useAuthContext();

  return (
    <>
      <section className="mt-12 mt-md-5">
        <div className="container">
          <span>{user?.username}</span>
          <br />
          <span>{user?.email}</span>
        </div>
      </section>
    </>
  );
}
