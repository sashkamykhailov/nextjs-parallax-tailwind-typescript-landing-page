import Image from 'next/image'
import React from 'react'
import { Tile, TileBackground, TileContent, TileWrapper } from '../Tile/tile'
import { WorkBackground, WorkContainer, WorkLeft, WorkRight, WorkLink } from '../Work/work'


const Works = () => (
    <TileWrapper numOfPages={3}>
        <TileBackground>
            <WorkBackground/>
        </TileBackground>
        <TileContent>
            <Tile 
                page={0} 
                renderContent={({progress}) => (
                    <WorkContainer>
                        <WorkLeft progress={progress}>
                            <div>We ready to make</div>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                <WorkLink href="https://google.com">it unforgettable</WorkLink>
                            </div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image  
                            src="/assets/icons/christmaslogo.svg" 
                            layout="responsive"
                            width={840}
                            height={1620}
                            alt="tree"/>
                        </WorkRight>
                </WorkContainer>
                )}>
            </Tile>
            <Tile 
                page={1} 
                renderContent={({progress}) => (
                    <WorkContainer>
                        <WorkLeft progress={progress}>
                            <div>We ready to create</div>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                                <WorkLink href="https://google.com">the memories</WorkLink>
                            </div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image  
                            src="/assets/icons/christmaslogo.svg" 
                            layout="responsive"
                            width={840}
                            height={1620}
                            alt="tree"/>
                        </WorkRight>
                </WorkContainer>
                )}>
            </Tile>
            <Tile 
                page={2} 
                renderContent={({progress}) => (
                    <WorkContainer>
                        <WorkLeft progress={progress}>
                            <div>We ready to achive</div>
                            <div className="text-4xl md:text-5xl font-semibold tracking-tight">
                            <WorkLink href="https://google.com">your satisfying</WorkLink>
                                
                            </div>
                        </WorkLeft>
                        <WorkRight progress={progress}>
                            <Image  
                            src="/assets/icons/christmaslogo.svg" 
                            layout="responsive"
                            width={840}
                            height={1620}
                            alt="tree"/>
                        </WorkRight>
                </WorkContainer>
                )}>
            </Tile>
            
        </TileContent>
    </TileWrapper>
)


export default Works