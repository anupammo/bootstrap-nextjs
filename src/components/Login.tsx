import React from 'react';

const Login = () => {
  return (
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" style={{width: '360px'}}>
        <div className="modal-content mb-3 p-4">
            <div className="modal-header border-0 pt-0 px-0">
            <p className="text-center h5 mb-0">Login Now</p>
            <button type="button" className="btn-close shadow-none float-end" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className='rounded mb-3'>
            <div className="text-center rounded py-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" className="bi bi-person-circle bg-warning rounded-circle p-0" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                </svg>
            </div>
            </div>
            <form>
            <div className="mb-3">
                <input type="email" className="form-control shadow-none" id="email" placeholder="name@example.com" required />
            </div>
            <div className="mb-3">
                <input type="password" className="form-control shadow-none" id="password" placeholder="••••••••" required />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input shadow-none" id="rememberMe" />
                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
            </div>
            <button type="submit" className="btn btn-warning w-100">Login</button>
            </form>
            <p className="mt-3">
            <span className='mx-2'><a href="#" className="text-decoration-none">Forgot password? </a></span>
            <span className="float-end mx-2">New here? <a href="#" className="text-decoration-none">Sign up</a></span>              
            </p>
        </div>
        </div>
    </div>
  );
};

export default Login;