const List = ({item,onButtonClick})=>{


return(
    <>
    <div className="m-3 w-14 bg-slate-200 text-slate-950">
    <button className="flex justify-center w-full h-full " onClick={()=>onButtonClick(item)}  key={item}>{item}</button>

    </div>
    </>

);
}
export default List;