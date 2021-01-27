import React from 'react';
import styled from 'styled-components';
import {motion} from 'framer-motion';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';


const GameDetail = ({pathId}) => {

const history = useHistory();

    const ExitDetailHandler = (e)=>{
        const element = e.target;
    
        if(element.classList.contains("shadow")){
            
            document.body.style.overflow="auto";
    
            history.push('/');
        }
    }



    const {screen, game, isLoading} = useSelector((state)=> state.detail);




    return (
        <>
        {!isLoading && (
            <CardShadow className="shadow" onClick={ExitDetailHandler}>
                <Detail  layoutId={pathId}>
                    <Stats>
                        <div className="rating">
                            <h3>{game.name}</h3>
                            <p>Rating: {game.rating}</p>
                        </div>
                        <Info>
                            <h3>Platforms</h3>
                            <Platforms>
                                {game.platforms.map(data=>(
                                    <h3 key={data.platform.id}>{data.platform.name}</h3>
                                ))}
                            </Platforms>
                        </Info>
                    </Stats>    
                    <Media>
                        <motion.img 
                        layoutId={`image ${pathId}`}
                        src={game.background_image} alt={game.background_image}/>
                    </Media>
                    <Description>
                        <p>{game.description_raw}</p>
                    </Description>
                    <div className="gallery">
                        {screen.results.map(screen=>(
                            <img src={screen.image} key={screen.id} alt={screen.image}/>
                        ))}
                    </div>
                </Detail>    
            </CardShadow>      
            )}      
        </>
    )
};


const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y:scroll;   
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0; 
    img{
        width: 100%;
    }

    &::-webkit-scrollbar{
        width: 0.3rem;
    }

    &::-webkit-scrollbar-thumb{
        background-color: #ff7676;
    }

    &::-webkit-scrollbar-track{
        background-color: #fff;  
    }
`

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 7rem;
    position: absolute;
    background: white;
    left: 10%;
    color: black;
    .gallery{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        grid-gap: 15px;

        img{
            height: 100%;
            object-fit: contain;
        }
    }
`

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Info = styled(motion.div)`
    text-align: center;
`
const Platforms = styled(motion.div)`
    display: flex;
    justify-content:space-around;
    flex-wrap: wrap;
    img{
        margin-left: 3rem;
    }
`

const Media = styled(motion.div)`
    margin-top: 5rem;
    img{
        width: 50%;
    }
`
const Description = styled(motion.div)`
    margin: 5rem 0rem;
`

export default GameDetail;
