import React from 'react';
import DataTable from 'react-data-table-component';
import { Link } from 'react-router-dom';

export default class CustomersList extends React.Component{

    componentWillMount() {

        // Récupérer le listing avant le montage du component
        const data = [
            { id: 1, firstname: 'Dolyveen', lastname: 'Renault', email: 'd.renault@karudev-informatique.fr', },
            { id: 2, firstname: 'Dolyveen2', lastname: 'Renault2', email: 'd.renault2@karudev-informatique.fr' },
        ];



        this.setState({data : data})
    }

    render(){

        const columns = [
            {
                name: 'Firstname',
                selector: 'firstname',
                sortable: true,
            },
            {
                name: 'Lastname',
                selector: 'lastname',
                sortable: true,
            },
            {
                name: 'Email',
                selector: 'email',
                sortable: true,
            },
           /* {
                header: '',
                id: 'links',
                name: 'Action',
                cell: ({ row }) => (<Link to={"/customers/form"} className="nav-link"><button className={"btn btn-info"}>Modifier</button></Link>)
            },*/
        ];

        const {data} = this.state;

        return (
                <div>

                    <div className={"row form-group"}>
                        <Link to={'/customers/form'} className="nav-link"><button className={"btn btn-info"}>Nouveau client</button></Link>

                    </div>
                    <div className={"row form-group"}>
                        <DataTable
                            title="Liste des clients"
                            columns={columns}
                            data={data}
                        />
                    </div>

                </div>

        )
    }
}

