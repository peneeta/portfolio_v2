

function Footer() {

    return (
        <footer className="relative w-screen block z-99 bg-off-white">
            <div className="flex flex-col justify-center items-center gap-3 py-8 text-center">
                <p>Peneeta Wojcik <span>&copy;</span> {new Date().getFullYear()}</p>
                <p className="text-xs">Wow, you scrolled this far? 🤩</p>
            </div>
        </footer>
    )

}

export default Footer