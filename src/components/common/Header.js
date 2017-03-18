import React, {PropTypes} from 'react';
import {Link,IndexLink} from 'react-router';

const Header = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="navbar-fluid">
                <IndexLink to="/" activeClassName="active">Home</IndexLink>
                {" | "}
                <Link to="/courses" activeClassName="active" >Courses</Link>
                {" | "}
                <Link to="/about" activeClassName="active" >About</Link>
            </div>
        </nav>
    );
};

export default Header;
