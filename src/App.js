import { Outlet, Route, Routes } from 'react-router-dom';
import { ShowsCalendar } from './Calendar';
import { AddEvent } from './AddEvent';
import { EventDetail } from './EventDetail';
import { Provider } from './Provider';
import { ApplicationViews } from './ApplicationViews';
import { NavBar } from './NavBar';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='*' element={
          <>
            <NavBar />
            <ApplicationViews />
          </>
        } />
      </Routes>
    </div>
  );
}

export default App;
