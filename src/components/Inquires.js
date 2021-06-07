import { useState } from "react";


const Inquires = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [invitedGuests, setInvitedGuests] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [additionalInfo, setAdditionalInfo] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const inquiry = {firstName, lastName, email, eventDate,
        invitedGuests, eventLocation, additionalInfo}

        fetch('', {
        method: 'POST', 
        headers: { "Content-Type": "application/json"}, 
        body: JSON.stringify(inquiry)
        }).then(() => {
            console.log("new blog added ")
        })
    }
    return (
        < div className="inquiryForm">
            <h2>Let's Chat About Your Event </h2>
            <form onSubmit={handleSubmit}>
                <label >First Name: </label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    requried>
                </input>
                <label>Last Name: </label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    requried>
                </input>
                <label>Email</label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required>
                </input>
                <label>Date of Event: </label>
                <input
                    type="text"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    requried>
                </input>
                <label>Number of Invited Guests: </label>
                <input
                    type="text"
                    value={invitedGuests}
                    onChange={(e) => setInvitedGuests(e.target.value)}
                    requried>
                </input>
                <label>Event Location: </label>
                <input
                    type="text"
                    value={eventLocation}
                    onChange={(e) => setEventLocation(e.target.value)}
                    requried>
                </input>
                <label>Additional Information of Event: </label>
                <textarea
                    type="text"
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                    requried>
                </textarea>
                <button>Submit Form</button>
            </form>
        </div>
    );
}

export default Inquires;