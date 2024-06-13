function Hero() {
  return (
    <div className="container mx-auto">
      <div className="flex  justify-around mt-5">
        <div className="shadow-lg p-5">
          <h1 className="font-sans  font-bold text-2xl text-center mt-2 mb-2">
            ENABLE.ME
          </h1>
          <p className="w-[400px] ">
            An app that paves way for helping those struggling with disability
            and have no means to curb this problem.That's where we coonect the
            patient to their respective doctors.
          </p>
          <button className=" mt-[35%] border px-5 py-2 rounded-lg bg-[#81007f] text-white ">
            Learn More
          </button>
        </div>

        <div>
          <img
            className=" rounded-lg size-[500px]"
            src="src/assets/images/physio.jpg"
          />
        </div>
      </div>

      <div>
        <h2 className="font-sans font-bold text-2xl text-center mt-10">
          Our Mission
        </h2>
        <p className="text-center mt-10">
          Providing the best services in creating
          <br /> a patient doctor relationship to ensure Quick recovery.
        </p>
      </div>
      <div className="flex gap-5 justify-around">
        <img
          className="border- w-[200px] h-[200px] bg-gray-200 rounded-full"
          src="src/assets/images/homecare-web.jpg"
        />
        <img
          className="border- w-[200px] h-[200px] bg-gray-200 rounded-full"
          src="src/assets/images/session.jpg"
        />
        <img
          className="border- w-[200px] h-[200px] bg-gray-200 rounded-full"
          src="src/assets/images/Website-homecare.jpg"
        />
        <img
          className="border- w-[200px] h-[200px] bg-gray-200 rounded-full"
          src="src/assets/images/arthritis-exercise.jpg"
        />
      </div>

      <h1 className="text-center font-bold font-sans text-2xl">Our services</h1>
      <div className="flex flex-col gap-8 mb-4 items-center">
        <div className="bg-[#81007f] h-[200px] w-[100%]  text-white items-center flex gap-7">
          <img
            className="size-[150px]"
            src="src/assets/images/patient-communication.jpg"
          />
          <div>
            <h2 className="text-center  font-sans text-2xl mt-5">
              One on One Communication
            </h2>
            <p className="mt-5">
              We give both patients and their respective doctor a chance to
              communicate to each other for better understanding of their
              situation.
            </p>
          </div>
        </div>
        <div className="bg-[#81007f] h-[200px] w-[100%] items-center flex">
          <div className="text-white">
            <h2 className="text-center">solutions</h2>
            <p>
              We try to come with the beast ideas to solve the issue of missing
              a doctors appointment and that of not having enough funds.
            </p>
          </div>
          <img className="size-[150px]" src="src/assets/images/solutions.jpg" />
        </div>
        <div className="bg-[#81007f] gap-8 h-[200px] w-[100%] text-white  items-center flex">
          <img
            className="size-[150px]"
            src="src/assets/images/patient-communication.jpg"
          />
          <div>
            <h2 className="text-center">Patient satisfaction</h2>
            <p>
              we also look for t he best in order to satisfy patient ’s
              interest. The way a patient feels after t heir interaction wit h t
              he app brings us satisfaction at t he end of t he day We tr y to
              come wit h t he beast ideas to solve t he issue of missing a
              doctors appointment and t hat of not having enough funds.
            </p>
          </div>
        </div>
      </div>
      <h1 className="text-center font-sans font-bold text-2xl">Testimonials</h1>
      <div className="flex mb-4 justify-around gap-8">
        <div className="shadow-lg w-[400px] rounded-lg h-[400px]">
          <img className="rounded-full" src="src/assets/images/elder.jpeg" />
          <h2 className="text-center">Maria Delores</h2>
          <p>
            "working with this app has given me a chance to improve on
            healthcare of my mom and my grandfather"
          </p>
        </div>
        <div className="shadow-lg w-[400px] rounded-lg h-[400px]">
          <img className="rounded-full" src="src/assets/images/female.jpeg" />
          <h2>Agentx</h2>
          <p>
            "Using this app has helped improve on appointment scheduling and
            general healthcare of my niece "
          </p>
        </div>
        <div className="shadow-lg w-[400px] rounded-lg h-[400px]">
          <img className="rounded-full" src="src/assets/images/male (1).jpeg" />
          <h2>Dr. Strange</h2>
          <p>
            "This app has been beneficial to myself with regular check-ups and
            constant communication with the Therapist"
          </p>
        </div>
      </div>
    </div>
  );
}
export default Hero;
