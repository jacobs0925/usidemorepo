import NavBar from "./NavBar"
import "../assets/css/InstructorsPage.css"
import InstructorDirectory from './InstructorDirectory'
import Footer from "./Footer"
const InstructorsPage = () =>
{

    return (
        <div className="homepage-container">
            <NavBar></NavBar>
            <div className="instructorpagecontainer">
                <InstructorDirectory>

                </InstructorDirectory>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default InstructorsPage