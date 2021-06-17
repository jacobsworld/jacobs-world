import React from 'react';

function Nav() {

    const categories = [
        {
          name: "Summer",
          description: "Summer",
        },
        { 
            name: "Fall", 
            description: "Summer" 
        },
        { 
            name: "Winter", 
            description: "Winter" 
        },
        {
          name: "Spring",
          description: "Spring",
        }
      ];
    
      function categorySelected(name) {
        console.log(`${name} clicked`)
      }
  return (
    <header>
        <nav>
            <ul className="flex-row">
                {categories.map((category) => (
                    <li className="mx-1" key={category.name}>
                    <span onClick={() => categorySelected(category.name)}>
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