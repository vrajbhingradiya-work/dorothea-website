import React from "react";

function IntroCompany({ companyName }: any) {
  return (
    <div className="content-box grid grid-cols-1 gap-16 text-white/70 tracking-wider text-xl py-28">
      <div className="flex flex-col gap-6 px-[10%]  text-center ">
        <span className="text-3xl font-semibold">{companyName}</span>
        <p>
          {companyName} started in 2009 as a benchmark model for the Pre-Used,
          or how we prefer to see it as, Pre-Loved Car Brand. The mission was
          simple, direct and drove effect - delivering a new dimension of luxury
          while standardising & raising platforms for the used car market in
          India.
        </p>
        <p>
          Since our inception our primary aim has been our passion for
          delivering excellence which became our mission. YOU (our patrons) are
          the driving force behind our company and making sure you get the best
          is what we thrive on.
        </p>
      </div>
      {/* <div className="flex flex-col gap-6">
        <span className="text-4xl font-bold">MISSION</span>
        <p>
          To redefine the global automotive landscape by setting new standards
          of innovation and impact.
        </p>
      </div> */}
      {/* <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex w-[30%] gap-4">
          <div className="w-[5%] rounded-l-lg border-4 border-[#C2C0BF] border-r-0 h-full"></div>
          <div className="h-[90%] py-8 flex flex-col gap-4">
            <span className="text-4xl font-bold">2009</span>
            <span className="text-3xl font-medium">
              ARRIVAL OF THE WAVEMAKER
            </span>
            <p>Came into being in the year 2009 in the heart of Jaipur.</p>
          </div>
        </div>
        <div className="flex w-[30%] gap-4">
          <div className="w-[5%] rounded-l-lg border-4 border-[#C2C0BF] border-r-0 h-full"></div>
          <div className="h-[90%] py-8 flex flex-col gap-4">
            <span className="text-4xl font-bold">2009</span>
            <span className="text-3xl font-medium">
              ARRIVAL OF THE WAVEMAKER
            </span>
            <p>Came into being in the year 2009 in the heart of Jaipur.</p>
          </div>
        </div>
        <div className="flex w-[30%] gap-4">
          <div className="w-[5%] rounded-l-lg border-4 border-[#C2C0BF] border-r-0 h-full"></div>
          <div className="h-[90%] py-8 flex flex-col gap-4">
            <span className="text-4xl font-bold">2009</span>
            <span className="text-3xl font-medium">
              ARRIVAL OF THE WAVEMAKER
            </span>
            <p>Came into being in the year 2009 in the heart of Jaipur.</p>
          </div>
        </div>
        <div className="flex w-[30%] gap-4">
          <div className="w-[5%] rounded-l-lg border-4 border-[#C2C0BF] border-r-0 h-full"></div>
          <div className="h-[90%] py-8 flex flex-col gap-4">
            <span className="text-4xl font-bold">2009</span>
            <span className="text-3xl font-medium">
              ARRIVAL OF THE WAVEMAKER
            </span>
            <p>Came into being in the year 2009 in the heart of Jaipur.</p>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default IntroCompany;
