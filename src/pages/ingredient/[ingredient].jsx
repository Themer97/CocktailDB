import { useRouter } from 'next/router';

import Ingredient from '@/components/accueil/ingredient';

const IngredientPage = ({ themeMode }) => {
  const router = useRouter();

  const ingredient = router.query.ingredient;

  return <Ingredient themeMode={themeMode} ingredient={ingredient} />;
};

export default IngredientPage;
