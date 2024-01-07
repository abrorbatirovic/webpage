import React, {Fragment} from 'react';
import Navbar from "../component/Navbar";
import phoneIcon from '../assets/img/Phone-call.png'
import locationIcon from '../assets/img/Location.png'
const Home = () => {
    return (
        <div className={'home-bg-img'}>
            <header>
                <Navbar />
            </header>
            <main className={'position-relative h-75'}>
                <h1 className={'text-center home-main-title text-warning position-absolute top-50 start-50'}>
                    Жилой комплекс <br/> в историческом центре
                </h1>
                <ul className={'d-flex justify-content-center list-unstyled gap-5 position-absolute bottom-0 w-100 text-white'}>
                   <li className={'d-flex align-items-center gap-2'}>
                       <img src={locationIcon} alt="location-icon" width={21} height={21}/>
                       <span>Наб. реки Фонтанки 10-15</span>
                   </li>
                    <li className={'d-flex align-items-center gap-2'}>
                       <img src={phoneIcon} alt="phone-icon" width={21} height={21}/>
                       <a className={'text-decoration-none text-white'} href={'tel:8 (812) 123-45-67'}>8 (812) 123-45-67</a>
                   </li>
                </ul>
            </main>
        </div>
    );
};

export default Home;
