import Layout from '../jsx-components/Layout.jsx';
import ContentTable from '../jsx-components/ContentTable.jsx';
import ExtraInfo from '../jsx-components/ExtraInfo.jsx';

function Home() {
  const DESCRIPTION = <p style={{fontSize: '18px', margin: '2em 0'}}>
    Fascinated by how systems work under the hood, I have a strong interest in infrastructure engineering and 
    DevOps. I have practical experience working with on-premise virtualization, Linux systems, 
    IaC tooling, and hybrid cloud workflows. I enjoy building reliable, automated environments 
    and am driven by a passion for system reliability, observability, and scalable service design.
  </p>;
  //const STATUS = <p className='status'>Studying</p>;

  return (<Layout title={'Chong Chan How'}>
    {DESCRIPTION}
    <ContentTable/>
    <ExtraInfo/>
  </Layout>);
}

export default Home;
