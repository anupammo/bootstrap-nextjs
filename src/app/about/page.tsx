export default function AboutPage() {
    return (
      <div>
        <header>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8 col-md-6 col-12'>
                <h1 className='text-primary lead fs-1 my-5'>About <strong className='text-dark fw-bold'>Next.js</strong> Project</h1>
                <p className='lead fs-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <button className="btn btn-warning rounded my-4 px-5" data-bs-toggle="modal" data-bs-target="#exampleModal">Login Now ...</button>
              </div>
              <div className='col-lg-4 col-md-6 col-12'>
                <img className='img-fluid' src="https://img.freepik.com/free-vector/palm-tree-island-concept-illustration_114360-16700.jpg?t=st=1744059469~exp=1744063069~hmac=3a54bce2de4e7d88a7c31845c31f1984da386a11f1c90c72d0cace50c2a6cea8&w=450" alt="" />
              </div>
            </div>
          </div>
        </header>
        <section className='py-5'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4 col-md-6 col-12'>
                <img className='img-fluid rounded shadow my-3' src="https://img.freepik.com/free-vector/gradient-mountain-landscape_52683-77407.jpg?uid=R1067383&ga=GA1.1.23435495.1733852500&semt=ais_hybrid&w=740" alt="" />
              </div>
              <div className='col-lg-4 col-md-6 col-12'>
                <img className='img-fluid rounded shadow my-3' src="https://img.freepik.com/free-vector/desert-landscape-background-video-conferencing_23-2148652924.jpg?uid=R1067383&ga=GA1.1.23435495.1733852500&semt=ais_hybrid&w=740" alt="" />
              </div>
              <div className='col-lg-4 col-md-6 col-12'>
                <img className='img-fluid rounded shadow my-3' src="https://img.freepik.com/free-vector/summer-landscape-background-zoom_52683-42067.jpg?uid=R1067383&ga=GA1.1.23435495.1733852500&semt=ais_hybrid&w=740" alt="" />
              </div>
            </div>
          </div>
        </section>
        {/* Modal */}
        <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}
      </div>
    );
  }
  