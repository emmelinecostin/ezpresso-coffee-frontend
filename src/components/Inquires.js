import { useState } from "react";
import axios from 'axios';


const Inquires = () => {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        eventDate: '',
        invitedGuests: '',
        eventLocation: '',
        additionalInfo: '',
    });

    const [result, setResult] = useState(null);

    const sendEmail = (e) => {
        e.preventDefault();

        axios
            .post('/', { ...state })
            .then(response => {
                setResult(response.data);
                setState({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                console.log(response.data)
            })
            .catch(() => {
                setResult({
                    success: false,
                    message: 'Something went wrong. Try again later'
                });
            });
    };


    const onInputChange = (e) => {
        const { name, value } = e.target;

        setState({
            ...state,
            [name]: value
        });
    };

    return (
        < div className="inquiryForm">
            {result && (
                <p className={`${result.success ? 'success' : 'error'}`}>
                    {result.message}
                </p>
            )}
            <form onSubmit={sendEmail}>
                <h2>Let's Chat About Your Event </h2>
                <label >First Name: </label>
                <input
                    type="text"
                    name="firstName"
                    value={state.firstName}
                    onChange={onInputChange}
                    requried>
                </input>
                <label>Last Name: </label>
                <input
                    type="text"
                    name="lastName"
                    value={state.lastName}
                    onChange={onInputChange} requried>
                </input>
                <label>Email</label>
                <input
                    type="text"
                    name="email"
                    value={state.email}
                    onChange={onInputChange} required>
                </input>
                <label>Date of Event: </label>
                <input
                    type="text"
                    name="eventDate"
                    value={state.eventDate}
                    onChange={onInputChange} requried>
                </input>
                <label>Number of Invited Guests: </label>
                <input
                    type="text"
                    name="invitedGuests"
                    value={state.invitedGuests}
                    onChange={onInputChange} requried>
                </input>
                <label>Event Location: </label>
                <input
                    type="text"
                    name="eventLocation"
                    value={state.eventLocation}
                    onChange={onInputChange} requried>
                </input>
                <label>Additional Information of Event: </label>
                <textarea
                    type="text"
                    name="additionalInfo"
                    value={state.additionalInfo}
                    onChange={onInputChange} requried>
                </textarea>
                <button>Submit Form</button>
            </form>
        </div>
    );
}
export default Inquires;