import React, {useEffect} from 'react';
import {useDispatch, useSelector } from 'react-redux';
import {loadGames} from '../Redux/actions/gamesAction';
import Game  from '../components/Game/Game';
import styled from 'styled-components';
import {AnimatePresence, motion, AnimateSharedLayout} from 'framer-motion';
import GameDetail from '../components/GameDetail/GameDetail';
import {useLocation} from 'react-router-dom';





const Home = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(loadGames());
    },[dispatch])


    const {popular, upcoming,newGames, searched }= useSelector((state)=> state.games);



        const location = useLocation();

        const pathId = location.pathname.split('/')[2];



    return (
        <GameList>
            <AnimateSharedLayout type="crossfade">
            <AnimatePresence>
            {pathId && <GameDetail  pathId={pathId}/>}
            </AnimatePresence>  

{searched.length ? (
        <div className="searched">


            <h2>Searched games</h2>
            <Games>
                {searched.map(({id, ...gameProps})=>(
                    <Game
                        key={id}
                        id={id}
                        {...gameProps}
                    />
                ))}
            </Games>     


        </div>):(
    null
        )
        }




            <h2>Upcoming games</h2>
            <Games>
                {upcoming.map(({id, ...gameProps})=>(
                    <Game
                        key={id}
                        id={id}
                        {...gameProps}
                    />
                ))}
            </Games>     


             <h2>Popular</h2>
            <Games>
                {popular.map(({id, ...gameProps})=>(
                    <Game
                        key={id}
                        id={id}
                        {...gameProps}
                    />
                ))}
            </Games>  


             <h2>New games</h2>
            <Games>
                {newGames.map(({id, ...gameProps})=>(
                    <Game
                        key={id}
                        id={id}
                        {...gameProps}
                    />
                ))}
            </Games>   
            </AnimateSharedLayout>            
        </GameList>
    )
}


const  GameList = styled(motion.div)`
    
    padding: 0rem 5rem;
    h2{
        padding: 5rem 0rem;
    }
`
const Games = styled(motion.div)`
    min-height:80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`

export default Home
