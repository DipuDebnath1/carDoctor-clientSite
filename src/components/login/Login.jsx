import { Link } from 'react-router-dom';
import loginImg from '../../assets/assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const {Login} = useContext(AuthContext)

    const handleSubmit = (e) =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        Login(email,password)
        .then(res=>console.log(res.user))
        .catch(err=>console.log(err.message))

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
                  <span className="label-text">Email</span>
                </label>
                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign In</button>
              </div>
            </form>
            <p>New to car doctors <Link className='font-bold' to={'/signup'}>Sign Up</Link> </p>
          </div>
        </div>
      </div>
    );
};

export default Login;