import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Footer from "./Common/Footer";

function Apply() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex justify-center align-center py-8 mb-auto">
        <div className="w-1/4 mx-20">
          <div>
            <p className="text-2xl">Students</p>
            <img src={logo} className="object-cover py-8" alt="Blueprint Logo" />
            <p className="text-m">
              {" "}
              Join Blueprint to gain hands on experience and give back to the community.
              REPLACE IMAGE ABOVE{" "}
            </p>
            <Link to="/studentapplication" className="text-sky-500 text-lg">
              {" "}
              - Learn More -{" "}
            </Link>
          </div>
        </div>
        <div className="w-1/4 mx-20">
          <div>
            <p className="text-2xl">Nonprofits</p>
            <img src={logo} className="object-cover py-8" alt="Blueprint Logo" />
            <p className="text-m">
              {" "}
              Partner with Blueprint to meet your technology needs. REPLACE IMAGE ABOVE{" "}
            </p>
            <Link to="/nonprofits" className="text-sky-500 text-lg">
              {" "}
              - Learn More -{" "}
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Apply;
