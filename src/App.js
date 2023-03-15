import { Route, Routes } from 'react-router-dom';

import Layout from './Pages/Layout/Layout';
// import Main from './Pages/Main/Main';
import New from './Pages/New/New';
import About from './Pages/About/About';
import Catalog from './Pages/Catalog/Catalog';
import Notfound from './Pages/Notfound/Notfound';

function App() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/" element={<Layout />}>
          <Route path="new" element={<New />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Notfound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
