import { useMemo } from 'react';
import { Theme } from './settings/types';
import ConstructionEstimate from './components/generated/ConstructionEstimate';

let theme: Theme = 'light';

function App() {
  function setTheme(theme: Theme) {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }

  setTheme(theme);

  // THIS IS WHERE THE TOP LEVEL GENRATED COMPONENT WILL BE RETURNED!
  return <ConstructionEstimate />;
}

export default App;
