import TodoList from "./components/TodoList";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
        <div class="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
            <Navbar />

            <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
                {/* <!-- header --> */}
                <Header />
                <hr class="mt-4" />

                {/* <!-- todo list --> */}
                <TodoList />

                <hr class="mt-4" />

                {/* <!-- footer --> */}
                <Footer />
            </div>
        </div>
    );
}
