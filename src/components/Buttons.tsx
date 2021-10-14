import React from 'react';
import Button from 'react-bootstrap/Button';

const Buttons = () => {
  const handleAdd = () => {

  }
  return (
    <div className='buttonRow'>
      <a
        href="https://discord.com/api/oauth2/authorize?client_id=859183792013836348&permissions=259846043728&scope=bot%20applications.commands"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success"
        role="button">Add Ani-Bot to your Discord server!</a>
      <a
        href="https://github.com/markdstouffer/ani-bot"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
        role="button">View or contribute to Ani-Bot's code.</a>
    </div>
  );
}

export default Buttons;