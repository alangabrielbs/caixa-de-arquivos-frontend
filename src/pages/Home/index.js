import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { getTokenLocalStorage } from '../../utils/localStorage';

import { Container } from './styles';

export default function Home() {
  const token = getTokenLocalStorage();
  const [folders, setFolders] = useState({});

  const getFolderAndFiles = async () => {
    const response = await api.get('/folders');
    setFolders(response.data);
  };

  useEffect(() => {
    getFolderAndFiles();
  }, []);

  const getfolder = async (id) => {
    const response = await api.get(`/folder/${id}`);
    setFolders(response.data);
  };

  return (
    <Container>
      {folders.folders?.map((folder) => (
        <>
          <p>favorito: {folder.favorite ? 'sim' : 'não'}</p>
          <h1 onClick={() => getfolder(folder._id)}>{folder.title}</h1>
        </>
      ))}
      {folders.files?.map((file) => (
        <img src={`${file.url}?t=${token}`} alt="a" />
      ))}
    </Container>
  );
}
