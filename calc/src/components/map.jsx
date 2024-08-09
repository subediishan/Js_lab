import List from "./list";
const Map = ({switches,onButtonClick})=>{
    return(
        <>
              {switches.map((item,index)=>(
<List item={item} key={index} onButtonClick={onButtonClick}> </List>
            ))};
        </>
  

    );
}
export default Map;