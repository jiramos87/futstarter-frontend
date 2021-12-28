const LoadingScreen = () => {
    return (
        <div className="loading-screen bg-loading d-flex flex-column justify-content-center align-items-center">
            <img src={"http://localhost:3000/logo.png"} className="loading-logo"/>
            <img src={"http://localhost:3000/loading.gif"} className="loading-gif"/>
        </div>
    )
}

export default LoadingScreen