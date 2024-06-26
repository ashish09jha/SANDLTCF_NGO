import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/home/Home';
import About from "./pages/about/About";
import Founder from './pages/founder/Founder';
import Blog from './pages/blog/Blog';
import Causes from "./pages/causes/Causes";
import Upcoming from './pages/upcoming/Upcoming';
import Recent from './pages/events/Events';
import Gallery from './pages/gallery/Gallery';
import Contact from './pages/contact/Contact';
import Donate from './pages/donate/Donate';
import Blog1 from './pages/blog/blogs/blog1/Blog1';
import Blog2 from './pages/blog/blogs/blog2/Blog2';
import Blog3 from './pages/blog/blogs/blog3/Blog3';
import Recent1 from './pages/event-blogs/first/Main';
import AllVolunteer from "./pages/admin/volunteer/allVolunteer.jsx"
import AllEvents from "./pages/admin/upcommingEvents/allEvents.jsx";
import AllMedia from "./pages/admin/media/allMedia.jsx";
import AllGallery from "./pages/admin/editGallery/allGallery.jsx";
import AllDonations from "./pages/admin/donation/allDonations.jsx";
import AllAdmins from "./pages/admin/admin/allAdmins.jsx";
import AllCertificates from "./pages/admin/Certificates/allCertificates.jsx";
import AllNewsClippings from "./pages/admin/newsClippings/allNewsClippings.jsx"; 
import Volunteer from "./pages/home/components/Volunteer.jsx"; 
import PaymentGateway from "./pages/payment_gateway/paymentGateway.jsx";
import Testimonials from "./pages/testimonials/Testimonials.jsx";
import VisitorReview from "./pages/visitorReview/visitorReview.jsx";
import AdminForm from "./pages/form/adminForm.jsx";

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/founder" element={<Founder />} />
        <Route path="/causes" element={<Causes />} />
        <Route path="/certificates" element={<Upcoming />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/blog1" element={<Blog1 />} />
        <Route path="/blog2" element={<Blog2 />} />
        <Route path="/blog3" element={<Blog3 />} />
        <Route path="/inauguration" element={<Recent1 />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/visitorReview" element={<VisitorReview />} />

        <Route path="/editadmin" element={<AllAdmins />} />
        <Route path="/editdonation" element={<AllDonations />} />
        <Route path="/editGallery" element={<AllGallery />} />
        <Route path="/editmedia" element={<AllMedia />} />
        <Route path="/editevents" element={<AllEvents />} />
        <Route path="/editvolunteer" element={<AllVolunteer/>}/> 
        <Route path="/volunteers" element={<Volunteer/>}/>        
        <Route path="/editcertificates" element={<AllCertificates />} />
        <Route path="/editnewsClippings" element={<AllNewsClippings />} />
        <Route path="/pay" element={<PaymentGateway/>}/>
        <Route path="/testinomials" element={<Testimonials/>}/>
        <Route path="/form" element={<AdminForm/>}/>
      </Routes>

    </Router>
  );
};

export default App;
