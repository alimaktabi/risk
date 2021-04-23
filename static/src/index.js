import React from "react";
import ReactDOM from 'react-dom'
import "./styles.sass"
import Header from "./components/Header";
import Intro from "./components/test/Intro";
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';

const inputData = [
    {
        label: 'نام',
        name: 'first_name',
        type: 'text'
    },
    {
        label: 'نام خانوادگی',
        name: 'last_name',
        type: 'text'
    },
    {
        label: 'کد ملی',
        name: 'national_code',
        type: 'number'
    },
    {
        label: 'سن',
        name: 'age',
        type: 'number'
    },
    {
        label: 'Fecal Calprotectine',
        name: 'FC',
        type: 'number'
    },
    {
        label: 'Number of previous relapses',
        name: 'NPR',
        type: 'number'
    },
    {
        label: 'Bowel Movement',
        name: 'ofBM',
        type: 'number'
    },
    {
        label: 'No.of bloody stool/day',
        name: 'BS',
        type: 'number'
    },
    {
        label: 'Erythrocyt Sedimentation Rate',
        name: 'ESR',
        type: 'number'
    },
    {
        label: 'Hemoglobin',
        name: 'HB',
        type: 'number'
    },
    {
        label: 'Albumin (serum, mg/ dl)',
        name: 'ALB',
        type: 'number'
    }
];

const formGroup = (row, key) => {
    return (
        <div
            key={key}
            className="form-group">
            <label className="form-check-label">
                {row.label}:
                <input
                    name={row.name}
                    type={row.type}
                    className="form-control"
                />
            </label>
        </div>
    )
};

const Submit = (e) => {
    e.preventDefault();
    let formData = new FormData(document.getElementById('form_data'));
    let data;
    // try {
    //     data = await axios.post('/api/record', formData);
    // } catch (e) {
    //     console.log(e);
    // }
    axios.post('/api/record', formData).then((res) => {
        console.log(res);
    }).catch(e => {
        console.log(e);
    })
};

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Intro />
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="card">
                                <div className="card-header">
                                    <h5>
                                        فرم آنلاین
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <form
                                        id="form_data"
                                        onSubmit={Submit}
                                        method="POST">
                                        {
                                            inputData.map(formGroup)
                                        }
                                        <button
                                            type="submit"
                                            className="mt-3 btn btn-success w-100">
                                            بررسی کارنامه
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    )
}


ReactDOM.render(<App/>, document.getElementById('root'));




