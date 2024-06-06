import { useState } from "react";
import "./App.css";
import Footer from "./components/footer";

function App() {
  const [curActive, setCurActive] = useState();

  return (
    <>
      <div className='w-screen h-screen flex items-center justify-center'>
        <form
          className='group w-[500px] h-fit bg-white rounded-xl p-6 m-2'
          onClick={() => setCurActive("")}
        >
          <h1 className='text-2xl font-bold text-Grey900 mb-2'>Contact Us</h1>
          <div className='flex flex-col md:flex-row gap-3 justify-around'>
            <div className='flex flex-col flex-grow'>
              <label>First Name</label>
              <input
                required
                className='peer border-[.5px] border-Grey500 hover:border-Green600 focus:border-Green600 focus:bg-Green200 focus:outline-none h-8 pl-3  rounded-md '
              ></input>
              {/* <span className='mt-2 hidden text-sm text-red-500 peer-[&:not(:placeholder-shown):not(:focus):invalid]:block'>
                test
              </span> */}
            </div>
            <div className='flex flex-col flex-grow'>
              <label>First Name</label>
              <input
                required
                className=' border-[.5px] border-Grey500 hover:border-Green600  focus:border-Green600 focus:bg-Green200 focus:outline-none h-8 pl-3 rounded-md '
              ></input>
            </div>
          </div>
          <div>
            <div className='flex flex-col flex-grow'>
              <label>Email Address</label>
              <input
                required
                className='border-[.5px] border-Grey500 hover:border-Green600  focus:border-Green600 focus:bg-Green200 focus:outline-none h-8 pl-3 rounded-md'
              ></input>
            </div>
          </div>
          <div className='flex flex-col'>
            <label>Query Type</label>
            <div className='flex gap-3 flex-col md:flex-row'>
              <div
                onClick={(e) => e.stopPropagation()}
                className={`${
                  curActive === "generalEnquiry" ? "border-Green600 bg-Green200" : ""
                }  flex flex-row flex-grow items-center border-[.5px] border-Grey500 hover:border-Green600 focus:border-Green600 focus:bg-Green200 focus:outline-none  rounded-md`}
              >
                <input
                  name='queryType'
                  id='generalEnquiry'
                  type='radio'
                  className='border-[.5px] accent-Green600 border-Grey500  h-8 rounded-md ml-5 mr-3'
                  onChange={(e) => setCurActive(e.target.id)}
                  required
                ></input>
                <label
                  htmlFor='generalEnquiry'
                  className='select-none after:content-none w-full text-sm p-2 pl-0 m-0'
                >
                  General Enquiry
                </label>
              </div>
              <div
                className={`${
                  curActive === "supportRequest" ? "border-Green600 bg-Green200" : ""
                } flex md:flex-row flex-grow items-center border-[.5px] border-Grey500 hover:border-Green600 rounded-md`}
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  name='queryType'
                  id='supportRequest'
                  type='radio'
                  className='border-[.5px] accent-Green600 border-Grey500 h-8 rounded-md ml-5 mr-3 group-active:active'
                  required
                  onChange={(e) => setCurActive(e.target.id)}
                ></input>
                <label
                  htmlFor='supportRequest'
                  className='select-none after:content-none w-full text-sm p-2 pl-0 m-0'
                >
                  Support Request
                </label>
              </div>
            </div>
          </div>
          <div className='flex flex-col'>
            <label>Message</label>
            <textarea
              required
              className='border-[.5px] border-Grey500 hover:border-Green600 focus:border-Green600 focus:bg-Green200 focus:outline-none rounded-md text-xs p-2 h-20 resize-none'
            ></textarea>
          </div>
          <div className='flex flex-row flex-grow my-2'>
            <input
              type='checkbox'
              className='mr-3 rounded-none accent-Green600'
              id='consent'
              name='consent'
            />
            <label htmlFor='consent'>I consent to being contacted by the team</label>
          </div>
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
