import NavBar from "./NavBar"
import "../assets/css/InstructorsPage.css"
import InstructorDirectory from './InstructorDirectory'
const InstructorsPage = () =>
{

    return (
        <div className="homepage-container">
            <NavBar></NavBar>
            <div className="instructorpagecontainer">
                <InstructorDirectory>

                </InstructorDirectory>
            </div>
        </div>
    )
}

export default InstructorsPage