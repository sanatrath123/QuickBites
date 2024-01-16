const About = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center bg-gradient-to-t'>
      {/* Background Image */}
      <div
        className='bg-cover bg-center w-full h-1/2 text-center mx-auto'
        style={{ backgroundImage: "url('https://previews.123rf.com/images/seralexvi/seralexvi1509/seralexvi150900112/45360755-fruits-and-vegetables-concept-fresh-food.jpg')" }}
      >
        <h1 className="text-blue-800 text-4xl font-bold mb-4">
          HI THIS IS MY ABOUT PAGE
        </h1>

        <p className='text-white w-1/3 mx-auto'>
          When we say good, we don’t just mean good food. We also mean the goodness that good food leads to. Good memories, a good temper, a good day, a good burp. And we know that when our food leaves our kitchens, we’re creating all that. It’s rewarding, this belief in good. Now take a look at how we go about it.
        </p>
      </div>

      {/* Additional Content */}
      <div className="w-2/3 flex items-center bg-blue-300 mt-6 justify-center">
  <div
    className='bg-cover bg-center w-2/3 h-1/3 text-center mx-auto'
    style={{ backgroundImage: "url('https://via.placeholder.com/800x400')" }}
  ></div>
      </div>
    </div>
  );
};

export default About;
