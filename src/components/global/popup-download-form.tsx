import { Dispatch, SetStateAction, useState } from "react";

export default function DownloadForm({
  modal,
  setModal,
}: {
  modal: boolean;
  setModal: Dispatch<SetStateAction<boolean>>;
}) {
  const [fillForm, setFillForm] = useState({
    name: "",
    company: "",
    email: "",
    job: "",
    terms: false,
  });

  const changeForm = (e: any) => {
    if (e.target.name === "terms")
      setFillForm({ ...fillForm, [e.target.name]: e.target.checked });
    else setFillForm({ ...fillForm, [e.target.name]: e.target.value });
  };
  return (
    <div className="fixed bottom-0 right-0 p-8 font-tap bg-tc-secondary text-white max-w-[450px] z-[9999]">
      <div className="flex justify-between items-start mb-8">
        <span className="font-tap text-white text-xl"></span>
        <img
          onClick={() => setModal(!modal)}
          className="invert w-[20px] h-[20px]"
          src="./navigation/cross.svg"
          alt=""
        />
      </div>
      <div className="flex justify-between items-center gap-8">
        <div className="w-[50%] flex flex-col justify-between items-start h-full font-franklin_regular gap-8">
          <p className="text-[1.3rem] leading-6">
            Ready to take your brand to the next level?
          </p>
          <p className="text-[1.3rem] leading-6 text-tc-primary">
            Discover how in our article on driving brand growth
          </p>
        </div>
        <img
          className="w-[45%]"
          src="https://tapcreative.ie/wp-content/uploads/2023/01/Article-BX.png"
          alt=""
        />
      </div>
      <div className="mt-8 font-franklin_regular text-black">
        <p className="text-[1.1rem] text-white">Fil the form to download</p>
        <input
          value={fillForm.name}
          onChange={(e) => {
            changeForm(e);
          }}
          name="name"
          type="text"
          placeholder="Name"
          className="uppercase mt-4 w-full p-2"
        />
        <input
          onChange={(e) => {
            changeForm(e);
          }}
          value={fillForm.company}
          name="company"
          type="text"
          placeholder="Company"
          className="uppercase mt-4 w-full p-2"
        />
        <input
          value={fillForm.email}
          onChange={(e) => {
            changeForm(e);
          }}
          name="email"
          type="text"
          placeholder="Email"
          className="uppercase mt-4 w-full p-2"
        />
        <input
          value={fillForm.job}
          onChange={(e) => {
            changeForm(e);
          }}
          name="job"
          type="text"
          placeholder="Job title"
          className="uppercase mt-4 w-full p-2"
        />
        {fillForm.name != "" &&
        fillForm.company != "" &&
        fillForm.email != "" &&
        fillForm.job != "" ? (
          <>
            {" "}
            <input
              checked={fillForm.terms}
              onChange={(e) => {
                changeForm(e);
              }}
              type="checkbox"
              className="inline-block w-4 h-4 border-0 p-2 bg-tc-primary mt-4"
              name="terms"
              required
            />
            <p className="inline-block text-xs font-franklin_thin text-white">
              {" "}
              TAP Creative can store and use my information for inquires.
            </p>{" "}
          </>
        ) : (
          ""
        )}
        <div className="mt-0 overflow-hidden">
          <button
            className={`uppercase mt-4  ${
              fillForm.name != "" &&
              fillForm.company != "" &&
              fillForm.email != "" &&
              fillForm.job != "" &&
              fillForm.terms === true
                ? "block"
                : "hidden duration-200"
            } bg-tc-primary px-2 py-2 text-white w-full text-[1rem] font-bold`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
