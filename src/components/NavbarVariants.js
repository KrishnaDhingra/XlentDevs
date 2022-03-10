const NavbarOpen = (visible) => {
    return {
        hidden: {
            x: 0,
            opacity: 0
        },
        visible: { 
            x: visible,
            opacity: 1,
            transition: {
                type: "none",
                duration: 0.3,
            }
        }
    }
}
export default NavbarOpen