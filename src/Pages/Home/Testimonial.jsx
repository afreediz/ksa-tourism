import { FaQuoteRight } from "react-icons/fa6";
const testimonials = [
  {
    content:
      "A big thanks to Team KSA for our incredible India trip. Their timely updates and a personalized package at a competitive price made them the clear choice. KSA's tour coordinator truly went above and beyond, making our journey seamless and unforgettable",
    name: "Sarah M",
  },
  {
    content: "KSA made our India adventure exceptional! Their constant updates set them apart from the other agents we contacted. The customized package at a competitive price exceeded expectations. Big shoutout to Team KSA for their outstanding service.",
    name: "Mark R"
  },
  {
    content: "Heartfelt thanks to Team KSA! Their prompt updates and a personalized package at a competitive price made our India tour unforgettable. The tour coordinator's dedication and attention to detail were commendable. Highly recommended!",
    name: "Lisa B"
  }
];

const TestimonialCard = ({name,content}) => {
  return (
    <div  className="flex bg-white flex-col items-end relative max-w-xl p-8  rounded-lg transform transition duration-300 hover:scale-105 shadow-lg">
      <div className="flex items-start justify-start">
      <h2 className="text-teal-400 text-3xl">
      <FaQuoteRight/>
      </h2>
      </div>
      <p className="mt-4 p-3">
        {content}
      </p>
      <p className="font-bold italic">- {name}</p>
    </div>
  );
};

function Testimonial() {
  return (
   <main className="p-3">
    <h2 className="text-3xl font-bold flex items-center text-center justify-center gap-2 text-gray-900">What Our Travellers Says<span className="text-teal-400"><FaQuoteRight/></span></h2>
    <div className="mt-6 grid gap-4 grid-cols-1 lg:grid-cols-3">
      {testimonials.map((data) => (
        <TestimonialCard  key={data.name} 
        content={data.content}
        name={data.name}
        />
      ))}
    </div>
   </main>
  );
}

export default Testimonial;
