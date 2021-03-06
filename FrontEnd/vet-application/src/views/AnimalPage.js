import React, {useState} from "react";
import SideBar from "../components/SideBar";
import Header from "../components/Header";
import AnimalCard from "../components/AnimalCard";
import TreatmentCard from "../components/TreatmentCard";
import CommentCard from "../components/CommentCard";
import PictureCard from "../components/PictureCard";
import WeightHistoryModal from "../components/WeightHistoryModal";
import TreatmentHistoryModal from "../components/TreatmentHistoryModal";
import CreateCommentModal from "../components/CreateCommentModal";
import NewPictureModal from "../components/NewPictureModal";
import RequestTreatmentModal from "../components/RequestTreatmentModal";
import EditAccount from "../components/EditAccount";
import ChangePasswordModal from "../components/ChangePasswordModal";
import { useLocation } from "react-router-dom";
import PrescriptionCard from "../components/PrescriptionCard";
import NewPrescriptionModal from "../components/NewPrescriptionModal";
import StatusCard from "../components/StatusCard";
import UpdateStatusModal from "../components/UpdateStatusModal";
import StudentCommentCard from "../components/StudentCommentCard";
import CreateStudentCommentModal from "../components/CreateStudentCommentModal";


const AnimalPage = () => {


    const [pic, setPic] = useState([]);

    const setThePic = (pic) => {
        setPic(pic);
    }
        
    const location = useLocation();
    const animal = location.state.animal

    const role = sessionStorage.getItem('role')

    const changePasswordModal = () => {
        document.getElementById('ChangePasswordModal').classList.add('is-active');
    }

    const editAccountModal = () => {
        document.getElementById('EditAccount').classList.add('is-active');
    }
   
    const weightModal = () => {
        document.getElementById("WeightModal").classList.add('is-active')
    }

    const treatementHistory = () => {
        document.getElementById("TreatmentHistory").classList.add('is-active')
    }

    const newCommentModal = () => {
        document.getElementById("NewComment").classList.add('is-active')
    }

    const newSCommentModal = () => {
        document.getElementById("NewSComment").classList.add('is-active')
    }

    const newPictureModal = () => {
        document.getElementById("NewPicture").classList.add('is-active')
    }

    const newTreatmentModal = () => {
        document.getElementById("TreatmentModal").classList.add('is-active')
    }

    const newPrescriptionModal = () => {
        document.getElementById("NewPrescription").classList.add('is-active')
    }

    const updateStatusModal = () => {
        document.getElementById("StatusModal").classList.add('is-active')
    }

    return(
        <div className="columns">
            <WeightHistoryModal animal={animal}/>
            <TreatmentHistoryModal animal={animal}/>
            <CreateCommentModal animal= {animal}/>
            <CreateStudentCommentModal animal={animal}/>
            <NewPictureModal animal = {animal} picture = {setPic}/>
            <RequestTreatmentModal animal= {animal}/>
            <NewPrescriptionModal animal = {animal}/>
            <UpdateStatusModal animal = {animal}/>
            <SideBar/>
            <ChangePasswordModal/>
            <EditAccount/>
            <div className="column">
                <Header changePassword = {changePasswordModal} editAccount = {editAccountModal} />
                <AnimalCard animal = {animal} weightModal = {weightModal}/>
                <StatusCard animal={animal} updateStatusModal={updateStatusModal}/>
                <TreatmentCard animal={animal} treatmentHistory={treatementHistory} newTreatment = {newTreatmentModal}/>
                {role!="Student" 
                    ?<CommentCard animal= {animal} newCommentModal={newCommentModal}/>
                    :<StudentCommentCard animal= {animal} newSCommentModal={newSCommentModal}/>
                }
                {role==="Teaching Technician"
                    ?<StudentCommentCard animal= {animal} newSCommentModal={newSCommentModal}/>
                    :<div/>
                }
                <PrescriptionCard animal={animal} newPrescriptionModal = {newPrescriptionModal}/>
                <PictureCard animal={animal} newPictureModal = {newPictureModal}/>
                
            </div>
        </div>
    )
};

export default AnimalPage;