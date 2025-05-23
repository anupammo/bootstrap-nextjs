'use client';
import { useEffect } from 'react';

export default function ContactPage() {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  
    return (
      <div>
        <header>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 col-md-6 col-12'>
                <h1 className='text-primary lead fs-1 my-5'>Contact for <strong className='text-dark fw-bold'>Next.js</strong> Projects</h1>
                <p className='lead fs-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button type="button" className="btn btn-warning my-5 px-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Login now ...</button>
              </div>
              <div className='col-lg-4 col-md-6 col-12'>
                <img className='img-fluid' src="https://img.freepik.com/free-vector/palm-tree-island-concept-illustration_114360-16700.jpg?t=st=1744059469~exp=1744063069~hmac=3a54bce2de4e7d88a7c31845c31f1984da386a11f1c90c72d0cace50c2a6cea8&w=740" alt="" />
              </div>
            </div>
          </div>
        </header>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p className="text-center lead mx-auto my-5 w-50">If you have any questions or want to get in touch, feel free to reach out!</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12">
                <div className="card border-0 my-5">
                  <div className="card-body px-5">                    
                    <form>
                      <div className="row">
                        <div className="col">
                          <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control shadow-none rounded" id="name" placeholder="Your Name" />
                          </div>
                        </div>
                        <div className="col">
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control shadow-none rounded" id="email" placeholder="Your Email" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control shadow-none rounded" id="message" rows={3} placeholder="Your Message"></textarea>
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-outline-info rounded px-5">Send</button>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-12">
                <img className="img-fluid rounded my-4" src="https://img.freepik.com/free-photo/top-view-map-blue-background_23-2148786160.jpg?uid=R1067383&ga=GA1.1.23435495.1733852500&semt=ais_hybrid&w=740" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  