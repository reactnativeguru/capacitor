import React from 'react';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Toast } from '@capacitor/toast';
import { DownloadMediaProps } from '../interfaces/DownloadMedia';

const DownloadButton = ({ downloadUrl, fileName }: DownloadMediaProps) => {
    const handleDownload = async () => {
      try{
        console.log({downloadUrl, fileName})
          const response = await Filesystem.downloadFile({
            url: downloadUrl,
            path: fileName,
            directory: Directory.Documents,
            // url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
            // path: 'dummy.pdf',
            // directory: Directory.Documents,
          })
          Toast.show({
            text: `${fileName} downloaded successfully`,
          });
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
    width: '100%',
    backgroundColor: '#3498db',
    color: '#fff',
    padding: '10px 15px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    marginTop: 20
  },
};

export default DownloadButton;