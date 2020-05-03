import React, { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../diseño/Loading";
import { Link } from "react-router-dom";

const Lyrics = (props) => {
	const [track, setTrack] = useState({});
	const [lyrics, setLyrics] = useState({});
	
	useEffect(() => {
		axios
		.get(
			`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${
			  props.match.params.id
			}&apikey=${process.env.REACT_APP_MM_KEY}`
		  )
		  .then(res => {
			let lyrics = res.data.message.body.lyrics;
			setLyrics({ lyrics });
	
			return axios.get(
			  `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${
				props.match.params.id
			  }&apikey=${process.env.REACT_APP_MM_KEY}`
			);
		  })
		  .then(res => {
			let track = res.data.message.body.track;
			setTrack({ track });
		  })
		  .catch(err => console.log(err));
		}, [props.match.params.id]);

	if (
		track === undefined ||
		lyrics === undefined ||
		Object.keys(track).length === 0 ||
		Object.keys(lyrics).length === 0
	) {
		return <Loading />;
	} else {
		return (
			<>
        		<Link to="/" className="btn btn-dark btn-lg mb-4">
					Volver
				</Link>
				<div className="card text-white bg-dark mb-3">
					<h1 class="card-header display-4">{track.track.track_name}<p className="text-secondary text-right">{track.track.artist_name}</p>
					</h1>
					
					<div className="card-body">
						{lyrics.lyrics.lyrics_body.split("\n").map(lyric => {
                			return <h5 className="card-text font-weight-light font-italic text-center ">{lyric}</h5>
					})}
					</div>
				</div>
			</>
		);
	}
};

export default Lyrics;
