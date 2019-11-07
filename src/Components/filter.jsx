import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Filter = props => {
    const {movies , curr_genre , genrechange} = props;
    var types = ["All"];
    for (let i = 0; i < movies.length; i++) {
        let temp = true;
        for (let j = 0; j < types.length; j++) {
            if (movies[i].genre.name == types[j]) {
                temp = false;
            }
        }
        if (temp === true) {
            types.push(movies[i].genre.name)
        }
    }
    return (
        <div>
            <table>
                <tbody>
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            {types.map((genre) => {
                                return (
                                    <li className={genre === curr_genre ?"page-item active":"page-item"}><a className="page-link" onClick={()=>{genrechange(genre)}}>{genre}</a></li>
                                )
                            })}
                        </ul>
                    </nav>
                </tbody>
            </table>
        </div>
    )
}
export default Filter;