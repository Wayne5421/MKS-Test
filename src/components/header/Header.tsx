import styled from 'styled-components';
import { GiShoppingCart } from "react-icons/gi";


const HeaderContainer = styled.div`
    height: 101px;
    width: 100%;
    background-color: #0F52BA;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {

        align-items: center;
        justify-content: space-between;
    }
`;

const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0;

    @media (max-width: 768px) {

        align-items: center;
        justify-content: center;
    }
`;

const Main_Title = styled.p`
    width: 128px;
    height: 44px;
    margin-top: 28px;
    margin-left: 65px;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    font-weight: 600;
    line-height: 19px;
    text-align: left;
    padding-right: 17px;

    @media (max-width: 768px) {
        width: 100%;
        margin-left: 5px;
        
    }
`;

const Span_Title = styled.span`
    margin-left: 12px;
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 100;
    line-height: 19px;
    text-align: left;

    @media (max-width: 768px) {
        margin-left: 5;
    }
`;

const Cart_Container = styled.div`
    height: 45px;
    width: 90px;
    display:flex;
    justify-content: space-between;
    background-color: white;
    margin-right: 88px;
    border-radius: 8px;

    @media (max-width: 768px) {
        margin-right: 5px;

    }
`;

const Cart = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;

   .cart_icon {
        font-size: 35px;
        height: 65%;
        width: 50%;
        font-weight: 600;
    }

   .Counter{
        font-size: 15px;
        font-weight: bold;
        margin-left: 10px;
        margin-top: 5px;
        margin-bottom: 5px;
        margin-right: 35%;
    }

    @media (max-width: 768px) {
        width: 100%;
        margin-right: 10%;
    }
`;

export function Header({ count, animate }: any) {



    return (
      <HeaderContainer>
        <TitleContainer>
          <Main_Title>MKS<Span_Title>Sistemas</Span_Title></Main_Title>
        </TitleContainer>
        <Cart_Container>
          <Cart>
            <GiShoppingCart className={`cart_icon ${animate? 'animate-icon' : ''}`}/>
            <span className='Counter'>{count}</span>
          
          </Cart>
        </Cart_Container>
      </HeaderContainer>
    );
}

export default Header;