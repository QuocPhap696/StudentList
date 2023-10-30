/* eslint-disable no-dupe-class-members */
// import axios from "axios";
import axios from 'axios';
import { STUDENT_API } from '../constants/global';

// class StudentService {

//     static getTours() {
//         return axios.get(`https://6506a9ac3a38daf4803e93d3.mockapi.io/customer`);
//     }


//     static getToursId(id) {
//         return axios.get(`https://6506a9ac3a38daf4803e93d3.mockapi.io/customer/${id}`);
//     }

//     static getTourEdit(id) {
//         return axios.get(`https://6506a9ac3a38daf4803e93d3.mockapi.io/customer/${id}`);
//     }



//     static postTour(data) {
//         return axios.post('https://6506a9ac3a38daf4803e93d3.mockapi.io/customer', data);
//     }



//     static editTours(id, data) {
//         return axios.put(`https://6506a9ac3a38daf4803e93d3.mockapi.io/customer/${id}`, data)
//     }


//     static deleteStu(id) {
//         return axios.delete(`https://6506a9ac3a38daf4803e93d3.mockapi.io/customer/${id}`)
//     }

// }

// class StudentService = {
//     getAll: () => {
//         return axios.get(STUDENT_API);
//     },
//     getStudentById: (id) => {
//         return axios.get(STUDENT_API + '/' + id);
//     },
//     create: (data) => {
//         return axios.post(STUDENT_API, data);
//     },
//     update: (data) => {
//         return axios.patch(STUDENT_API + '/' + data.id, data);
//     },
// };
// export default StudentService;

class StudentService {
    static getAll() {
        return axios.get(STUDENT_API);
    }

    static getSearch(search) {
        return axios.get(STUDENT_API + `?search=${search}`)
    }

    static getById(id) {
        return axios.get(STUDENT_API + '/' + id);
    }

    static create(data) {
        return axios.post(STUDENT_API, data);
    }

    static update(id, data) {
        console.log(data)
        return axios.put(STUDENT_API + `/${id}`, data);
    }
    static delete(id) {
        return axios.delete(STUDENT_API + '/' + id)
    }

    static
}

export default StudentService;
