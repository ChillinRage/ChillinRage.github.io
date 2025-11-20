import { useState } from 'react';
import '../css-components/ContentTable.css';

function ContentTable() {
    const [isCopiedEmail, setIsCopiedEmail] = useState(false);
    const [isCopiedTelegram, setIsCopiedTelegram] = useState(false);

  const LINKEDIN_ICON = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#0077B5" className="bi bi-linkedin" viewBox="0 0 16 16">
    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
  </svg>;

  const GITHUB_ICON = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
  </svg>;

  const EMAIL_ICON = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
  </svg>;

  const TELEGRAM_ICON = <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#0094e4ff" className="bi bi-telegram" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
  </svg>

  const TABLE_CONTENTS = [
    createLinkContent('LinkedIn', 'https://www.linkedin.com/in/chan-how-chong-a8a2b6213', LINKEDIN_ICON),
    createLinkContent('GitHub', 'https://github.com/ChillinRage', GITHUB_ICON),
    createTextContent('Email', 'chanhowios@gmail.com', EMAIL_ICON),
    createTextContent('Telegram', '@chanhow2001', TELEGRAM_ICON),
  ];

  const createCopyIconForText = (text) => {
    const isCopied = text.includes("@gmail.com") ? isCopiedEmail : isCopiedTelegram;
    const setIsCopied = text.includes("@gmail.com") ? setIsCopiedEmail : setIsCopiedTelegram;
    const copyfunction = () => {
      navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 1000);
    };
    
    const CHECKMARK_ICON = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className='checkmark-icon'>
      <path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/>
    </svg>;

    const COPY_ICON = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="28" width="28" className='copy-icon' onClick={copyfunction} title='Copy text'>
      <path d="M208 0L332.1 0c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9L448 336c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-288c0-26.5 21.5-48 48-48zM48 128l80 0 0 64-64 0 0 256 192 0 0-32 64 0 0 48c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 176c0-26.5 21.5-48 48-48z"/>
    </svg>;
    
    return isCopied ? CHECKMARK_ICON : COPY_ICON;
  }

  const formatContentHTML = (content) => {
    if (content.link) {
      return <a className='link-content' href={content.link} target='_blank' rel="noopener noreferrer">
        {content.icon}
        <h2 className='text-label'>{content.label}</h2>
      </a>;

    } else {
      return <div className='text-content'>
        <div className='left-content'>
          {content.icon}
          <h2 className='text-label'>{content.label}</h2>
        </div>

        <div className='right-content'>
          {createCopyIconForText(content.text)}
          <h3 className='text'>{content.text}</h3>
        </div>
      </div>;
    };
  }

  return <div className='content-table'>
    {TABLE_CONTENTS.map(formatContentHTML)}
  </div>;
}

function createLinkContent(label, link, icon) {
  return {label, link, icon};
}

function createTextContent(label, text, icon) {
  return {label, text, icon};
}

export default ContentTable;
