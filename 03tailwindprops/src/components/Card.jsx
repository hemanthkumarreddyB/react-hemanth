const Card = (props) => {
  console.log(props);
  return (
    <>
      <img
        src="https://qph.cf2.quoracdn.net/main-qimg-88cab0f1d0d05c9cc33dd9fbe2cee493"
        alt=""
      />
      <h1 className="text-2xl bg-lime-400 p-3 rounded">card for Photos</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente,
        suscipit!
      </p>
    </>
  );
};

export default Card;
