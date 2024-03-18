import home from "@/app/components/HomeNav/homenav.png"

const HomeNav = () => {
    return (
            <a href="/contents">
                <img className='homenav' src={home.src} />
            </a>
    )
}

export default HomeNav;