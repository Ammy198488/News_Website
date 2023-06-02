import Newsletter from './Newsletter';
import Latestnews from './Articles/latestNews';
import Science from './Science/Science';
import Recommend from './Recommend/Recommend';
import Videos from './Videos/videos';
import Health from './Health/Health'

const Home = () => {
    return (
        <>
            <div className='bg-secondary mt-0'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-6 col-sm-12'>
                            <Health />
                        </div>
                        <div className='col-lg-6 col-sm-12'>
                            <Science />
                        </div>
                    </div>
                </div>
            </div>
            <Latestnews />
            <Videos />
            <Recommend />
            <Newsletter />
        </>
    )
}

export default Home
