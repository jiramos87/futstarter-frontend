import PlayerCard from "../components/PlayerCard" 

const PlayerDetails = () => {
    return(
        <div className="container-details">
             <div className="details-body">
                {/* <!-- /Breadcrumb --> */}
                <PlayerCard/>
                <div className="row stat-details">
                <div className="col-sm-6 mb-3">
                    <div className="card-body-details">
                        <h6 className="d-flex align-items-center mb-3">Player Stat</h6>
                        <small>acceleration</small>
                        <div className="progress mb-3">
                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Sprint Speed</small>
                        <div className="progress mb-3">
                        <div className="progress-bar bg-primary" role="progressbar"  aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Frinishing</small>
                        <div className="progress mb-3">
                        <div className="progress-bar bg-primary" role="progressbar"  aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Short Passing</small>
                        <div className="progress mb-3">
                        <div className="progress-bar bg-primary" role="progressbar"  aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Composure</small>
                        <div className="progress mb-3">
                        <div className="progress-bar bg-primary" role="progressbar"  aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Dribbling</small>
                        <div className="progress mb-3">
                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    </div>
                </div>
           </div>
    </div>
    );
    
}

export default PlayerDetails