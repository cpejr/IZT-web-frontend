import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

export default function PocVideoHosting() {
  return (
    <div>
      <Container>
        <h1>IZT Course</h1>
        <div className="ratio ratio-16x9">
          <iframe
            src="https://d2qykx1663mdk2.cloudfront.net/%E2%80%A2%20Discord%20_%20Sirius%20_%20CPE%20-%20Google%20Chrome%202023-03-24%2017-20-35.mp4"
            title="YouTube video"
            allowFullScreen
            autoPlay
            muted
            paused
          />
        </div>
      </Container>
    </div>
  );
}
