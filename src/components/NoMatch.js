import MoneyMike from "../images/money-mike.png";

export default function NoMatch() {

    return(
        <div className="pageContainer light-blue-background">
            <div className='section'>
                <h1 className="sectionHeader">404 Page Not Found</h1>
                
                <div className="center-text">
                   <img src={MoneyMike}
                        style={{
                            width: "80%",
                            margin: "auto",
                            maxWidth: "300px"
                        }}
                        alt="Money Mike"
                    /> 
                </div>
                
                <p className="sectionCaption" >Money Mike cannot find what you are looking for. Return <a href="/">Home</a>.</p>
            </div>
        </div>
    )

}
