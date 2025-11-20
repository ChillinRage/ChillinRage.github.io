import Layout from '../jsx-components/Layout.jsx';

function NotFound() {
  return (<Layout title={'404 Not Found'}>
    <h1 style={{textAlign: 'center'}}>OOPS!</h1>
    <p style={{fontSize: '20px'}}>
      Seems like the page is still in development. Until it finishes, enjoy this picture!
    </p>
    <img src='/pompom.png' alt='PomPom.png'/>
  </Layout>);
}

export default NotFound;
