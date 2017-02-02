import React from 'react';
import { Button } from 'react-bootstrap';
import loadingGif from '../assets/loading-gear.gif';

const Loading = ({ tryAgain }) => (
  <div>
    <h3>What an eventful day!</h3>
    <img src={loadingGif} alt="loading-gear" />
    <Button onClick={tryAgain}>Try Again</Button>
  </div>
);

Loading.propTypes = {
  tryAgain: React.PropTypes.func.isRequired,
};

export default Loading;
