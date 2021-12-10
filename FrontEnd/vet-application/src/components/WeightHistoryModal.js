import { useEffect, useState } from "react"
import weightData from "../data/weightData"

const WeightHistoryModal = ({id}) => {


    const modalClose = () => {
        document.getElementById('WeightModal').classList.remove('is-active');
        document.querySelector('#newWeight').value = ''
    }

    const Row = ({weight}) => {
        
        return(
            <tr>
                <th className="has-text-primary-dark">{weight.date}</th>
                <td className="has-text-centered has-text-primary">{weight.weight} kg</td>
            </tr>
        )
    }

    function addWeight(){
        let newWeight = document.querySelector('#newWeight').value
        setWeights([...weightData, {date:"newDate2", weight: newWeight}])
        console.log(newWeight)
        console.log(weights)
    }

    const [weights, setWeights] = useState([]);

    useEffect(() => {
        setWeights(weightData);
    }, ([]))

    return(
        <div className="modal" id="WeightModal">
            <div className="modal-background" onClick={modalClose}></div>
            <div className="modal-content has-background-white py-5 px-6" >
                <div className="columns is-centered">
                    <table className="table">
                        <thead>
                            <th className="is-size-4 has-text-primary-dark has-text-weight-bold">Date</th>
                            <th className="is-size-4 has-text-primary-dark has-text-weight-bold has-text-centered">Weight</th>
                        </thead>
                        <tfoot >
                            <th>
                                <button className="button has-text-weight-bold has-text-primary-dark is-rounded is-small" onClick={addWeight}>
                                    Insert Weight
                                </button>
                            </th>
                            <th>
                                <input className="input is-small is-primary is-rounded has-text-centered" id="newWeight" />
                            </th>
                        </tfoot>
                        <tbody>
                            {

                                weights.map((weight) => (<Row weight ={weight}/>))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

}

export default WeightHistoryModal;