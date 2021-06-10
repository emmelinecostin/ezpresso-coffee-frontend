import { useState } from "react";


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

    const handleSubmit = (e) => {
        e.preventDefault();


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
            <form onSubmit={handleSubmit}>
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
                    onChange={onInputChange}                    requried>
                </input>
                <label>Email</label>
                <input
                    type="text"
                    name="emaiil"
                    value={state.email}
                    onChange={onInputChange}                    required>
                </input>
                <label>Date of Event: </label>
                <input
                    type="text"
                    name="eventDate"
                    value={state.eventDate}
                    onChange={onInputChange}                    requried>
                </input>
                <label>Number of Invited Guests: </label>
                <input
                    type="text"
                    name="invitedGuests"
                    value={state.invitedGuests}
                    onChange={onInputChange}                    requried>
                </input>
                <label>Event Location: </label>
                <input
                    type="text"
                    name="eventLocation"
                    value={state.eventLocation}
                    onChange={onInputChange}                    requried>
                </input>
                <label>Additional Information of Event: </label>
                <textarea
                    type="text"
                    name="additionalInfo"
                    value={state.additionalInfo}
                    onChange={onInputChange}                    requried>
                </textarea>
                <button>Submit Form</button>
            </form>
        </div>
    );
}
export default Inquires;