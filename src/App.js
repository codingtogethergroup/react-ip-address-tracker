import GlobalStyles from './styles/global';
import Header from './components/Header';
import { ErrorProvider } from './contexts/ErrorContext';
import Error from './components/Error';
import { SearchProvider } from './contexts/SearchContext';
import MapWrapper from './components/MapWrapper';

const App = () => {
  return (
    <ErrorProvider>
      <Error />
      <SearchProvider>
        <Header />
        <MapWrapper />
      </SearchProvider>
      <GlobalStyles />
    </ErrorProvider>
  );
};

export default App;
