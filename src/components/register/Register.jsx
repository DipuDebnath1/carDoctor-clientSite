import { Link } from 'react-router-dom';
import loginImg from '../../assets/assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const{Register} = useContext(AuthContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        const form = e.target
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password);
        Register(email,password)
        .then(res=>{
            console.log(res.user);
        })
        .catch(error=>{
            console.log(error.message);
        })
        
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-row lg:flex-row gap-4">
          <div className="text-center lg:text-left flex-1">
            <img src={loginImg} alt="" />
          </div>
          <div className="card flex-1 shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
            <p>New to car doctors <Link className='font-bold' to={'/signin'}>Sign Up</Link> </p>
          </div>
        </div>
      </div>
    );
};

export default Register;