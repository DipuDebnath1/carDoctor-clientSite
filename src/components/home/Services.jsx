import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {

    const [services, setServices] = useState([]);
    useEffect(()=>{
       fetch('http://localhost:5000/services')
       .then(res=>res.json())
       .then(data=>setServices(data)) 
    },[])
    return (
        <div>
            <h2 className="text-3xl">services</h2>
            <h2 className="text-6xl">Our Service Area</h2>
            <p className="w-2/3 mx-auto">the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
            <div className="grid grid-cols-3 gap-3">
                {
                    services.map(service=><Card service={service} key={service._id}>

                    </Card>)
                }
            </div>

        </div>
    );
};

const Card = ({service}) => {
    const {img, price,title,_id} = service
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
    <figure><img src={img} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">{title}</h2>
      <p className="text-orange-500">Price:{price}</p>
      <div className="card-actions justify-end">
        <Link to={`/bookservice/${_id}`} className="btn btn-primary">Buy Now</Link>
      </div>
    </div>
  </div>
    )
}

export default Services;