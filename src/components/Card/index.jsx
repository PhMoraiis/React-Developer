import React from 'react'
import { CardContainer, Content, HasInfo, ImageBackground, PostInfo, UserInfo, UserPicture } from './styles'
import ImgProfile from '../../assets/profile-pic (5).png'
import FiThumbsUp from '../../assets/thumbs-up.svg'


const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src='https://t2.tudocdn.net/644010?w=1000&fit=clip' />
        <Content>
            <UserInfo>
                <UserPicture src={ImgProfile} />
                <div>
                    <h4>Philipe Morais</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para curso de HTML e CSS</h4>
                <p>Projeto feito para o curso de HTML e CSS no Bootcamp Inter+...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #Javascript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }