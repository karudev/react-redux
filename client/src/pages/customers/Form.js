import React from 'react';
import {APIConfig} from './../../constants/ApiConfig';
import {CompanyForm} from './forms/CompanyForm';


export default class CustomersForm extends React.Component{

    constructor(){
        super();
        this.state = {
            type : "person",
            lastname : "",
            firstname : "",
            email : "",
            phone : "",
            company : 3,
            referents : [
                {id: 1, name: "Dolyveen Renault"},
                {id: 2, name: "Olivier Brassart"},
                {id: 3, name: "Arnaud Dumoulin"}
            ],
            referentsList : [
                {id: 4, name: "Référent 4"},
                {id: 5, name: "Référent 5"},
                {id: 6, name: "Référent 6"}
            ],
            companyList : [
                {id: 1, name: "Société 1"},
                {id: 2, name: "Société 2"},
                {id: 3, name: "Société 3"}
            ],
            message : ""
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {

        var value = e.target.value;
        var type = e.target.getAttribute('data-type');

        this.setState({[type] : value},() => {
            console.log(this.state);
        });


    }
    onSubmit(e){

        e.preventDefault();

        const that = this;
        let {firstname, lastname} = this.state;


        fetch(APIConfig.API_BASE+'/people',{
            method : "POST",
            headers: APIConfig.HEADERS,
            body : JSON.stringify({
                firstname : firstname,
                lastname : lastname
            })
        }).then(function(response) {

            let data = response.json();


            if(response.status === 201){


                    that.setState({firstname : "", lastname : "", message : ""},() => {
                        console.log(that.state);
                    });
            }else{
                that.setState({message : "Erreur"},() => {
                    console.log(that.state);
                });
            }

        })
            .catch((error) => {
                that.setState({message : "Api indisponible"},() => {
                    console.log(that.state);
                });
            console.log(error);
        });

    }


    changeType(type){
        this.setState({type : type})
    }

    render(){

        const {
            type,
            lastname,
            firstname,
            email,
            phone,
            referents,
            referentsList,
            message,
            company,
            companyList,
        } = this.state;
        return (
            <div>

                <form onSubmit={this.onSubmit}>


                    <div className="form-group row col-md-12">
                        <div className="col-md-6 text-right">
                            <button onClick={() => this.changeType("company")} className={"btn btn-primary"}>Personne morale</button>
                        </div>
                        <div className="col-md-6">
                            <button onClick={() => this.changeType("person")} className={"btn btn-primary"}>Personne physique</button>
                        </div>
                    </div>


                    { type === "company" ? <CompanyForm /> :
                        (
                            <div>
                                <div className="form-group col-md-12">
                                    <h3>Identité</h3>
                                </div>
                                <div className="form-group row col-md-12">
                                    <div className="col-md-6">
                                        <input required={true} className={"form-control"} onChange={this.onChange} data-type="lastname" value={lastname} placeholder={"Nom"}/>
                                    </div>
                                    <div className="col-md-6">
                                        <input required={true}  className={"form-control"} onChange={this.onChange} data-type="firstname" value={firstname}  placeholder={"Prénom"}/>
                                    </div>
                                </div>
                                <div className="form-group row col-md-12">
                                    <div className="col-md-6">
                                        <input required={true} type={"email"} className={"form-control"} onChange={this.onChange} data-type="email" value={email}  placeholder={"Email"}/>
                                    </div>
                                    <div className="col-md-6">
                                        <input required={true}  className={"form-control"} onChange={this.onChange} data-type="phone" value={phone}  placeholder={"Téléphone"}/>
                                    </div>
                                </div>

                                <div className="form-group col-md-12">
                                    <h3>Société</h3>
                                </div>
                                <div className="form-group row col-md-12">
                                    <div className="col-md-6">
                                        <select value={company} className={"form-control"}>
                                            {companyList.map((company) => (
                                                <option value={company.id}>{company.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group col-md-12">
                                    <h3>Référents</h3>
                                    <div className="form-group col-md-12">
                                        {referents.map((referent) => (
                                            <span className="badge badge-info">
                                    {referent.name} <span>X</span>
                                </span>
                                        ) )}

                                    </div>
                                    <div className="form-group col-md-12">

                                        <div className="form-group col-md-4">
                                            <select className={"form-control"}>
                                                {referentsList.map((referent) => (
                                                    <option value={referent.id}>{referent.name}</option>
                                                ))}
                                            </select>
                                            <span className="badge badge-success">
                               +
                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )


                    }




                    <div className="form-group col-md-12">
                        {message}
                    </div>
                    <div className="form-group col-md-12">
                        <button  className={"btn btn-success"} >Enregistrer</button>
                    </div>
                </form>

            </div>

        )
    }
}

