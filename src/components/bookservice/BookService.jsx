import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const BookService = () => {

    const { user } = useContext(AuthContext)

    const data = useLoaderData()


    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const name =form.name.value;
        const email =form.email.value;
        const date =form.date.value;
        const price =form.price.value;
        const service =form.service.value;
        const img = data.img;
        const id = data._id;


        const order ={
            name,email,date,price,img,id,service
        }
        
        fetch(`http://localhost:5000/bookings`,{
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(order)
        })
        .then(res=>res.json())
        .then(data=>console.log(data))

        form.reset()
    }

    return (
        <div>
            <form className="card-body" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">name</span>
                        </label>
                        <input defaultValue={user?.name} name='name' type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input defaultValue={user?.email} name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service name</span>
                        </label>
                        <input defaultValue={data.title} name='service' type="text" placeholder="service" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">data</span>
                        </label>
                        <input name='date' type="date" placeholder="data" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">price</span>
                    </label>
                    <input defaultValue={`$ ${data.price}`} name='price' type="text" placeholder="price" className="input input-bordered" required />
                </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Order Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default BookService;