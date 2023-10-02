import { useSelector } from 'react-redux';
import Accueil from '@/components/accueil';

const Home = ({ themeMode }) => {
  const cocktails = useSelector((state) => state.cocktails.cocktails);

  return <Accueil themeMode={themeMode} cocktails={cocktails} />;
};

export default Home;
