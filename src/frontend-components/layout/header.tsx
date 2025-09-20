// @ts-nocheck
import {
  PreviewComponent,
  Preview,
  Source,
  Highlight,
} from "../../base-components/PreviewComponent";
import { FormLabel, FormSwitch } from "../../base-components/Form";
import { useState, useRef, useEffect } from "react";
import { Menu, Dialog } from "../../base-components/Headless";
import { Link } from "react-router-dom";
import Lucide from "../../base-components/Lucide";
import { FormInput, FormCheck } from "../../base-components/Form";
import Button from "../../base-components/Button";

import siteLogo from "../../assets/images/logo.png";
import ctIcon from "../../assets/images/handshake.png";
import phoneIcon from "../../assets/images/phone-call.png";
import bcIcon from "../../assets/images/ct.png";
import registerBg from "../../assets/images/register-img.jpg";
import loginBg from "../../assets/images/login-img.jpg";
import forgotBg from "../../assets/images/forgot-password-img.jpg";
import server from "../../../apiconfig.json";
import axios from "axios";

const Header = (props) => {
  const [loginModal, setLoginModal] = useState(false);
  const [loginRes, setLoginRes] = useState(false);

  const [registerRes, setRegisterRes] = useState(false);

  const [cCompany, setCCompany] = useState("false");
  const [cName, setCName] = useState(false);
  const [cEmail, setCEmail] = useState(false);
  const [cMobile, setCMobile] = useState(false);
  const [cPassword, setCPassword] = useState(false);
  const [cPassword2, setCPassword2] = useState(false);
  const [cType, setCType] = useState("B2C");
  const [cDob, setCDob] = useState(false);
  const [cWhatsapp, setCWhatsapp] = useState(false);
  const [cSkype, setCSkype] = useState(false);
  const [cAnniversaryDate, setCAnniversaryDate] = useState(false);
  const [cMaritalStatus, setCMaritalStatus] = useState(false);
  const [cVisitFrom, setCVisitFrom] = useState("web");
  const [cIsActive, setCIsActive] = useState("Y");
  const [cRegisterAgent, setCRegisterAgent] = useState("self");
  const [cAddedBy, setCAddedBy] = useState("1");

  const [forgotPWModal, setForgotPWModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);

  const sendButtonRef = useRef(null);

  const loginFunction = () => {
    const API_URL =
      server.API_URL + server.API_ENDPOINT.CUSTOMER_LOGIN + "/customer-login";

    const postData = {
      email: cEmail,
      password: cPassword,
    };

    axios
      .post(API_URL, postData)
      .then((response) => {
        console.log(response.data);
        if (response.data.length <= 0) {
          setLoginRes("user id and password missmatch");
        } else {
          setLoginRes(response.data[0]);
          const jsonString = JSON.stringify(response.data[0]);
          localStorage.setItem("customerData", jsonString);
          localStorage.setItem("login", "true");
          setLoginModal(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
  };

  const logoutFunction = () => {
    localStorage.removeItem("customerData");
    localStorage.removeItem("login");
    window.location.href = "/";
  };

  const registerFunction = () => {
    const API_URL = server.API_URL + "customer-master";

    const postData = {
      cCompanyName: cCompany,
      cName: cName,
      cEmail: cEmail,
      cMobile: cMobile,
      cPassword: cPassword,
      cType: cType,
      cDob: cDob,
      cWhatsapp: cWhatsapp,
      cSkype: cSkype,
      cAniversaryDate: cAnniversaryDate,
      isMarried: cMaritalStatus,
      visitFrom: cVisitFrom,
      isActive: cIsActive,
      registerAgent: cRegisterAgent,
      addedBy: cAddedBy,
    };

    if (cPassword !== cPassword2) {
      setRegisterRes("Both password must be same");
    } else {
      axios
        .post(API_URL, postData)
        .then((response) => {
          console.log(response.data);
          if (response.data.msg === "Customer Created Succesfully") {
            setRegisterModal(false);
            setLoginModal(true);
          } else {
            console.log(response.data.msg);
            setRegisterRes(response.data.msg);
          }
        })
        .catch((error) => {
          console.error("Error:", error.message);
        });
    }
  };

  return (
    <>
      <div className="header_section flex-initial px-2 py-3 bg-white md:flex-initial md:px-8 lg:flex">
        <div className="logo_area text-center mb-4 w-1/4 md:w-full md:text-left md:mb-0 lg:w-1/5">
          <Link to="/">
            <img
              alt="Logo"
              className="inline-block w-24 md:block md:my-0 md:mx-auto lg:my-0 lg:mx-0"
              src={siteLogo}
            />
          </Link>
        </div>
        <div className="header_right_area w-full md:w-full md:mt-4 lg:w-4/5">
          <div className="header_right_top flex justify-end py-0">
            <div className="customize_your_tour ml-8 py-2 sm:hidden md:block">
              <Link
                className="flex text-base font-bold uppercase text-orange-500 items-center hover:text-black"
                to="/"
              >
                <img alt="bcIcon" className="mb-1.5 mr-1.5" src={bcIcon} />
                Customize Tour
              </Link>
            </div>
            <div className="customize_your_tour ml-8 py-2 sm:hidden md:block">
              <Link
                className="flex text-base font-bold uppercase text-orange-500 items-center hover:text-black"
                to="/become-partner"
              >
                <img alt="ctIcon" className="mb-1.5 mr-1.5" src={ctIcon} />
                Become a Partner
              </Link>
            </div>
            <div className="phone_section ml-0 py-2 md:ml-8">
              <p className="text-base flex">
                <Link
                  to="\"
                  className="flex text-orange-500 items-center hover:text-black"
                >
                  <img alt="phoneIcon" className="mb-1.5" src={phoneIcon} />
                  <strong className="ml-1"> +91-9083-2064-97 </strong>
                </Link>
              </p>
            </div>

            <div className="account_section ml-4 md:ml-6">
              {localStorage.getItem("login") === undefined ||
              localStorage.getItem("login") === null ||
              localStorage.getItem("login") === "false" ? (
                <Link
                  className="bg-orange-500 rounded-lg text-sm font-medium text-white px-2 py-2 flex items-center  hover:bg-black md:pl-3 md:pr-4"
                  as="a"
                  href="#"
                  variant="primary"
                >
                  {/* <Lucide icon="PhoneCall" className="text-lime-600 mx-auto text-black" /> */}
                  <Lucide icon="User" className="block mx-auto mr-2" />
                  <span onClick={() => setLoginModal(true)}>Sign In</span>
                  <span className="px-1"> / </span>
                  <span onClick={() => setRegisterModal(true)}>
                    Create Account
                  </span>
                </Link>
              ) : null}

              <div style={{ color: "#f97316" }}>
                {localStorage.getItem("customerData") !== null ? (
                  <>
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => (window.location.href = "/profile")}
                    >
                      {
                        JSON.parse(localStorage.getItem("customerData"))[
                          "cName"
                        ]
                      }
                    </p>
                    <p
                      style={{ cursor: "pointer" }}
                      onClick={() => logoutFunction()}
                    >
                      Logout
                    </p>
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* REGISTRATION POPUP */}

      {/* BEGIN: Modal Size */}

      <PreviewComponent className="mt-0 intro-y box">
        <div className="p-0">
          <Preview>
            <Dialog
              size="xl"
              open={registerModal}
              onClose={() => {
                setRegisterModal(false);
              }}
            >
              <Dialog.Panel className="p-0 text-center">
                <div className="flex">
                  <div
                    className="w-2/5 flex justify-center items-center bg-black bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${registerBg})`,
                    }}
                  >
                    <div className="register_left_box">
                      <img alt="Logo" className="" src={siteLogo} />
                    </div>
                  </div>
                  <div className="w-3/5 p-2">
                    <Dialog.Description>
                      <div className="registration_box border-slate-200 border-b border-solid pb-4 mb-4">
                        <div className="flex justify-center relative">
                          <h2 className="pb-8 text-black text-2xl font-medium">
                            Create an Account!
                          </h2>
                          <Button
                            type="button"
                            variant="outline-secondary"
                            onClick={() => {
                              setRegisterModal(false);
                            }}
                            className="p-0 border-0 absolute top-0 right-0"
                          >
                            <Lucide icon="XCircle" className="block mx-auto" />
                          </Button>
                        </div>

                        <div className="grid grid-cols-12 gap-4 gap-y-3">
                          <div className="col-span-12 sm:col-span-6">
                            <FormInput
                              id=""
                              type="text"
                              placeholder="Your Name*"
                              className="leading-7"
                              onChange={(e) => setCName(e.target.value)}
                            />
                          </div>
                          {/* <div className="col-span-12 sm:col-span-6">
                                                        <FormInput
                                                            id=""
                                                            type="text"
                                                            placeholder="Your DOB*"
                                                            className="leading-7"
                                                            onChange={(e) =>
                                                                setCDob(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </div> */}
                          <div className="col-span-12 sm:col-span-6">
                            <FormInput
                              id=""
                              type="email"
                              placeholder="Your Email*"
                              className="leading-7"
                              onChange={(e) => setCEmail(e.target.value)}
                            />
                          </div>
                          <div className="col-span-12 sm:col-span-6">
                            <FormInput
                              id=""
                              type="text"
                              placeholder="Mobile*"
                              className="leading-7"
                              onChange={(e) => setCMobile(e.target.value)}
                            />
                          </div>
                          {/* <div className="col-span-12 sm:col-span-6">
                                                        <FormInput
                                                            id=""
                                                            type="text"
                                                            placeholder="Skype"
                                                            className="leading-7"
                                                            onChange={(e) =>
                                                                setCSkype(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </div> */}
                          {/* <div className="col-span-12 sm:col-span-6">
                                                        <FormInput
                                                            id=""
                                                            type="text"
                                                            placeholder="Whatsapp"
                                                            className="leading-7"
                                                            onChange={(e) =>
                                                                setCWhatsapp(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </div> */}
                          {/* <div className="col-span-12 sm:col-span-6">
                                                        <FormInput
                                                            id=""
                                                            type="text"
                                                            placeholder="Marital Status"
                                                            className="leading-7"
                                                            onChange={(e) =>
                                                                setCMaritalStatus(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </div>
                                                    <div className="col-span-12 sm:col-span-6">
                                                        <FormInput
                                                            id=""
                                                            type="text"
                                                            placeholder="Anniversary"
                                                            className="leading-7"
                                                            onChange={(e) =>
                                                                setCAnniversaryDate(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </div> */}
                          <div className="col-span-12 sm:col-span-6">
                            <FormInput
                              id=""
                              type="text"
                              placeholder="Company"
                              className="leading-7"
                              onChange={(e) => setCCompany(e.target.value)}
                            />
                          </div>
                          <div className="col-span-12 sm:col-span-6">
                            <FormInput
                              id=""
                              type="text"
                              placeholder="Password*"
                              className="leading-7"
                              onChange={(e) => setCPassword(e.target.value)}
                            />
                          </div>
                          <div className="col-span-12 sm:col-span-6">
                            <FormInput
                              id=""
                              type="text"
                              placeholder="Repeat Password*"
                              className="leading-7"
                              onChange={(e) => setCPassword2(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 mt-4 gap-4 gap-y-3">
                          <Button
                            variant="primary"
                            type="button"
                            className="w-full bg-orange-500 text-sm leading-7 font-light border-0"
                            // ref={sendButtonRef}
                            onClick={() => registerFunction()}
                          >
                            Register Account
                          </Button>
                        </div>
                      </div>

                      {/* <div className="social_login_box border-slate-200 border-b border-solid pb-4 mb-4">
                                                <Button
                                                    variant="primary"
                                                    type="button"
                                                    className="w-full mb-4 bg-red-500 text-sm leading-7 font-light border-0"
                                                    ref={sendButtonRef}
                                                >
                                                    Register with Google
                                                </Button>
                                                <Button
                                                    variant="primary"
                                                    type="button"
                                                    className="w-full bg-indigo-900 text-sm leading-7 font-light border-0"
                                                    ref={sendButtonRef}
                                                >
                                                    Register with Facebook
                                                </Button>
                                            </div> */}

                      {/* <div className="forget_pass_box mt-5">
                                                <Link
                                                    className="block text-inherit text-xs hover:text-orange-500 mb-1"
                                                    to="/"
                                                >
                                                    Forgot Password
                                                </Link>
                                                <Link
                                                    className="block text-inherit text-xs hover:text-orange-500"
                                                    to="/"
                                                >
                                                    Already have an account?
                                                    Login!
                                                </Link>
                                            </div> */}
                    </Dialog.Description>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          </Preview>
        </div>
      </PreviewComponent>

      {/* END: Modal Size */}

      {/* LOGIN POPUP */}

      {/* BEGIN: Modal Size */}

      <PreviewComponent className="mt-0 intro-y box">
        <div className="p-0">
          <Preview>
            <Dialog
              size="xl"
              open={loginModal}
              onClose={() => {
                setLoginModal(false);
              }}
            >
              <Dialog.Panel className="p-0 text-center">
                <div className="flex">
                  <div
                    className="w-1/2 flex justify-center items-center bg-black bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${loginBg})`,
                    }}
                  >
                    <div className="register_left_box">
                      <img alt="Logo" className="" src={siteLogo} />
                    </div>
                  </div>
                  <div className="w-1/2 p-2">
                    <Dialog.Description>
                      <div className="registration_box border-slate-200 border-b border-solid pb-4 mb-4">
                        <div className="flex justify-center relative">
                          <h2 className="pb-8 text-black text-2xl font-medium">
                            Welcome Back!
                          </h2>
                          <Button
                            type="button"
                            variant="outline-secondary"
                            onClick={() => {
                              setLoginModal(false);
                            }}
                            className="p-0 border-0 absolute top-0 right-0"
                          >
                            <Lucide icon="XCircle" className="block mx-auto" />
                          </Button>
                        </div>

                        <div className="grid grid-cols-1 gap-4 gap-y-3">
                          <div className="col-span-12 sm:col-span-6">
                            <FormInput
                              id=""
                              type="text"
                              placeholder="Your Name*"
                              className="leading-7"
                              onChange={(event) =>
                                setCEmail(event.target.value)
                              }
                            />
                          </div>
                          <div className="col-span-12 sm:col-span-6">
                            <FormInput
                              id=""
                              type="password"
                              placeholder="Password*"
                              className="leading-7"
                              onChange={(event) =>
                                setCPassword(event.target.value)
                              }
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 mt-4 gap-4 gap-y-3">
                          {loginRes !== false &&
                          typeof loginRes !== "object" ? (
                            <div
                              className="alert alert-danger"
                              role="alert"
                              style={{
                                color: "red",
                              }}
                            >
                              {loginRes}
                            </div>
                          ) : null}

                          <Button
                            variant="primary"
                            type="button"
                            className="w-full bg-orange-500 text-sm leading-7 font-light border-0"
                            ref={sendButtonRef}
                            onClick={() => loginFunction()}
                          >
                            Sign In
                          </Button>
                        </div>
                      </div>

                      <div className="forget_pass_box mt-5">
                        <Link
                          className="block text-inherit text-xs hover:text-orange-500 mb-1"
                          to="/"
                        >
                          Forgot Password
                        </Link>
                      </div>
                    </Dialog.Description>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          </Preview>
        </div>
      </PreviewComponent>

      {/* END: Modal Size */}

      {/* FORGOT POPUP */}

      {/* BEGIN: Modal Size */}

      <PreviewComponent className="mt-0 intro-y box">
        <div className="p-0">
          <Preview>
            <Dialog
              size="xl"
              open={forgotPWModal}
              onClose={() => {
                setForgotPWModal(false);
              }}
            >
              <Dialog.Panel className="p-0 text-center">
                <div className="flex">
                  <div
                    className="w-1/2 flex justify-center items-center bg-black bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${forgotBg})`,
                    }}
                  >
                    <div className="register_left_box">
                      <img alt="Logo" className="" src={siteLogo} />
                    </div>
                  </div>
                  <div className="w-1/2 p-2">
                    <Dialog.Description>
                      <div className="registration_box border-slate-200 border-b border-solid pb-4 mb-4">
                        <div className="relative">
                          <h2 className="pb-2 text-black text-2xl font-medium">
                            Forgot Your Password?
                          </h2>
                          <p className="pb-4">
                            We get it, stuff happens. Just enter your email
                            address below and we'll send you a link to reset
                            your password!
                          </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 gap-y-3">
                          <div className="col-span-12 sm:col-span-6">
                            <FormInput
                              id=""
                              type="email"
                              placeholder="Please enter your email*"
                              className="leading-7"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 mt-4 gap-4 gap-y-3">
                          <Button
                            variant="primary"
                            type="button"
                            className="w-full bg-orange-500 text-sm leading-7 font-light border-0"
                            ref={sendButtonRef}
                          >
                            Reset Password
                          </Button>
                        </div>
                      </div>

                      <div className="forget_pass_box mt-5">
                        <Link
                          className="block text-inherit text-xs hover:text-orange-500 mb-1"
                          to="/"
                        >
                          Forgot Password
                        </Link>
                        <Link
                          className="block text-inherit text-xs hover:text-orange-500"
                          to="/"
                        >
                          Already have an account? Login!
                        </Link>
                      </div>
                    </Dialog.Description>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          </Preview>
        </div>
      </PreviewComponent>

      {/* END: Modal Size */}
    </>
  );
};

export default Header;
