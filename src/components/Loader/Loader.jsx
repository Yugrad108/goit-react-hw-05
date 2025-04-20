import RingLoader from "react-spinners/RingLoader";

const override = {
  display: "block",
  margin: "0 auto",
};

const Loader = ({ loading }) => {
  return (
    <div>
      <RingLoader
        color="#5a4630"
        loading={loading}
        cssOverride={override}
        size={40}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loader;
