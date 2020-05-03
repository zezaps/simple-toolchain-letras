import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Context } from "../../context";

const Search = () => {
	// eslint-disable-next-line
	const [state, setState] = useContext(Context);
	const [userInput, setUserInput] = useState("");
	const [trackTitle, setTrackTitle] = useState("");

	useEffect(() => {
		axios
			.get(
				`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${trackTitle}
            &page_size=10&page=1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`
			)
			.then(res => {
				let track_list = res.data.message.body.track_list;
				setState({ track_list, heading: "Resultado de la búsqueda" });
			})
			.catch((err) => console.log(err));
		// eslint-disable-next-line
	}, [trackTitle]);

	const findTrack = (e) => {
		e.preventDefault();
		setTrackTitle(userInput);
	};

	const onChange = (e) => {
		setUserInput(e.target.value);
	};

	return (
		<div className="card card-body mb-4 p-4">
			<h1 className="display-4 text-center">
				<i className="fas fa-volume-up fa-xs"></i> Busca una canción
			</h1>
			<p className="lead text-center">¡Encuentra tu letra favorita!</p>
			<form onSubmit={findTrack}>
				<div className="form-group">
					<input
						type="text"
						className="form-control form-controll-Lg"
						placeholder="Título de la canción..."
						name="userInput"
						value={userInput}
						onChange={onChange}
					/>
				</div>
				<button className="btn btn-info btn-lg btn-lg btn-block mb-5" type="submit">
					Buscar letra
				</button>
			</form>
		</div>
	);
};

export default Search;
