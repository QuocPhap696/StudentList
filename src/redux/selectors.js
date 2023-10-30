import { createSelector } from "@reduxjs/toolkit";
import StudentList from "../component/student/StudentList";

export const searchTextSelector = (state) => state.filters.search;
export const todoRemainingSelector = createSelector(
    searchTextSelector,
    (searchText,status, priorities) => {
        return StudentList.filter((todo)=> {
            if (status === 'All') {
                return priorities.leghth
                ? todo.name.includes(searchText) && priorities.includes(todo.priority)
                : todo.name.includes(searchText);
            }
            return(
                todo.name.includes(searchText) &&
                (status === 'Completed' ? todo.completed : !todo.completed) &&
                (priorities.leghth ? priorities.includes(todo.priority): true)
                );
        });
    }
    );