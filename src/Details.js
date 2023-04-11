import { useLocation } from "react-router-dom";

const Details = (props) => {
    const location = useLocation()
    const state = location.state
    return (
        <div>
            <h3>{state.title}</h3>
            <p>Python is a very popular general-purpose interpreted, interactive, object-oriented, and high-level programming language. Python is dynamically-typed and garbage-collected programming language. It was created by Guido van Rossum during 1985- 1990. Like Perl, Python source code is also available under the GNU General Public License (GPL).</p>
        </div>
    )
}


export default Details;