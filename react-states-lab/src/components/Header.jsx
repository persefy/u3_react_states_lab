import { Link } from "react-router-dom"

const Main = () => {

    return (
        <header>
            <h1>US States</h1>
            <nav>
                <Link className='nav' to="/">All States</Link>
            </nav>
        </header>
    )
    
}
export default Main