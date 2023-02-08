import Counter from "./components/Counter";

export default function App() {
  // !main topic: initial state, action dispatch, reducer function, store
  // todo: 1. create an action type folder
  // todo: 1. create an action
  // todo: 1. create a reducer function
  // todo: 1. create a store
  // todo: 1. create a store
  // todo: 1. create a store
  // todo: 1. create a store
    return (
        <div className="w-screen h-screen p-10 bg-gray-100 text-slate-700">
            <h1 className="max-w-md mx-auto text-center text-2xl font-bold">
                Simple Counter Application
            </h1>

            <div className="max-w-md mx-auto mt-10 space-y-5">
                <Counter />
                <Counter />
                <Counter />
            </div>
        </div>
    );
}
