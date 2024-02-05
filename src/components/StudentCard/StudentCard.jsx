import './StudentCard.css'

const StudentCard = (props) => {

    const firstName = props.firstName
    const lastName = props.lastName
    const image = props.image
    const details = props.bootcampDetails

    return (
        <article className='StudentCard'>
            <img src={image} alt="John Doe" />
            <div className="StudentDetails">
                <hr />
                <h2>{firstName} {lastName}</h2>
                <p>{details.bootcamp} - {details.date}</p>
                <p>{details.city}, {details.fullTime ? 'full' : 'part'} time format</p>
            </div>
        </article>

    )
}

export default StudentCard