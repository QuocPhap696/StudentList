import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import StudentService from '../service/StudentService'
import LocationService from "../service/LocationService";
// import { search } from "fontawesome";
import { useDispatch } from "react-redux";

// export const fetchStudentById = createAsyncThunk(
//     'student/fetchStudentById',
//     async (id) => {
//         const reponse = await StudentService.getStudentById();
//         return reponse.data;
//     }
// );
// export const createStudent = createAsyncThunk(
//     'student/createStudent',
//     async (data) => {
//         const reponse = await StudentService.create(data);
//         return reponse.data;
//     }
// );
// export const updateStudent = createAsyncThunk(
//     'student/updateStudent',
//     async (data) => {
//         const reponse = await StudentService.create(data);
//         return reponse.data;
//     }
// );

// export const getAllProvinces = createAsyncThunk(
//     'student/getAllProvinces',
//     async (data) => {
//         const response = await LocationService.getAllProvinces(data);
//         return response.data
//     }
// );
// export const getAllDistricts = createAsyncThunk(
//     'student/getAllDistricts',
//     async (data) => {
//         const reponse = await LocationService.getAllDistricts(data);
//         return reponse.data
//     }
// );
// export const getAllWards = createAsyncThunk(
//     'student/getAllWards',
//     async (data) => {
//         const reponse = await LocationService.getAllWards(data);
//         return reponse.data
//     }
// );

export const fetchSearchStudent = createAsyncThunk(
    'student/searchStudent',
    async (search) => {
        const reponse = await StudentService.getSearch(search);
        return reponse.data
    });

export const fetchDeleteStudent = createAsyncThunk(
    'student/fetchDeleteStudent',
    async (id) => {
        const reponse = await StudentService.delete(id);
        return reponse.data
    });
export const fetchUpdateStudent = createAsyncThunk(
    'student/fetchUpdateStudent',
    async (data) => {
        console.log("data", data);
        const reponse = await StudentService.update(data.cusId, data);
        console.log(reponse);
        return reponse.data
    });
export const fetchStudentById = createAsyncThunk(
    'student/fetchStudentById',
    async (id) => {
        const reponse = await StudentService.getById(id);
        return reponse.data
    });
export const fetchCreateStudent = createAsyncThunk(
        'student/fetchCreateStudent',
        async(data) => {
            const reponse = await StudentService.create(data);
            return reponse.data
    });

// export const fetchPaginigation = createAsyncThunk(
//         ''    
//     )

export const studentSlice = createSlice({
    name: 'student',
    initialState: {
        search: '',
        idStudent: '',
        // status: 'All',
        data: [],
        newData: {},// Added data field to store the search results
        priorities: [],

        currentPage: 1,
        itemsPerPafe: 5
    },
    reducers: {
        searchFilterChange: (state, action) => {
            state.search = action.payload;
        },
        deleteStudent: (state, action) => {
            state.idStudent = action.payload
        },
        updateStudent: (state, action) => {
            state.idStudent = action.payload;
        },
        findById: (state, action) => {
            state.idStudent = action.payload;
        },
        createStudent: (state, action) => {
            state.data = action.payload;
        },
        setPage: (state, action) => {
            state.currentPage = action.payload;
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearchStudent.fulfilled, (state, action) => {
                state.data = action.payload;
            })
            .addCase(fetchDeleteStudent.fulfilled, (state, action) => {
                const findId = action.payload.id;
                state.data = state.data.filter((stu) => stu.id !== findId);
            })
            .addCase(fetchUpdateStudent.fulfilled, (state, action) => {
                const newUpdate = action.payload
                state.data = newUpdate
            })
            .addCase(fetchStudentById.fulfilled, (state, action) => {
                const findStudentId = action.payload.id;
                state.data = state.data.filter((stu) =>
                    stu.id !== findStudentId);
            })
            .addCase(fetchCreateStudent.fulfilled, (state, action) => {
                const createStudent = action.payload;
                state.data = createStudent
            })
            // .addCase(fetchPaginigation.fulfilled, (state, action) => {
            //     const pagination = action.payload;
            //     state.data = pagination
            // })
    },
})

export const {
    // changeStudent,
    // changeProvinces,
    // changeDistricts,
    // changeWards,
    searchFilterChange,
    updateStudent,
    deleteStudent,
    findById,
    createStudent

} = studentSlice.actions;

export default studentSlice.reducer;