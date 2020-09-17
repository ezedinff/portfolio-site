import React from 'react';

const Header = () => {
    return (
        <ul class="flex md:item-right" style={{background: "var(--navy)", justifyContent: "right"}}>
            <li class="mr-6">
                <a class="text-blue-500 hover:text-blue-800" href="#">Active</a>
            </li>
            <li class="mr-6">
                <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
            </li>
            <li class="mr-6">
                <a class="text-blue-500 hover:text-blue-800" href="#">Link</a>
            </li>
            <li class="mr-6">
                <a class="text-gray-400 cursor-not-allowed" href="#">Disabled</a>
            </li>
        </ul>
    )
}

export default Header;