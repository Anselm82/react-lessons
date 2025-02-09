import styled from 'styled-components';

const DivCenter = styled.div`
  text-align: center
`;

const Boton = styled.button`
  font-size: 1.4em;
  display: inline-block;
  background-color: #e10098;
  color: #fff;
  width: 100%;
  @media screen and (min-width: 980px) {
    width: 300px;
  }
`;

const Home = ({title}) => {
  return (
    <div>
      Soy Home de {title}

      <DivCenter>
        <Boton>
          Soy un botón
        </Boton>
      </DivCenter>
    </div>
  )
}

export default Home