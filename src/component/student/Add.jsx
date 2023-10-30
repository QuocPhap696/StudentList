import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react"
import { useForm } from "react-hook-form";
import * as yup from "yup"
// import StudentService from "../../service/StudentService";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import swal from "sweetalert";
import { useDispatch } from 'react-redux';
import { fetchCreateStudent } from "../../redux/studentSlice";


const createSchema = yup.object({
    FullName: yup.string()
        .required("Vui Lòng Nhập Họ Tên")
        .max(100, "Tên Phải Ít Hơn 100 Kí Tự "),
    Age: yup.number()
        .required("Vui Lòng Nhập Tuổi")
        .positive("Không được là số âm và lớn hơn 0")
        .max(100, "Tuổi Không Được Lớn Hơn 100")
        .typeError("Vui Lòng Nhập Tuổi"),
    Phone: yup.string() 
        .required("Nhập SDT")
        .matches(/^\d{0,12}$/, { message: 'Số điện thoại phải có tối đa 12 kí tự và bắt đầu từ số 0' })
        .min(10, "SDT ít nhất 10 kí tự và bắt đầu từ số 0")
        .typeError("Vui lòng nhập SDT"),
    Address: yup.string()
        .required("Vui Lòng Nhập Địa Chỉ")
        .max(100, "Thông Tin Phải Ít Hơn 100 Kí Tự "),
    Email: yup.string()
        .required("Vui Lòng Nhập Email")
        .max(50, "Email Phải Ít Hơn 50 Kí Tự "),

})

const Add = () => {
    const [create, setCreate] = useState({})
    const back = useNavigate();
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(createSchema)
    });

    // const createStu = async (value) => {
    //     console.log(setCreate);
    //     try {
    //         await StudentService.create(value)
    //         setCreate(value);
    //         swal({
    //             position: 'top-end',
    //             icon: 'success',
    //             title: 'Tạo mới thành công',
    //             showConfirmButton: false,
    //             timer: 1000
    //         })
    //         reset();
    //         back("/");
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const createStudent = async (data) => {
        try {
            dispatch(fetchCreateStudent(data));
            reset();
            swal({
                position: 'top-end',
                icon: 'success',
                title: 'Tạo mới thành công',
                showConfirmButton: false,
                timer: 1000
            })
            back("/");
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container d-flex justify-content-center">
            <div className="row mt-3 mb-3" id="formAddStudent">
                <h2 className="text-warning text-center mt-2" style={{ backgroundColor: "#efefef" }}>Create Student</h2>
                <form onSubmit={handleSubmit(createStudent)}>
                    <div className="text">
                        <div className="row mt-3 mb-3 ">
                            <div className="form-group col-lg-6 ">
                                <label className="label-form fw-bold">FullName</label>
                                <input type="text" name="" id=""
                                    className={`${errors?.FullName?.message ? 'form-control is-invalid' : 'form-control'}`}
                                    {...register('FullName')} defaultValue={create.FullName} />
                                <span className="invalid-feedback" >{errors?.FullName?.message}</span>
                            </div>
                            <div className="form-group col-lg-6 ">
                                <label className="label-form fw-bold">Age</label>
                                <input type="number" name="" id=""
                                    className={`${errors?.Age?.message ? 'form-control is-invalid' : 'form-control'}`}
                                    {...register('Age')} defaultValue={create.Age} />
                                <span className="invalid-feedback">{errors?.Age?.message}</span>
                            </div>
                        </div>

                        <div className="row mt-3 mb-3">
                            <div className="form-group col-lg-6 ">
                                <label className="label-form fw-bold">Gender</label>
                                <select type="text" name="" id=""
                                    className={`${errors?.Gender?.message ? 'form-control is-invalid' : 'form-control'}`}
                                    {...register('Gender')} defaultValue={create.Gender}>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                                <span className="invalid-feedback">{errors?.Gender?.message}</span>
                            </div>

                            <div className="form-group col-lg-6 ">
                                <label className="label-form fw-bold">Phone</label>
                                <input type="number" name="" id=""
                                    className={`${errors?.Phone?.message ? 'form-control is-invalid' : 'form-control'}`}
                                    {...register('Phone')} defaultValue={create.Phone} />
                                <span className="invalid-feedback">{errors?.Phone?.message}</span>
                            </div>
                        </div>


                        <div className="row mt-3 mb-3">
                            <div className="form-group col-lg-6 ">
                                <label className="label-form fw-bold">Address</label>
                                <textarea type="text" name="" id=""
                                    className={`${errors?.Address?.message ? 'form-control is-invalid' : 'form-control'}`}
                                    {...register('Address')} defaultValue={create.Address} />
                                <span className="invalid-feedback">{errors?.Address?.message}</span>
                            </div>

                            <div className="form-group col-lg-6  ">
                                <label className="label-form fw-bold">Email</label>
                                <input type="email" name="" id="email"
                                    className={`${errors?.Email?.message ? 'form-control is-invalid' : 'form-control'}`}
                                    {...register('Email')} defaultValue={create.Email} />
                                <span className="invalid-feedback">{errors?.Email?.message}</span>
                            </div>
                        </div>
                    </div>


                    <div className="d-flex justify-content-center mb-3">
                        <NavLink className="btn btn-warning me-3" to={'/'}>Back</NavLink>
                        <button type="submit" className="btn btn-success me-3">Create</button>
                        <button type="button" className="btn btn-danger"
                            onClick={() => reset()}>Cancel</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Add
