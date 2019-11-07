import React, { Component } from 'react';
import { getMovies } from "./fakeMovieService";
import Likes from "./likes";
import Pagination from "./pagination";
import Filter from "./filter";
import NewMovie from "./new_movie";
class Movies extends Component {
    state = {
        movies: getMovies(),
        limit: 4,
        currentPage: 1,
        starting: 0,
        ending: 3,
        genre: "All",
        search: ""
    }
    handleClick = id => {
        const clonedArray = [...this.state.movies];
        // console.log(id);
        const index = clonedArray.indexOf(id);
        console.log(index);
        clonedArray[index]["liked"] = !clonedArray[index]["liked"];
        this.setState({ movies: clonedArray })
    }

    handledelete = movie => {
        const newmovie = this.state.movies.filter((elem) => {
            return elem !== movie
        })
        this.setState({ movies: newmovie })
    }

    handlepagechange = page => {
        // console.log(page);
        this.setState({
            currentPage: page,
            starting: (page - 1) * this.state.limit,
            ending: page * this.state.limit - 1
        })
    }

    handlegenrechange = new_genre => {
        this.setState({
            genre: new_genre
        })
    }

    handlesearch = obj => {
        let key = obj.currentTarget.value;
        // console.log(key);
        this.setState({
            search: key,
            genre:"All"
        })
        // console.log(this.state.search);
    }

    render() {
        var arr_page = [];
        var arr = [];
        var arr_genre = [];

        if (this.state.genre === "All") {
            arr_genre = this.state.movies;
        }
        else  {
            arr_genre = this.state.movies.filter((elem) => {
                return elem.genre.name === this.state.genre;
            })
        }

        if(this.state.search != ""){
            arr = arr_genre.filter((m) => {
                m.title.toLowerCase();
                return m.title.toLowerCase().startsWith(this.state.search.toLowerCase());
            })
        }
        else{
            arr = arr_genre;
        }


        for (let i = this.state.starting; i <= this.state.ending; i++) {
            if (arr[i])
                arr_page.push(arr[i]);
        }
        return (
            <div>
                <form>
                 <div className="form-group" >
                            <input value={this.state.search} onChange={this.handlesearch} name="search" type="search" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter search"></input>
                        </div>
                 </form>

                <Filter
                    movies={this.state.movies}
                    curr_genre={this.state.genre}
                    genrechange={this.handlegenrechange}
                > </Filter>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Genre</th>
                                <th>Stock</th>
                                <th>Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {arr_page.map((movie) => {
                                return (
                                    <tr>
                                        <td>{movie["title"]}</td>
                                        <td>{movie["genre"]["name"]}</td>
                                        <td>{movie["numberInStock"]}</td>
                                        <td>{movie["dailyRentalRate"]}</td>
                                        <td>
                                            <Likes onClick={() => {
                                                this.handleClick(movie)
                                            }}
                                                likes={movie["liked"]}
                                            />
                                        </td>
                                        <td>
                                            <button onClick={() => {
                                                this.handledelete(movie);
                                            }}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <Pagination
                        itemCount={arr.length}
                        limit={this.state.limit}
                        currentPage={this.state.currentPage}
                        onPagechange={this.handlepagechange}
                    ></Pagination>
                </div>
            </div>
        );
    }
}
export default Movies;