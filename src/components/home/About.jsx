import parts from '../../assets/assets/images/about_us/parts.jpg'
import parson from '../../assets/assets/images/about_us/person.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
         <figure className='flex-1 relative'>
         <img src={parson} className="w-2/3" />
         <img src={parts} className="absolute w-1/2 top-1/2 right-0 border-solid border-[10px] border-white"  />
         </figure>
          <div className='flex-1 text-start'>
            <h1>About Us</h1>
            <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
            <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <button className="btn btn-primary">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;