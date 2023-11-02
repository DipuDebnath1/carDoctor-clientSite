import { useLoaderData } from "react-router-dom";

const Checkout = () => {

    const data = useLoaderData()
    const {img,title} = data 

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        form.reset()
    }

    return (
        <div>
            <figure><img className="w-full" src={img} alt={title} /></figure>
            <form className="card-body" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">name</span>
                        </label>
                        <input name='name' type="text" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Service name</span>
                        </label>
                        <input defaultValue={title} name='service' type="text" placeholder="service" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">phon number</span>
                        </label>
                        <input name='phon number' type="text" placeholder="phon number" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                        <label className="label">
                            <span className="label-text">,message</span>
                        </label>
                        <textarea placeholder="message" className="textarea textarea-bordered textarea-md w-full" required></textarea>

                    </div>

                <div className="form-control mt-6">
                    <button className="btn btn-primary">Order Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;