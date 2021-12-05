import PlayerCard from "../components/PlayerCard" 

const PlayerDetails = () => {
    return(
        <div className="container-details">
             <div className="details-body">
                {/* <!-- /Breadcrumb --> */}
                <PlayerCard/>
                <div className="row stat-details">
                <div className="col-sm-6 mb-3">
                    <div className="card h-100">
                    <div className="card-body">
                        <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                        <small>Web Design</small>
                        <div className="progress mb-3">
                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Website Markup</small>
                        <div className="progress mb-3">
                        <div className="progress-bar bg-primary" role="progressbar"  aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>One Page</small>
                        <div className="progress mb-3">
                        <div className="progress-bar bg-primary" role="progressbar"  aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Mobile Template</small>
                        <div className="progress mb-3">
                        <div className="progress-bar bg-primary" role="progressbar"  aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Backend API</small>
                        <div className="progress mb-3">
                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-sm-6 mb-3">
                    <div className="card h-100">
                    <div className="card-body">
                        <h6 className="d-flex align-items-center mb-3"><i className="material-icons text-info mr-2">assignment</i>Project Status</h6>
                        <small>Web Design</small>
                        <div className="progress mb-3">
                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Website Markup</small>
                        <div className="progress mb-3">
                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>One Page</small>
                        <div className="progress mb-3">
                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Mobile Template</small>
                        <div className="progress mb-3">
                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <small>Backend API</small>
                        <div className="progress mb-3">
                        <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
           </div>
    </div>
    );
    
}

export default PlayerDetails