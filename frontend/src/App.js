import Blog from "./components/blog/Blog";
import Calendar from "./components/calendar/Calendar";
import Gallery from "./components/gallery/Gallery";
import HeroSection from "./components/hero/Hero";
import Membership from "./components/membership/Membership";
import NavBar from "./components/navbar/Navbar";
import RegistrationForm from "./components/register/RegistrationForm";
import PrivateRoute from './components/Routing/PrivateRoute';
import Main from "./components/Home/Main";
import Home from "./components/GeneralScreens/Home"
import LoginScreen from "./components/AuthScreens/LoginScreen"
import RegisterScreen from "./components/AuthScreens/RegisterScreen"
import ForgotPasswordScreen from "./components/AuthScreens/ForgotPasswordScreen"
import ResetPasswordScreen from "./components/AuthScreens/ResetPasswordScreen"
import AddStory from './components/StoryScreens/AddStory';
import DetailStory from './components/StoryScreens/DetailStory';
import Header from './components/GeneralScreens/Header';
import Footer from './components/GeneralScreens/Footer';
// import Footer from "./components/footer/Footer";
import Profile from './components/ProfileScreens/Profile';
import EditProfile from './components/ProfileScreens/EditProfile';
import ChangePassword from './components/ProfileScreens/ChangePassword';
import NotFound from './components/GeneralScreens/NotFound';
import EditStory from './components/StoryScreens/EditStory';
import ReadListPage from './components/ProfileScreens/ReadListPage';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Hero from "./components/hero/Hero";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LeaderBoard from "./components/leaderboard/LeaderBoard";
import EventDetailPage from "./components/eventdetails/EventDetails";
function App() {

  return (
        <Router>

              <div className="App">
              <ToastContainer />
                    <Routes>
                          
                          <Route path="/" element={<LayoutsWithHeader />}>
                          <Route path='*' element={<NotFound />} />
                                <Route path='/blog' element={<PrivateRoute />}>
                                      <Route path='/blog' element={<Home />} />
                                </Route>


                                <Route exact path="/story/:slug" element={<DetailStory />} />

                                <Route exact path='/addstory' element={<PrivateRoute />}>
                                      <Route exact path='/addstory' element={<AddStory />} />
                                </Route>

                                <Route exact path='/profile' element={<PrivateRoute />}>
                                      <Route exact path='/profile' element={<Profile />} />
                                </Route>

                                <Route exact path='/edit_profile' element={<PrivateRoute />}>
                                      <Route exact path='/edit_profile' element={<EditProfile />} />
                                </Route>

                                <Route exact path='/change_Password' element={<PrivateRoute />}>
                                      <Route exact path='/change_Password' element={<ChangePassword />} />
                                </Route>

                                <Route exact path='/story/:slug/like' element={<PrivateRoute />}>
                                      <Route exact path='/story/:slug/like' element={<DetailStory />} />
                                </Route>

                                <Route exact path='/story/:slug/edit' element={<PrivateRoute />}>
                                      <Route exact path='/story/:slug/edit' element={<EditStory />} />
                                </Route>

                                <Route exact path='/story/:slug/delete' element={<PrivateRoute />}>
                                      <Route exact path='/story/:slug/delete' element={<DetailStory />} />
                                </Route>
                                <Route exact path='/story/:slug/addComment' element={<PrivateRoute />}>
                                      <Route exact path='/story/:slug/addComment' element={<DetailStory />} />
                                </Route>

                                <Route exact path='/readList' element={<PrivateRoute />}>
                                      <Route exact path='/readList' element={<ReadListPage />} />
                                </Route>

                          </Route>

                          <Route exact path="/login" element={<LoginScreen />} />
                          <Route index element={<Main/>}></Route>
                          {/* <Route exact path="/">
                                <Navigate to="/main" />
                          </Route> */}
                          <Route exact path="/register" element={<RegisterScreen />} />
                        <Route exact path="/membership" element={<Membership/>}></Route>
                        <Route exact path='/registeration' element={<RegistrationForm/>}></Route>
                        <Route exact path="/calendar" element={<Calendar/>}></Route>
                        <Route exact path="/leaderboard" element={<LeaderBoard/>}></Route>
                        <Route exact path="/leaderboard" element={<LeaderBoard/>}></Route>
                        <Route exact path="/event/detail" element={<EventDetailPage/>}></Route>
                          <Route exact path="/forgotpassword" element={<ForgotPasswordScreen />} />

                          <Route exact path="/resetpassword" element={<ResetPasswordScreen />} />


                    </Routes>

              </div>

        </Router>

  );

}

const LayoutsWithHeader = () => {
  return (
        <>
              <Header />
              {/* <NavBar/> */}
              <Outlet />
              <Footer />
        </>
  );
}
export default App;
