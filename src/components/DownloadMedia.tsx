import React from 'react';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { DownloadMediaProps } from '../interfaces/DownloadMedia';

const DownloadButton = ({ downloadUrl, fileName }: DownloadMediaProps) => {
    const handleDownload = async () => {
      try{
        console.log({downloadUrl, fileName})
          const response = await Filesystem.downloadFile({
              url: downloadUrl,
              path: fileName,
            directory: Directory.Documents,
            // url: 'https://www.w3.org/TR/2003/REC-PNG-20031110/iso_8859-1.txt',
            // path: 'deel.txt',
        })
        console.log({response})
    }
      catch (error) {
    console.log({error})
    }
  };

  return (
    <button style={styles.button} onClick={handleDownload}>
      Download
    </button>
  );
};

const styles = {
  button: {
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
  },
};

export default DownloadButton;