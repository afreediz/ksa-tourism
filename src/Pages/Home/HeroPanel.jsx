function PanelText({title,caption}) {
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-3xl text-gray-600">{title}</h1>
      <span className="text-center text-sm text-gray-600">{caption}</span>
    </div>
  );
}

function HeroPanel() {
  return (
    <div data-aos="flip-up" className="stats shadow bg-white bg:blur backdrop-blur px-16 p-7 w-full lg:w-1/2 flex justify-evenly items-center gap-2">
      <PanelText title="30 Years" caption="Experience"/>
      <PanelText title="500K +" caption="Sweet Customers"/>
      <PanelText title="300" caption="Tourist Attractions"/>
    </div>
  );
}

export default HeroPanel;
