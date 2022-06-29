import { Modal,show,Button} from 'react-bootstrap';
import React, {useState} from 'react';
const API_IMG="https://image.tmdb.org/t/p/w500/";
const Card=({titel, poster_path, vote_average, release_date, overview})=>{
    const [show, setShow]=useState(false);
    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    return(
        <div className="card text-bg-mb-3">
        <div className="card-body">
          <img className="card-img-top" src={API_IMG+poster_path} />
          <div className="card-body" >
          <div className="d-grid gap-2 col-6 mx-auto">

              <button type="button" className="btn-btn-primary" onClick={handleShow} >View More</button>
              </div>
              <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                  <img className="card-img-top" style={{width:'10rem'}}src={API_IMG+poster_path} />
                  <h3>{titel}</h3>
                  <h4>rating: {vote_average}</h4>
                  <h5>Release Date: {release_date}</h5>
                  <br></br>
                  <h6><strong>Overview</strong></h6>
                  <p>{overview}</p>
                  </Modal.Body>
                  <Modal.Footer>
                      <Button className="btn-btn-primary" onClick={handleClose}>Close</Button>
                  </Modal.Footer>
              </Modal>
          </div>
        </div>
    </div>
    )
}
export default Card;


