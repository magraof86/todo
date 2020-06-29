import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 70px;
    Background: #20295F;
    border-bottom: 5px solid #FF9300;

    display: flex;
`
export const LeftSide = styled.div`
    width:50%;
    height: 70px;
    display:flex;
    align-items:center;
    padding-left:10px;
    
    img{
        width:90px;
        height: 40px;
    }
`
export const RightSide = styled.div`
    width:50%;
    height: 70px;
    display: flex;
    align-items:center;
    justify-content: flex-end;
    
    a{
        color:#fff;
        font-weight: bold;
        text-decoration:none;
        margin: 0 10px;

        &:hover{
            color:#FF9300;
        }
    }

    #notification{
        img{
            width: 25px;
            height:30px;
        }
        span{
            background: #fff;
            color:#FF9300;
            padding: 3px 7px;
            border-radius:50%;
            position:relative;
            top:-20px;
            right: 10px;
            
        }

        &:hover{
            opacity:0.5;
        }
       
    }

    .dividir::after{
        content: "|";
        margin: 0 10px;
        color: #fff;
    }
`