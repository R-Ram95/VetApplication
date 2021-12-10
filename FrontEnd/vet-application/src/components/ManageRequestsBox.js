import React, {useState} from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios";
import getUser from "../components/GetUser";
// import '../Customization/LoginCard.css'

const ManageRequestsBox = (props) => {
    const [request, setRequest] = useState(props.request)

    const approveRequest = () =>{
        
        const user = getUser()
        const userRole = user.role
        let approveMsg = ""

        if(userRole == 'ROLE_ADMIN'){
            approveMsg = "approved_by_admin"
        }else{
            approveMsg = "approved"
        }

        const newRequest = {
            requestid: request.requestid,
            animalid: request.animalid, 
            teacherid:request.teacherid,
            status:approveMsg
        }

        axios.put("http://localhost:8080/request", newRequest)
            .then((res)=> setRequest(res.data));

    } 

    const rejectRequest = () =>{
        
        const user = getUser()
        const userRole = user.role


        const newRequest = {
            requestid: request.requestid,
            animalid: request.animalid, 
            teacherid:request.teacherid,
            status:"rejected"
        }

        axios.put("http://localhost:8080/request", newRequest)
            .then((res)=> setRequest(res.data));

    } 

    return (

        <div className = "columns has-text-centered mb-6">
            
             <div class="card column has-text-centered">
                <div>
                
                
                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-third">
                            <div className = "columns">
                                {/* <div className = "column is-one-half">
                                    <label className = "checkbox has-text-primary-dark has-text-weight-bold is-size-4"> Name </label>
                                </div> */}
                                <div className = "column is-one-half">
                                    <label className = "checkbox has-text-primary-dark has-text-weight-bold is-size-4">ID</label>
                                </div>
                            </div>
                        </div> 
                        <div className = "column is-one-third">
                        <label className = "checkbox has-text-primary-dark has-text-weight-bold is-size-4">Status</label>
                        </div>
                        <div className = "column is-one-third">
                        <label className = "checkbox has-text-primary-dark has-text-weight-bold is-size-4">Requests</label>
                        </div>      
                    </div>
                </div>

                <div className="control">
                    <div className = "columns is-centered is-vcentered">
                        <div className = "column is-one-third">
                            <div className = "columns">
                                {/* <div className = "column is-one-half">
                                    <label className = "checkbox has-text-primary-dark">Animal 1 </label>
                                </div> */}
                                <div className = "column is-one-half">
                                    <label className = "checkbox has-text-primary-dark">{request.animalid}</label>
                                </div>
                            </div>
                        </div> 
                        <div className = "column is-one-third">
                            <input class="input is-small is-primary is-rounded has-text-centered" type="text" placeholder={request.status} disabled  />
                        </div>
                        <div className = "column is-one-third">
                            <div className = "columns">
                                <div className = "column is-one-half">
                                    <button className= "button has-text-weight-bold has-text-primary-dark is-rounded" onClick={approveRequest} >Approve</button> 
                                </div>
                                <div className = "column is-one-half">
                                <button className= "button has-text-weight-bold has-text-primary-dark is-rounded"onClick={rejectRequest} >Deny</button> 
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>

                {/* <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-third">
                            <div className = "columns">
                                <div className = "column is-one-half">
                                    <label className = "checkbox has-text-primary-dark">Animal 1 </label>
                                </div>
                                <div className = "column is-one-half">
                                    <label className = "checkbox has-text-primary-dark">Animal ID1</label>
                                </div>
                            </div>
                        </div> 
                        <div className = "column is-one-third">
                                <input class="input is-small is-primary is-rounded" type="text" placeholder="New" disabled  />
                        </div>
                        <div className = "column is-one-third">
                            <div className = "columns">
                                <div className = "column is-one-half">
                                    <button className= "button has-text-weight-bold has-text-primary-dark is-rounded" >Approve</button> 
                                </div>
                                <div className = "column is-one-half">
                                <button className= "button has-text-weight-bold has-text-primary-dark is-rounded" >Deny</button> 
                                </div>
                            </div>
                        </div>


                </div>
                </div>
                <div className="control">
                    <div className = "columns is-centered">
                        <div className = "column is-one-third">
                            <div className = "columns">
                                <div className = "column is-one-half">
                                    <label className = "checkbox has-text-primary-dark">Animal 1 </label>
                                </div>
                                <div className = "column is-one-half">
                                    <label className = "checkbox has-text-primary-dark">Animal ID1</label>
                                </div>
                            </div>
                        </div> 
                        <div className = "column is-one-third">
                            <input class="input is-small is-primary is-rounded" type="text" placeholder="New" disabled  />
                        </div>
                        <div className = "column is-one-third">
                            <div className = "columns">
                                <div className = "column is-one-half">
                                    <button className= "button has-text-weight-bold has-text-primary-dark is-rounded" >Approve</button> 
                                </div>
                                <div className = "column is-one-half">
                                <button className= "button has-text-weight-bold has-text-primary-dark is-rounded" >Deny</button> 
                                </div>
                            </div>
                        </div>
                    </div>
                
                </div> */}
            </div>
        </div>
        </div>

      );
}
 
export default ManageRequestsBox;