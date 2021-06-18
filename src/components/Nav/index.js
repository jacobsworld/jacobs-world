import React, { useEffect}  from 'react';

function Nav(props) {
    
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
    } = props;

    useEffect(() => {
        document.title = currentCategory.name;
      }, [currentCategory]);
    
    return (
        <header className="flex-row px-1">
            <nav>
                <ul className="flex-row">
                    {/* {categories.map((category) => (
                        <li className="mx-1" key={category.name}>
                        <span onClick={() => categorySelected(category.name)}>
                            {category.name}
                        </span>
                        </li>
                    ))} */}
                    {categories.map((category) => (
                        <li className={`mx-1 ${
                            currentCategory.name === category.name && 'navActive'
                            }`} key={category.name}>
                        <span
                            onClick={() => {
                            setCurrentCategory(category)
                            }}
                        >
                            {category.name}
                        </span>
                        </li>
                    ))}
                </ul>
            </nav>  
        </header>
    );
}

export default Nav;