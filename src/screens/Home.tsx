import { MainContainer } from "components/MainContainer";
import { useEffect } from "react";
import Center from "../components/utils/Center";

interface Props {}

const Home = ({}: Props) => {
  useEffect(() => {}, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <MainContainer title={'Home'} >
        
    </MainContainer>
  );
};

export default Home;
