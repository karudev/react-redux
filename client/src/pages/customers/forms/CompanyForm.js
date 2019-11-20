import React from 'react';

export class CompanyForm extends React.Component{


    render(){


        return (
            <div>


                    <div className="form-group col-md-12">
                        <h3>Informations</h3>
                    </div>
                    <div className="form-group  row col-md-12">
                        <div className="col-md-6 ">
                            <input className={"form-control"} placeholder={"Siret"}/>
                        </div>
                    </div>

            </div>

        )
    }
}

