import MoneyMike from "../images/money-mike.png";

export default function NoMatch() {

    return(
        <div className="pageContainer light-blue-background">
            <div className='longSection'>
                <h1 className="sectionHeader">404 Page Not Found</h1>
                <img src={MoneyMike} />
                <p className="largeBodyText" >Money Mike cannot find what you are looking for. Return <a href="/">Home</a>.</p>
            </div>
        </div>
    )

}
