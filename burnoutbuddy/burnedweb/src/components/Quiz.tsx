
import React from 'react';

const Quiz: React.FC = () => {
  return (
    <div className="flex flex-col max-w-[960px] flex-1">
      <div className="flex flex-wrap gap-2 p-4">
        <a className="text-[#6d8566] text-base font-medium leading-normal" href="#">Course</a>
        <span className="text-[#6d8566] text-base font-medium leading-normal">/</span>
        <span className="text-[#131712] text-base font-medium leading-normal">Section</span>
      </div>
      <h2 className="text-[#131712] tracking-light text-[28px] font-bold leading-tight px-4 text-left pb-3 pt-5">Quiz</h2>
      <p className="text-[#131712] text-base font-normal leading-normal pb-3 pt-1 px-4">Answer the following questions to test your understanding of the course material.</p>
      <h3 className="text-[#131712] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Question 1 of 5</h3>
      <h2 className="text-[#131712] text-lg font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-2 pt-4">
        What is the most important aspect of effective communication?
      </h2>
      <div className="flex flex-col gap-3 p-4">
        <label className="flex items-center gap-4 rounded-lg border border-solid border-[#dee4dc] p-[15px]">
          <input
            type="radio"
            className="h-5 w-5 border-2 border-[#dee4dc] bg-transparent text-transparent checked:border-[#131712] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#131712]"
            name="d09ced31-1cc1-41e9-a3b9-5d93ec7cc00d"
            checked
          />
          <div className="flex grow flex-col"><p className="text-[#131712] text-sm font-medium leading-normal">Clarity</p></div>
        </label>
        <label className="flex items-center gap-4 rounded-lg border border-solid border-[#dee4dc] p-[15px]">
          <input
            type="radio"
            className="h-5 w-5 border-2 border-[#dee4dc] bg-transparent text-transparent checked:border-[#131712] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#131712]"
            name="d09ced31-1cc1-41e9-a3b9-5d93ec7cc00d"
          />
          <div className="flex grow flex-col"><p className="text-[#131712] text-sm font-medium leading-normal">Conciseness</p></div>
        </label>
        <label className="flex items-center gap-4 rounded-lg border border-solid border-[#dee4dc] p-[15px]">
          <input
            type="radio"
            className="h-5 w-5 border-2 border-[#dee4dc] bg-transparent text-transparent checked:border-[#131712] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#131712]"
            name="d09ced31-1cc1-41e9-a3b9-5d93ec7cc00d"
          />
          <div className="flex grow flex-col"><p className="text-[#131712] text-sm font-medium leading-normal">Confidence</p></div>
        </label>
        <label className="flex items-center gap-4 rounded-lg border border-solid border-[#dee4dc] p-[15px]">
          <input
            type="radio"
            className="h-5 w-5 border-2 border-[#dee4dc] bg-transparent text-transparent checked:border-[#131712] checked:bg-[image:--radio-dot-svg] focus:outline-none focus:ring-0 focus:ring-offset-0 checked:focus:border-[#131712]"
            name="d09ced31-1cc1-41e9-a3b9-5d93ec7cc00d"
          />
          <div className="flex grow flex-col"><p className="text-[#131712] text-sm font-medium leading-normal">Empathy</p></div>
        </label>
      </div>
      <div className="flex px-4 py-3 justify-end">
        <button
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#54d22d] text-[#131712] text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Quiz;
