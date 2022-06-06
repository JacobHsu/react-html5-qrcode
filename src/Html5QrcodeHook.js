import React, { useEffect } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';

const Html5QrcodeHook = ({ qrbox }) => {
    
  const [result, setResult] = React.useState('result');

  useEffect(() => {
    // componentDidMount
    if (Html5QrcodeScanner) {
      let html5QrcodeScanner = new Html5QrcodeScanner(
        'reader',
        { fps: 10, qrbox: Number(qrbox) },
        /* verbose= */ false
      );
      html5QrcodeScanner.render(
        (data) => { console.log('success ->', data); setResult(data); },
        (err) => console.log('err ->', err)
      );

      return () => {
        // componentWillUnmount
        html5QrcodeScanner.clear().catch((error) => {
          console.error('Failed to clear html5QrcodeScanner. ', error);
        });
      };
    }
  }, [qrbox, Html5QrcodeScanner]);

  return (
      <>
        <div id="reader"></div>
        {result}
      </>
  );
};

export default Html5QrcodeHook;
