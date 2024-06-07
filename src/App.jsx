/* eslint-disable no-useless-escape */
import { useRef, useState } from "react";
import "./App.css";
import Footer from "./components/footer";
import Notification from "./components/notification";

function App() {
  const [curActive, setCurActive] = useState();
  const nameInput = useRef();
  const lastNameInput = useRef();
  const mailInput = useRef();
  const queryEnqInput = useRef();
  const querySuppInput = useRef();
  const messageInput = useRef();
  const consentInput = useRef();
  const [notif, setNotif] = useState();
  const [err, setErr] = useState({
    name: null,
    lastName: null,
    mail: null,
    queryType: null,
    message: null,
    consent: null,
  });
  const validateForm = () => {
    const newErr = {
      name: !nameInput.current.value.length > 0,
      lastName: !lastNameInput.current.value.length > 0,
      mail: !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mailInput.current.value),
      queryType: !querySuppInput.current.checked && !queryEnqInput.current.checked,
      message: !messageInput.current.value.length > 0,
      consent: !consentInput.current.checked,
    };
    setErr(newErr);
    return !Object.values(newErr).includes(true);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setNotif(<Notification />);
      setTimeout(() => {
        setNotif();
      }, 4000);
      document.querySelector(".form").reset();
    }
  };

  return (
    <>
      <div className='w-full absolute flex items-start justify-center select-none'>
        <div className='text-white flex justify-center w-[20rem] h-40'>{notif}</div>
      </div>
      <div className='w-screen h-screen flex items-center justify-center'>
        <form
          onSubmit={handelSubmit}
          noValidate
          className='form w-[500px] h-fit bg-white rounded-xl p-6 m-2'
          onClick={() => setCurActive("")}
        >
          <h1 className='text-2xl font-bold text-Grey900 mb-2'>Contact Us</h1>
          <div className='flex flex-col md:flex-row gap-3 justify-around'>
            <div className='flex flex-col flex-grow'>
              <label htmlFor='first-name'>First Name</label>
              <input
                id='first-name'
                required
                ref={nameInput}
                className={`border-[.5px] border-Grey500 hover:border-Green600 focus:border-Green600 focus:bg-Green200 focus:outline-none h-8 pl-3  rounded-md ${
                  err.name ? "border-Red" : ""
                }`}
              ></input>
              <a className={`${err.name ? "block" : "hidden"} text-xs text-Red my-2`}>
                This field is required
              </a>
            </div>
            <div className='flex flex-col flex-grow'>
              <label htmlFor='last-name'>Last Name</label>
              <input
                id='last-name'
                required
                ref={lastNameInput}
                className={`border-[.5px] border-Grey500 hover:border-Green600  focus:border-Green600 focus:bg-Green200 focus:outline-none h-8 pl-3 rounded-md ${
                  err.lastName ? "border-Red" : ""
                }`}
              ></input>
              <a className={`${err.lastName ? "block" : "hidden"} text-xs text-Red my-2`}>
                This field is required
              </a>
            </div>
          </div>
          <div>
            <div className='flex flex-col flex-grow'>
              <label htmlFor='email-address'>Email Address</label>
              <input
                id='email-address'
                required
                ref={mailInput}
                className={`
                  border-[.5px] border-Grey500 hover:border-Green600  focus:border-Green600 focus:bg-Green200 focus:outline-none h-8 pl-3 rounded-md ${
                    err.mail ? "border-Red" : ""
                  }
                  `}
              ></input>
              <a className={`${err.mail ? "block" : "hidden"} text-xs text-Red my-2`}>
                Please enter a valid email address
              </a>
            </div>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='query-type'>Query Type</label>
            <div className='flex gap-3 flex-col md:flex-row'>
              <div
                id='query-type'
                onClick={(e) => e.stopPropagation()}
                className={`${
                  curActive === "generalEnquiry" ? "border-Green600 bg-Green200" : ""
                } ${
                  err.queryType ? "border-Red" : ""
                } flex flex-row flex-grow items-center border-[.5px] border-Grey500 hover:border-Green600 focus:border-Green600 focus:bg-Green200 focus:outline-none  rounded-md`}
              >
                <input
                  name='query-type'
                  id='general-enquiry'
                  type='radio'
                  ref={queryEnqInput}
                  className='border-[.5px] accent-Green600 border-Grey500  h-8 rounded-md ml-5 mr-3'
                  onChange={(e) => setCurActive(e.target.id)}
                  required
                ></input>
                <label
                  htmlFor='general-enquiry'
                  className='select-none after:content-none w-full text-sm p-2 pl-0 m-0'
                >
                  General Enquiry
                </label>
              </div>
              <div
                className={`${
                  curActive === "supportRequest" ? "border-Green600 bg-Green200" : ""
                } ${
                  err.queryType ? "border-Red" : ""
                } flex md:flex-row flex-grow items-center border-[.5px] border-Grey500 hover:border-Green600 rounded-md`}
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  name='queryType'
                  id='support-request'
                  type='radio'
                  ref={querySuppInput}
                  className='border-[.5px] accent-Green600 border-Grey500 h-8 rounded-md ml-5 mr-3 group-active:active'
                  required
                  onChange={(e) => setCurActive(e.target.id)}
                ></input>
                <label
                  htmlFor='support-request'
                  className='select-none after:content-none w-full text-sm p-2 pl-0 m-0'
                >
                  Support Request
                </label>
              </div>
            </div>
            <a className={`${err.queryType ? "block" : "hidden"} text-xs text-Red my-2`}>
              Please select a query type
            </a>
          </div>
          <div className='flex flex-col'>
            <label htmlFor='message'>Message</label>
            <textarea
              id='message'
              required
              ref={messageInput}
              className={`
                border-[.5px] border-Grey500 hover:border-Green600 focus:border-Green600 focus:bg-Green200 focus:outline-none rounded-md text-xs p-2 h-20 resize-none
                ${err.message ? "border-Red" : ""}
                `}
            ></textarea>
            <a className={`${err.message ? "block" : "hidden"} text-xs text-Red my-2`}>
              This field is required
            </a>
          </div>
          <div className='flex flex-row flex-grow my-2'>
            <input
              type='checkbox'
              ref={consentInput}
              className='mr-3 rounded-none accent-Green600'
              id='consent'
              name='consent'
            />
            <label htmlFor='consent'>I consent to being contacted by the team</label>
          </div>
          <a className={`${err.consent ? "block" : "hidden"} text-xs text-Red my-2`}>
            To submit this form, please consent to being contacted
          </a>
          <input
            type='submit'
            className='w-full h-9 bg-Green600 text-white text-xs rounded-md my-2'
          ></input>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default App;
