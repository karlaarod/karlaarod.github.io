import React from 'react';


export default function Footer(){
    const year= (new Date().getFullYear());

    return (
        <footer>
            <div className='copyright'>
            <h6>Copyright &copy; Karla Rodriguez {year}</h6>
        </div>
        </footer>
    )

}