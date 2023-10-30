// import { Col, Row, Input, Typography, Radio, Select, Tag } from 'antd';
// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import FiltersSlice from './FiltersSlice';


// const {Search} = Input;
// export default function Filters() {
//     const dispatch = useDispatch();

//     const [searchText, setSearchText] = useState('');

//     const handleSearchTextChange = (e) => {
//         setSearchText(e.target.value);
//         dispatch(FiltersSlice.actions.searchFilterChange(e.target.value))
//     }
//     return(
//         <Row>
//         <Col span={24}>
//             <Typography.Paragraph
//               style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}
//             >
//               Search
//             </Typography.Paragraph>
//             <Search placeholder='input search text' value={searchText} onChange={handleSearchTextChange} />
//           </Col>
          
//         </Row>
//         )
// }

