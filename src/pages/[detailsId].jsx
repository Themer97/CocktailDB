import { useRouter } from 'next/router';
import Details from '@/components/accueil/detail';

const OneCocktail = ({ themeMode }) => {
  const router = useRouter();
  const id = router.query.detailsId;
  return <Details themeMode={themeMode} id={id} />;
};

export function getServerSideProps(context) {
  const id = context.params.detailsId;

  return {
    props: {
      id: id,
    },
  };
}

export default OneCocktail;
