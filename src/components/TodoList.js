import React from "react";
import { useSelector } from "react-redux";
import Todo from "./Todo";

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const filters = useSelector((state) => state.filters);
    return (
        <div class="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {/* <!-- todo --> */}
            {todos
                .filter((todo) => {
                    const { status } = filters;
                    switch (status) {
                        case true:
                            return todo?.completed;
                        case false:
                            return !todo?.completed;

                        default:
                            return true;
                    }
                })
                .filter((todo) => {
                    const { colors } = filters;
                    if (colors.length > 0) {
                        return colors.includes(todo?.color);
                    }
                    return true;
                })
                .map((todo) => (
                    <Todo todo={todo} key={todo.id} />
                ))}
        </div>
    );
};

export default TodoList;
