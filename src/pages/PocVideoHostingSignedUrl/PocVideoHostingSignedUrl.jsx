/* import React from 'react';

import { getSignedUrl } from '@aws-sdk/cloudfront-signer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

// Sign the urls before sending them to the browser

const signedUrl = getSignedUrl({
  keyPairId: import.meta.env.CLOUDFRONT_KEYPAIR_ID,
  privateKey: import.meta.env.CLOUDFRONT_PRIVATE_KEY,
  url: 'https://d2qykx1663mdk2.cloudfront.net/%E2%80%A2%20Discord%20_%20Sirius%20_%20CPE%20-%20Google%20Chrome%202023-03-24%2017-20-35.mp4',
  // dateLessThan: new Date(Date.now() + 1000 /* sec )
//});

/*export default function PocVideoHosting() {
  console.log(signedUrl);
  return (
    <div>
      <Container>
        <h1>IZT Course</h1>
        <div className="ratio ratio-16x9">
          <iframe src={signedUrl} title="YouTube video" allowFullScreen />
        </div>
      </Container>
    </div>
  );
} */
