// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { Link } from "react-router-dom";
// import StudentService from "../../service/Service";
// import { NavLink } from 'react-router-dom';

// const TourDetail = () => {
//     const { tourId } = useParams()
//     const [tourDetail, setTourDetail] = useState({})
//     const [stuList, setStuList] = useState([])
//     const [loading, setLoading] = useState(false);
//     const [infor, setInfor] = useState({})


//     useEffect(() => {
//         try {
//             setLoading(true)
//             async function getTours() {
//                 let response = await StudentService.getTours();
//                 setStuList(response.data);

//                 setLoading(false)
//             }
//             getTours();
//         } catch (error) {
//         }
//     }, [])


//     return (
//         <div className="container d-flex justify-content-center">
//             <div className="row col-md-4 rounded mt-5" id="formAddStudent">
//                 <h2 className="text-primary text-center mt-4">Edit Customer</h2>
//                 <form >

//                     <div className="form-group mb-3 ">
//                         <label className="label-form">FullName</label>
//                         <input type="text" name="" id=""
//                             defaultValue={infor.FullName} />
//                         <span className="invalid-feedback" ></span>
//                     </div>

//                     <div className="form-group mb-3 ">
//                         <label className="label-form">Age</label>
//                         <input type="number" name="" id=""
//                            defaultValue={infor.Age} />
//                         <span className="invalid-feedback"></span>
//                     </div>

//                     <div className="form-group mb-3 ">
//                         <label className="label-form">Gender</label>
//                         <select type="text" name="" id=""
//                              defaultValue={infor.Gender}>
//                             <option value="male">Male</option>
//                             <option value="female">Female</option>
//                         </select>

//                         <span className="invalid-feedback"></span>
//                     </div>

//                     <div className="form-group mb-3 ">
//                         <label className="label-form">Phone</label>
//                         <input type="text" name="" id=""
//                             defaultValue={infor.Phone} />
//                         <span className="invalid-feedback"></span>
//                     </div>

//                     <div className="form-group mb-3 ">
//                         <label className="label-form">Address</label>
//                         <textarea type="text" name="" id=""
//                            defaultValue={infor.Address} />
//                         <span className="invalid-feedback"></span>
//                     </div>

//                     <div className="form-group mb-3 ">
//                         <label className="label-form">Email</label>
//                         <input type="text" name="" id=""
//                              defaultValue={infor.Email} />
//                         <span className="invalid-feedback"></span>
//                     </div>

//                     <div className="d-flex justify-content-center mb-3">
//                         <NavLink className="btn btn-warning me-3" to={'/student'}>Back</NavLink>
//                         <button type="submit" className="btn btn-danger me-3">Update</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     )
// }
// export default TourDetail