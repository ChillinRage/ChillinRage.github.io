import '../css-components/Header.css';

function Header() {
  const NAME = <h1 className='name'>Chong Chan How</h1>;
  const TITLE = <h2 className='title'>Infrastructure Engineer</h2>;

  return <div className='Header'>
    <a className='my-info' href='/'>
      {NAME}
      {TITLE}
    </a>

    <div className='tab-container'>
      {TABS.map(tab => <a className='tab' href={'/' + (tab.temp || tab.value)}>{tab.text}</a>)}
    </div>
  </div>;
}

const TABS = [
  {text: "Projects", value: "project",  temp: '404'},
  {text: "Blogs",    value: "projects", temp: '404'},
  {text: "Homelab",  value: "homelab",  temp: '404'},
];

export default Header;
