import React, { useEffect } from 'react';


function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory
    } = props;

    // to update the tab on the browser to reflect the user's category selection
    useEffect(() => {
        document.title = currentCategory.name;
      }, [currentCategory]);

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-testid="link" href="/jacobsworld">
                 Jacobs World!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-testid="about" href="#about" onClick={() => setCurrentCategory(false)}>
                            About me
                        </a>
                    </li>
                    {/* <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li> */}
                    {categories.map((category) => (
                        //<li className="mx-1" key={category.name}>
                        // <span onClick={() => categorySelected(category.name)}>{category.name}</span>
                        <li className={`mx-1 ${currentCategory.name === category.name && 'navActive'}`} key={category.name}>
                            <span onClick={() => {
                                setCurrentCategory(category); 
                            }}>
                                {category.description}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;