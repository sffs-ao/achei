import load from '../assets/load.gif';
export default function Loading() 
{
    return (<div className="flex flex-col justify-center items-center w-full h-screen bg-white">
        <img className="" src={load} alt="loading" />
        <h1>Aguarde um momento ...</h1>
    </div>)
}