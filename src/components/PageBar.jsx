const PageBar = ({ text, showModal, pageTitle, hideButton }) => {
  return (
    <div className="flex justify-between items-center mt-4 mb-4 bg-white rounded-[20px] h-16 px-4">
      <div className=" text-main font-bold text-xl">{pageTitle}</div>

      <div>
        {!hideButton && (
          <button
            onClick={() => showModal(true)}
            type="submit"
            className="w-64 h-10  bg BTN-purple-gradient rounded-lg text-white  font-Montserrat"
          >
            {text}
          </button>
        )}
      </div>
    </div>
  );
};

export default PageBar;
