function MenuNavComponent() {
    return (
        <nav id="menuNav">
            <ul>
                <li tabIndex={1}><a href="#">MENU</a></li>
                <li tabIndex={2}><a href="integrantes.html">INTEGRANTES</a></li>
                <li tabIndex={3}><a href="projeto.html">PROJETO</a></li>
                <li tabIndex={4}><a href="faq.html">FAQ</a></li>
                <li tabIndex={5}><a href="contato.html">CONTATO</a></li>
            </ul>    
        </nav>
    )
}

export default MenuNavComponent