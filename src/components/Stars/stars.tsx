import React from 'react';

interface StarProps {
    stars: number
}

const Stars: React.FC<StarProps> = (props) => {
let hackArray = Array<any>();

for (let index = 0; index < props.stars; index++) {
    hackArray.push(index);
}

return (
    <span>
        {hackArray.map((hack)=>{
            return <i key={hack} className="fas fa-star"></i>
        })}
    </span>
  )
}

export default Stars;