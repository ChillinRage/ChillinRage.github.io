import '../css-components/ExtraInfo.css';

function ExtraInfo() {
  const CV_BUTTON = <button className='resume-btn' onClick={() => window.open("/resume.pdf", "_blank")}>Resume.pdf</button>;

  return (<div className='extra-info'>
    {CV_BUTTON}
  </div>);
}

export default ExtraInfo;