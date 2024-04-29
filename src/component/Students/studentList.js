import { Breadcrumb, BreadcrumbItem } from "react-bootstrap"
import { Table } from "../Components/Table"

export const StudentList = () => {

    return (
        <main id="main" class="main">
           <div class="pagetitle">
                <h1>Dashboard</h1>
                <nav>
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li class="breadcrumb-item active">Dashboard</li>
                </ol>
                </nav>
            </div>
            <Table />
        </main>
       
    )
}