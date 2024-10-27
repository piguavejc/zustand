import { WhiteCard } from "../../components";
import { useBearerStore } from "../../stores/bears/bears.store";

export const BearPage = () => {
  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <BlackBears />
        <PandaBears />
        <PolarBears />
        <DisplayBlackBears />
      </div>
    </>
  );
};

const BlackBears = () => {
  const blackBears = useBearerStore((state) => state.blackBears);
  const increaseBlackBears = useBearerStore(
    (state) => state.increaseBlackBears
  );

  return (
    <WhiteCard centered>
      <h2>Osos Negros</h2>

      <div className="flex flex-col md:flex-row">
        <button onClick={() => increaseBlackBears(+1)}> +1</button>
        <span className="text-3xl mx-2 lg:mx-10"> {blackBears} </span>
        <button onClick={() => increaseBlackBears(-1)}>-1</button>
      </div>
    </WhiteCard>
  );
};

const PandaBears = () => {
  const pandaBears = useBearerStore((state) => state.pandaBears);
  const increasePandaBears = useBearerStore(
    (state) => state.increasePandaBears
  );
  const handleIncrease = (by: number) => {
    increasePandaBears(by);
  };
  return (
    <WhiteCard centered>
      <h2>Osos Polares</h2>

      <div className="flex flex-col md:flex-row">
        <button
          onClick={() => {
            handleIncrease(+1);
          }}
        >
          {" "}
          +1
        </button>
        <span className="text-3xl mx-2 lg:mx-10"> {pandaBears} </span>
        <button
          onClick={() => {
            handleIncrease(-1);
          }}
        >
          -1
        </button>
      </div>
    </WhiteCard>
  );
};

const PolarBears = () => {
  const pandaPolar = useBearerStore((state) => state.polarBears);
  const increasePolarBears = useBearerStore(
    (state) => state.increasePolarBears
  );
  const handleIncrease = (by: number) => {
    increasePolarBears(by);
  };
  return (
    <WhiteCard centered>
      <h2>Osos Polares</h2>

      <div className="flex flex-col md:flex-row">
        <button
          onClick={() => {
            handleIncrease(+1);
          }}
        >
          {" "}
          +1
        </button>
        <span className="text-3xl mx-2 lg:mx-10"> {pandaPolar} </span>
        <button
          onClick={() => {
            handleIncrease(-1);
          }}
        >
          -1
        </button>
      </div>
    </WhiteCard>
  );
};

const DisplayBlackBears = () => {
  const bears = useBearerStore((state) => state.bears);
  const clearBears = useBearerStore((state) => state.clearBears);
  const addBears = useBearerStore((state) => state.addBear);

  return (
    <WhiteCard>
      <h1>Osos</h1>
      <button onClick={addBears}>Agregar oso</button>
      <button onClick={clearBears}>Limpear oso</button>

      <pre>{JSON.stringify(bears, null, 2)}</pre>
    </WhiteCard>
  );
};
