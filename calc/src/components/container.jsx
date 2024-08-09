
const Container = ({children})=>{


    return(
        <>
      <div className="min-h-[60vh] min-w-[20rem] max-w-[19rem] border-solid border-4 border-black m-4 rounded-2xl flex flex-direction-column flex-wrap justify-center">

<h1 className="flex justify-center my-3 text-2xl text-slate-800 m-7">Calculator</h1> 
{children}
      </div>
      
        </>
    )
}
export default Container;