import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";



const Loaderpage = () => {
 

  return (
    <div className="mt-5">
     {/* <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={5000} //3 secs
      /> */}
      {/* <Loader type="Hearts" color="#00BFFF" height={80} width={80} /> */}
      {/* <Loader type="Grid" color="#00BFFF" height={80} width={80} /> */}
      {/* <Loader type="Circles" color="#00BFFF" height={80} width={80}/> */}
      <Loader type="Bars" color="#00BFFF" height={80} width={80} />
    </div>
  );
}

export default Loaderpage;