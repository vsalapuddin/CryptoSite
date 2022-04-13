import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Homes from '../components/Home/Home';
import Charts from '../components/Charts/Charts';
import Data from '../components/Data/Data';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Homes />
        <BgAnimation />
      </Section>
      <Charts />
      <Data />
   
    </Layout>
  );
};

export default Home;

