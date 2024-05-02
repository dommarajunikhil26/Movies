import { faVideoSlash } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


const Header = () => {
    return (
        <header className="bg-blue-950">
            <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <div
                        style={{
                            "color": "gold"
                        }}
                    >
                        <FontAwesomeIcon icon={faVideoSlash} /> Gold
                    </div>
                    <a href="/home" className="-m-1.5 p-1.5 ml-2">
                        <span className="text-white">Home</span>
                    </a>
                    <a href="#" className="-m-1.5 p-1.5 ml-2">
                        <span className="text-white">Watchlist</span>
                    </a>
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#" className="text-sm font-semibold leading-6 text-gray-100">Log in <span aria-hidden="true">&rarr;</span></a>
                </div>

            </nav>
        </header>
    )
}

export default Header