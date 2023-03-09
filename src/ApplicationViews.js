import { Outlet, Route, Routes } from 'react-router-dom';
import { ShowsCalendar } from './Calendar';
import { AddEvent } from './AddEvent';
import { EventDetail } from './EventDetail';
import { Provider } from './Provider';

export const ApplicationViews = () => {
    return <>
        <Provider>
            <Routes>
                <Route path="/" element={
                    <>
                        <h1>Capstone Test</h1>
                        <div>This is a quick test I made today</div>

                        <Outlet />
                    </>
                }>
                    <Route path={"/"} element={<ShowsCalendar /> } />
                    <Route path={"/event/:eventId"} element={<EventDetail /> } />
                    <Route path={"/event/add"} element={<AddEvent /> } />
                </Route>
            </Routes>
        </Provider>
    </>
}