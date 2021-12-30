import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/AppContext";
import { useHistory } from 'react-router-dom';
import "./StarterGuide.css";

function Guide() {
    const history = useHistory()
	return (
		<div className="Guide">
			<div className="container starterGuide d-flex flex-column justify-content-center align-items-center">
				<div className="row d-flex align-items-center justify-content-center">
					<div className="col-lg-11 text-center">
						<h2 className="section-heading textYellow">Welcome to Futstarter!</h2>
					</div>
				</div>
				<div className="row d-flex align-items-center justify-content-center">
					<div className="col-lg-11 text-center">
						<p className="textGrey introBox">
							This app was built as a starting place for every new season of Fifa Ultimate Team (FUT).
							Most of our tools use our original, meta-stat based, player ranking algorithm to provide
							relevant and competitive information. Whether you are a new player to the franchise or an
							experienced veteran, we hope you can find something useful within this app.
						</p>
					</div>
				</div>
				<div className="row d-flex align-items-center justify-content-center">
					<div className="col-lg-11 text-center textBox">
						<h3 className="section-subheading textYellow">Meta Squad Selector</h3>
						<br></br>
						<img src={"http://localhost:5000/api/v1/static/images/system/squadselector.png"} className="float-start imgshadow imgBox"></img>
						<p className="textGrey">
							Discover the best squad you could build for each of the five most important leagues in the
							game through our interactive tool. These squads were built using our original meta-stat
							based, player ranking algorithm.
						</p>
					</div>
				</div>
				<div className="row d-flex align-items-center justify-content-center">
					<div className="col-lg-11 text-center textBox">
						<h3 className="section-subheading textYellow">Meta Players Rankings</h3>
						<br></br>
						<img src={"http://localhost:5000/api/v1/static/images/system/playerrankings.png"} className="float-start imgshadow imgBox"></img>
						<p className="textGrey">
							Browse through our player rankings for the different positions available in the game, all
							based on our original meta-calculation algorithm.
						</p>
					</div>
				</div>
				<div className="row d-flex align-items-center justify-content-center">
					<div className="col-lg-11 text-center textBox">
						<h3 className="section-subheading textYellow">Squad Creator</h3>
						<br></br>
						<img src={"http://localhost:5000/api/v1/static/images/system/squadcreator.png"} className="float-start imgshadow imgBox"></img>
						<p className="textGrey">
							Create and build your own squads by searching for players in our FIFA FUT database.
						</p>
					</div>
				</div>
				<div className="row d-flex align-items-center justify-content-center">
					<div className="col-lg-11 text-center textBox">
						<h3 className="section-subheading textYellow">User Squads</h3>
						<br></br>
						<img src={"http://localhost:5000/api/v1/static/images/system/usersquads.png"} className="float-start imgshadow imgBox"></img>
						<p className="textGrey">Load your saved squads and keep them organized.</p>
					</div>
				</div>
                <div className="textYellow mb-5 cursor-pointer" onClick={() => history.push("/register")}>
                    Register now to build your squads and enjoy the full site experience.
                </div>
			</div>
		</div>
	);
}

export default Guide;
