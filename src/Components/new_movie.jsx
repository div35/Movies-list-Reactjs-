import React, { Component } from "react";
import {saveMovie} from "./fakeMovieService";
class NewMovie extends Component {
    state = {
        data: {
            title: "",
            genreId: "",
            numberInStock: "",
            dailyRentalRate: ""
        }
    }

    handleChange = obj => {
        let key = obj.currentTarget.value;
        let newAccount = { ...this.state.data };
        const prop = obj.currentTarget.name;
        newAccount[prop] = key;
        this.setState({ data: newAccount })
    }

    handlebutton = () => {
        console.log(this.state.data);
        if (this.state.data.title == "" || this.state.data.numberInStock == "" || this.state.data.dailyRentalRate == "" || this.state.data.genreId == "") {
            return true;
        }
    }

    handleSubmit = (e) => {
     e.preventDefault();
     saveMovie(this.state.data);
     this.props.history.push("/newmovie")
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input onChange={this.handleChange} name="title" value={this.state.data.title} type="text" className="form-control" id="title" placeholder="Enter title"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="genreId">Genre</label>
                    <select
                        id="genreId"
                        classname="form-control"
                        name="genreId"
                        value={this.state.data.genreId}
                        onChange={this.handleChange}>
                        <option></option>
                        <option
                            id="5b21ca3eeb7f6fbccd471818"
                            value="5b21ca3eeb7f6fbccd471818">Action</option>
                        <option
                            id="5b21ca3eeb7f6fbccd471814"
                            value="5b21ca3eeb7f6fbccd471814">Comedy</option>
                        <option
                            id="5b21ca3eeb7f6fbccd471820"
                            value="5b21ca3eeb7f6fbccd471820">Thriller</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="NumberInStock">NumberInStock</label>
                    <input onChange={this.handleChange} value={this.state.data.numberInStock} name="numberInStock" type="text" className="form-control" id="NumberInStock" placeholder="Enter NumberInStock"></input>
                </div>
                <div className="form-group">
                    <label htmlFor="dailyRentalRate">dailyRentalRate</label>
                    <input onChange={this.handleChange} value={this.state.data.dailyRentalRate} name="dailyRentalRate" type="text" className="form-control" id="dailyRentalRate" placeholder="Enter dailyRentalRate"></input>
                </div>
                <button type="submit" className="btn btn-primary" disabled={this.handlebutton()}>Submit</button>
            </form>
        )
    }
}

export default NewMovie;