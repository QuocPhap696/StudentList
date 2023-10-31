// import StudentService from "../../service/StudentService";
import { NavLink, useNavigate, useSearchParams } from 'react-router-dom';
import Spinner from '../layout/Spinner';
import { useEffect, useState } from "react";
import swal from 'sweetalert';
import { React } from 'react';
import Detail from './Detail'
// import { Col, Input, Typography } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDeleteStudent, fetchSearchStudent, searchFilterChange } from "../../redux/studentSlice";


const StudentList = () => {
    // const [stuList, setStuList] = useState([])
    // const [currentPage, setCurrentPage] = useState(1);
    // const [totalPage, setTotalPage] = useState(0);
    // const [action, setAction] = useState('next');
    const [loading, setLoading] = useState(false);
    const [idTour, setIdTour] = useState();

    const stuList = useSelector((state) => state.student.data)
    const [searchParams, setSearchParams] = useSearchParams();
    const back = useNavigate()

    const [selectedStudent, setSelectedStudent] = useState(null);
    const dispatch = useDispatch();
    const search = useSelector((state) => state.student.search)
    // const [searchText, setSearchText] = useState('');


    useEffect(() => {
        const timeout = setTimeout(() => {
            const action = fetchSearchStudent(search)
            dispatch(action)
        }, 300)
        return () => clearTimeout(timeout)
    }, [search])

    const deleteStu = (stu, id) => {
        try {
            swal({
                title: "Cảnh Báo!!",
                text: "Bạn Chắc Chắn Muốn Xóa " + stu + " Khỏi Danh Sách",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            }).then(async (del) => {
                if (del) {
                    const action = await fetchDeleteStudent(id)
                    dispatch(action)
                    // await StudentService.delete(id);
                    swal("Thông Báo", "Xóa Thành Công " + stu + " Khỏi Danh Sách", "success");
                    back('')
                    // setStuList((preList) => preList.filter((stu) => stu.id !== id));
                } else {
                    
                }
            });
        } catch (error) { }
    };

    const handleSearchTextChange = (e) => {
        const action = searchFilterChange(e.target.value);
        dispatch(action);
    }


    return (
        loading ? <Spinner /> :

            <div className="container mt-3">
                {idTour && <Detail id={idTour} />}
                <h2 className="text-danger text-center mt-4" style={{ backgroundColor: "#efefef" }}> Student List</h2>
                <div>
                    <nav className="navbar navbar-light bg-light">
                        <div style={{ padding: "0 0 20px 20px" }}>
                            <button className="btn btn-sm btn-primary mt-4" style={{}}>
                                <NavLink className="nav-link " style={{ color: "white" }} to={'/student/create'}>
                                    <i className="fa fa-plus me-2" />
                                    Create
                                </NavLink>
                            </button>
                        </div>

                        <div>
                            <div className="container-fluid">
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search"
                                        placeholder="Search" aria-label="Search"
                                        onChange={(e) => handleSearchTextChange(e)}
                                        value={search} />
                                </form>
                            </div>
                            </div>
                    </nav>

                </div>
                <section className="mt-4 ">
                    <table className="table table-hover ">
                        <thead >
                            <tr >
                                <th>#</th>
                                <th>FullName</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Address</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                stuList.length && stuList.map((student) => (
                                    <tr key={student.id}>
                                        <td>{student.id}</td>
                                        <td>{student.FullName}</td>
                                        <td>{student.Age}</td>
                                        <td>{student.Gender}</td>
                                        <td>{student.Phone}</td>
                                        <td>{student.Email}</td>
                                        <td>{student.Address}</td>

                                        <td>
                                            <NavLink to={`/student/edit/${student.id}`}>
                                                <i role="button" className="fa fa-pen me-3 btn btn-success" />
                                            </NavLink>
                                            <i role="button" className="fa fa-trash me-3 btn btn-danger"
                                                onClick={() => deleteStu(student.FullName, student.id)} />

                                            <i
                                                role="button"
                                                className="fa fa-circle-info me-1 btn btn-warning"
                                                data-bs-toggle="modal"  // Chú thích 1: Thêm data-bs-toggle
                                                data-bs-target="#studentInfoModal"  // Chú thích 2: Thêm data-bs-target với giá trị là id của modal
                                                onClick={() => setSelectedStudent(student)}
                                            />

                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    
                    {/* <nav aria-label="...">
                        <ul className="pagination">
                            <li className="page-item disabled">
                                <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">1</a></li>
                            <li className="page-item active" aria-current="page">
                                <a className="page-link" href="#">2</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item">
                                <a className="page-link" href="#">Next</a>
                            </li>
                        </ul>
                    </nav> */}
                </section>

                {/* Modal hiển thị thông tin học sinh */}
                <div className="modal fade " id="studentInfoModal" tabIndex="-1" role="dialog" aria-labelledby="studentInfoModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content ">
                            <div className="modal-header btn btn-warning">
                                <h5 className="modal-title " id="studentInfoModalLabel">Student Information</h5>
                            </div>
                            <div className="modal-body">
                                {selectedStudent && (
                                    <tr>
                                        <li>Full Name: {selectedStudent.FullName}</li>
                                        <li>Age: {selectedStudent.Age}</li>
                                        <li>Gender: {selectedStudent.Gender}</li>
                                        <li>Phone: {selectedStudent.Phone}</li>
                                        <li>Address: {selectedStudent.Address}</li>
                                        <li>Email: {selectedStudent.Email}</li>
                                    </tr>
                                )}
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary btn btn-warning"
                                    data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
    )

}

export default StudentList