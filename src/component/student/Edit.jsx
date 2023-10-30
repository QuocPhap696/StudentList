import { yupResolver } from "@hookform/resolvers/yup"
import { useEffect, useState } from "react"
import * as yup from "yup"
import { useNavigate, useParams } from "react-router-dom";
import StudentService from "../../service/StudentService";
import swal from "sweetalert";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch } from 'react-redux';
import { fetchUpdateStudent } from '../../redux/studentSlice';

const editSchema = yup.object({
    FullName: yup.string()
        .required("Vui Lòng Nhập Họ Tên")
        .max(100, "Tên Phải Ít Hơn 100 Kí Tự "),
    Age: yup.number()
        .required("Vui Lòng Nhập Tuổi")
        .positive()
        .max(100, "Tuổi Không Được Lớn Hơn 100")
        .typeError("Vui Lòng Nhập Tuổi"),
    Phone: yup.number()
        .typeError("Vui Lòng Nhập Số")
        .test({
            message: "SDT nhỏ hơn 12 kí tự",
            test: (val) => {
                if (val) {
                    return val.toString().length < 12;
                }
                return true;
            },
        }),
    Address: yup.string()
        .required("Vui Lòng Nhập Địa Chỉ")
        .max(100, "Thông Tin Phải Ít Hơn 100 Kí Tự "),
    Email: yup.string()
        .required("Vui Lòng Nhập Email")
        .max(50, "Email Phải Ít Hơn 50 Kí Tự "),

})


const Edit = () => {
    const { cusId } = useParams();
    const students = useSelector((state) => state.student.data)
    const [student, setStudent] = useState({})
    const back = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            async function getStudent() {
                let respo = await StudentService.getById(cusId);
                setStudent(respo.data)

            }
            getStudent()
        } catch (error) {
            console.log(error);
        }
    }, [cusId])

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(editSchema),
        values: setStudent
    });

    const editStudent = async (data) => {
        try {
            // await StudentService.update(student);
            console.log(data);
            // setStudent(data);
            dispatch(fetchUpdateStudent({...data, cusId}))
            reset();
            swal("Chỉnh sửa thành công", "success");
            back("/")
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container d-flex justify-content-center">
            <div className="row mt-3 mb-3" id="formAddStudent">
                <h2 className="text-primary text-center mt-4">Edit Student</h2>
                <form onSubmit={handleSubmit(editStudent)}>
                <div className="text-success">
                    <div className="row mt-3 mb-3">
                        <div className="form-group col-lg-6 ">
                            <label className="label-form ">FullName</label>
                            <input type="text" name="" id=""
                                className={`${errors?.FullName?.message ? 'form-control is-invalid' : 'form-control'}`}
                                {...register('FullName')} defaultValue={student.FullName} />
                            <span className="invalid-feedback" >{errors?.FullName?.message}</span>
                        </div>
                        <div className="form-group col-lg-6 ">
                            <label className="label-form">Age</label>
                            <input type="number" name="" id=""
                                className={`${errors?.Age?.message ? 'form-control is-invalid' : 'form-control'}`}
                                {...register('Age')} defaultValue={student.Age} />
                            <span className="invalid-feedback">{errors?.Age?.message}</span>
                        </div>
                    </div>

                    <div className="row mt-3 mb-3">
                        <div className="form-group col-lg-6 ">
                            <label className="label-form">Gender</label>
                            <select type="text" name="" id=""
                                className={`${errors?.Gender?.message ? 'form-control is-invalid' : 'form-control'}`}
                                {...register('Gender')} defaultValue={student.Gender}>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            <span className="invalid-feedback">{errors?.Gender?.message}</span>
                        </div>

                        <div className="form-group col-lg-6 ">
                            <label className="label-form">Phone</label>
                            <input type="text" name="" id=""
                                className={`${errors?.Phone?.message ? 'form-control is-invalid' : 'form-control'}`}
                                {...register('Phone')} defaultValue={student.Phone} />
                            <span className="invalid-feedback">{errors?.Phone?.message}</span>
                        </div>
                    </div>

                    <div className="row mt-3 mb-3">
                        <div className="form-group col-lg-6 ">
                            <label className="label-form">Address</label>
                            <textarea type="text" name="" id=""
                                className={`${errors?.address?.message ? 'form-control is-invalid' : 'form-control'}`}
                                {...register('Address')} defaultValue={student.Address} />
                            <span className="invalid-feedback">{errors?.Address?.message}</span>
                        </div>

                        <div className="form-group col-lg-6  ">
                            <label className="label-form">Email</label>
                            <input type="text" name="" id="email"
                                className={`${errors?.email?.message ? 'form-control is-invalid' : 'form-control'}`}
                                {...register('Email')} defaultValue={student.Email} />
                            <span className="invalid-feedback">{errors?.Email?.message}</span>
                        </div>
                    </div>
                    </div>
                    <div className="d-flex justify-content-center mb-3">
                        <NavLink className="btn btn-warning me-3" to={'/'}>Back</NavLink>
                        <button type="submit" className="btn btn-success me-3">Update</button>
                    </div>
                </form>

            </div>
        </div>
    )
}

export default Edit