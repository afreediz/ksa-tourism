import React from 'react';

const Circle = ({ text }) => {
    return (
        <div  className="p-2 flex items-center justify-center w-20 h-20 text-xl font-bold text-white bg-teal-400 rounded-full hover:scale-110 hover:bg-white hover:text-teal-400 border border-teal-400  transform transition-all hover:-translate-y-2 duration-300 ">
            {text}
        </div>
    );
};

const Rewards = () => {
    return (
        <div className="mt-12">
            <div className="flex flex-col items-center ">
                <h3 className="text-xl font-bold text-center heading mb-4">Rewards and Recognitions</h3>
                <p className="max-w-3xl text-center p-2">
                    We take immense pride in the cohesive teamwork demonstrated by every
                    member of our company. United by a singular focus on ensuring customer
                    satisfaction, our team consistently achieves excellence at every
                    juncture of our service.
                </p>
            </div>
            <div data-aos="fade-right" className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-2 place-items-center justify-items-center m-3">
              <Circle text={"IATO"}/>
              <Circle text={"ITO"}/>
              <Circle text={"ATTOIC"}/>
              <Circle text={"TOAK"}/>
              <Circle text={"KTDC"}/>
              <Circle text={"KTM"}/>
            </div>
        </div>
    );
};

export default Rewards;
