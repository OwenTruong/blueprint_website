import { Link } from "react-router-dom";
import logo from "../../assets/logos/logo.png";

function Apply() {
  return (
    <div className="flex h-[90vh] justify-center items-center">
      <div className="w-1/4 mx-20 flex flex-col justify-center items-center">
        <p className="text-3xl text-center font-bold">Students</p>
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
      <div className="w-1/4 mx-20 flex flex-col justify-center items-center">
        <p className="text-3xl text-center font-bold">Nonprofits</p>
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
  );
}

export default Apply;
