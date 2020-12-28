import ReactLoading from "react-loading";
import "./Loading.css";

{
  /* <ReactLoading type={"blank"} />
<ReactLoading type={"balls"} />
<ReactLoading type={"bars"} />
<ReactLoading type={"bubbles"} />
<ReactLoading type={"cubes"} />
<ReactLoading type={"cylon"} />
<ReactLoading type={"spin"} />
<ReactLoading type={"spokes"} />
<ReactLoading type={"spinningBubbles"} /> */
}
const LoadingPage = () => {
  return (
    <div className="box loading-page">
      <ReactLoading type={"bubbles"} height={225} width={225} />
    </div>
  );
};

const LoadingData = () => {
  return (
    <div className="box loading-data">
      <ReactLoading color={"black"} type={"spokes"} height={55} width={55} />
    </div>
  );
};

const LoadingPaola = () => {
  return (
    <div className="box loading-text">
      <span>Loading</span>
    </div>
  );
};

export { LoadingData, LoadingPage, LoadingPaola };
