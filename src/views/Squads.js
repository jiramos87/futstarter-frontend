import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/AppContext'
import './Squads.css';

const Squads =() => {
    const { store, actions } = useContext(Context)
    const [ squad, setSquad] = useState([])
    useEffect( () =>{
        setSquad(actions.getSquad())
    }, [])

    
    console.log(squad?.CAM?.acceleration)
    return (
        <div className="field">
            <div className="container">
                <div className="row">
                    <div className="col">row 1</div>
                    <div className="col">col 2</div>
                    <div className="col">col 3</div>
                    {/* <div className="col">Left Striker {store.Squads?.LST && <Card/>}</div> */}
                    <div className="col"></div>
                    <div className="col RST">Right Striker</div>
                    <div className="col">col 7</div>
                    <div className="col">col 8</div>
                    <div className="col">col 9</div>
                </div>
                <div className="row">
                    <div className="col">row 2</div>
                    <div className="col">col 2</div>
                    <div className="col">col 3</div>
                    <div className="col">col 4</div>
                    <div className="col">col 5</div>
                    <div className="col">col 6</div>
                    <div className="col">col 7</div>
                    <div className="col">col 8</div>
                    <div className="col">col 9</div>
                </div>
                <div className="row">
                    <div className="col">row 3</div>
                    <div className="col">col 2</div>
                    <div className="col">col 3</div>
                    <div className="col">col 4</div>
                    <div className="col">col 5</div>
                    <div className="col">col 6</div>
                    <div className="col">col 7</div>
                    <div className="col">col 8</div>
                    <div className="col">col 9</div>
                </div>
                <div className="row">
                    <div className="col">row 4</div>
                    <div className="col">col 2</div>
                    <div className="col">col 3</div>
                    <div className="col">col 4</div>
                    <div className="col">col 5</div>
                    <div className="col">col 6</div>
                    <div className="col">col 7</div>
                    <div className="col">col 8</div>
                    <div className="col">col 9</div>
                </div>
                <div className="row">
                    <div className="col">row 5</div>
                    <div className="col">col 2</div>
                    <div className="col">col 3</div>
                    <div className="col">col 4</div>
                    <div className="col">col 5</div>
                    <div className="col">col 6</div>
                    <div className="col">col 7</div>
                    <div className="col">col 8</div>
                    <div className="col">col 9</div>
                </div>
                <div className="row">
                    <div className="col">row 6</div>
                    <div className="col">col 2</div>
                    <div className="col">col 3</div>
                    <div className="col">col 4</div>
                    <div className="col">col 5</div>
                    <div className="col">col 6</div>
                    <div className="col">col 7</div>
                    <div className="col">col 8</div>
                    <div className="col">col 9</div>
                </div>
                <div className="row">
                    <div className="col">row 7</div>
                    <div className="col">col 2</div>
                    <div className="col">col 3</div>
                    <div className="col">col 4</div>
                    <div className="col">col 5</div>
                    <div className="col">col 6</div>
                    <div className="col">col 7</div>
                    <div className="col">col 8</div>
                    <div className="col">col 9</div>
                </div>
                <div className="row">
                    <div className="col">row 8</div>
                    <div className="col">col 2</div>
                    <div className="col">col 3</div>
                    <div className="col">col 4</div>
                    <div className="col">col 5</div>
                    <div className="col">col 6</div>
                    <div className="col">col 7</div>
                    <div className="col">col 8</div>
                    <div className="col">col 9</div>
                </div>
                <div className="row">
                    <div className="col">row 9</div>
                    <div className="col">col 2</div>
                    <div className="col">col 3</div>
                    <div className="col">col 4</div>
                    <div className="col">col 5</div>
                    <div className="col">col 6</div>
                    <div className="col">col 7</div>
                    <div className="col">col 8</div>
                    <div className="col">col 9</div>
                </div>
                <div className="row">
                    <div className="col">row 10</div>
                    <div className="col">col 2</div>
                    <div className="col">col 3</div>
                    <div className="col">col 4</div>
                    <div className="col">col 5</div>
                    <div className="col">col 6</div>
                    <div className="col">col 7</div>
                    <div className="col">col 8</div>
                    <div className="col">col 9</div>
                </div>
            </div>
        </div>
    )
}

export default Squads