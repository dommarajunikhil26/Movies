/* eslint-disable react/prop-types */
import Hero from '../hero/Hero';

const Home = ({ movies }) => {
    return (
        <>
            <Hero movies={movies} />
        </>
    )
}

export default Home;