const Footer = ({ author }) => {

    const year = new Date().getFullYear();

    return (
        <footer>
            <p>&copy; {year} {author}</p>   
        </footer>
    );
}

Footer.defaultProps = {
    author: 'Fiona Y',
}

export default Footer;