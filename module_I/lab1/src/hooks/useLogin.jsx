'use client';

import { useState } from 'react';

export const useLogin = () => {
  const [inputUsername, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    await delay(500);
    console.log(`Username :${inputUsername}, Password :${inputPassword}`);
    if (inputUsername !== 'admin' || inputPassword !== 'admin') {
      setShow(true);
    } else {
    }
    setLoading(false);
  };

  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return {
    inputUsername,
    setInputEmail,
    inputPassword,
    setInputPassword,
    show,
    setShow,
    loading,
    handleSubmit,
  };
};
