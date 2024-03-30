import { useState } from "react"
import { useSignUp } from "../hooks/useSignup";
import {Link} from "react-router-dom"
const Signup = ()=>{
  const {signup,isLoading,error} = useSignUp();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const handleClick = async(e)=>{
    e.preventDefault();
      await signup(email,password);
    }
  return(
    <div>
    <section className="bg-light py-3 py-md-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4">
            <div className="card border border-light-subtle rounded-3 shadow-sm">
              <div className="card-body p-3 p-md-4 p-xl-5">
                <h2 className="fs-6 fw-normal text-center text-secondary mb-4">Join Us in Making a Difference<br/>Register Today to Donate and Transform Lives!</h2>
                  <form onSubmit={handleClick}>
                    <div className="row gy-2 overflow-hidden">
                      <div className="col-12">
                        <div className="form-floating mb-3">
                          <input type="email" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" id="email" />
                          <label htmlFor="text" className="form-label">Email</label>
                        </div>
                      </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" id="password" />
                        <label htmlFor="password" className="form-label">Password</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="d-grid my-3">
                        <button className="btn btn-primary btn-lg" type="submit">Sign In</button>
                      </div>
                    </div>
                    {error && <div className="error">{error}</div>}
                    <div className="col-12">
                      <p className="m-0 text-secondary text-center">Don't have an account? <Link to="/login" className="link-primary text-decoration-none">Login</Link></p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  )
}

export default Signup;